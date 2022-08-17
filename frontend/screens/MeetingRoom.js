import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Touchable, Alert, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import StartMeeting from '../components/StartMeeting';
import { io } from "socket.io-client";
import { Camera } from "expo-camera";
import FontAwesome from "react-native-vector-icons/FontAwesome"


const menuIcons = [
    {
        id: 1,
        name: "microphone",
        title: "Mute",
        customColor: "#F6E4EC"
    },
    {
        id: 2,
        name: "video-camera",
        title: "Stop",
    },
    {
        id: 3,
        name: "upload",
        title: "Share",
    },
    {
        id: 4,
        name: "arrow-left",
        title: "Leave",
    },
]

let socket;

function MeetingRoom({ navigation }) {

    const [name, setName] = useState();
    const [roomId, setRoomId] = useState();
    const [activeUsers, setActiveUsers] = useState([]);
    const [startCamera, setStartCamera] = useState(false);

    useEffect(() => {
        // 1) Connect to connection string
        socket = io("https://9610-2600-1700-6fe0-a110-3823-c077-f587-e6df.ngrok.io");
        console.log("Meeting Room has been built.")
        socket.on('connection', ()=>console.log("connected"))

        // 9) armed with up-to-date list of users in "roomId"
        socket.on("all-users", users => {
            console.log(users)
            setActiveUsers(users)
            console.log("Active Users", activeUsers);
            
        })
    }, [])

    // 6) starts camera and sends signal to backend
    const joinRoom = () => {
        startCameraFunc();
        socket.emit('join-room', { roomId: roomId, userName: name})
    }

    const startCameraFunc = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        if(status == "granted") {
            setStartCamera(true);
        } else {
            Alert.alert("access denied")
        }
    }

    const disconnect = () => {
        socket.disconnect();
        navigation.navigate("Home")
    }



  return (
    <View style={styles.container}>
        {startCamera ? (
            // Camera
            <SafeAreaView style={{ flex: 1  }}>
                <View style={styles.activeUsersContainer}>
                    <View style={styles.cameraContainer}>
                        <Camera
                        type={"front"}
                        style={{
                            width: activeUsers.length <= 1   ? "100%" : 225,
                            height: activeUsers.length <= 1 ? 450 : 225
                        }}
                        >
                        </Camera>
                        {activeUsers.filter(user => (user.userName !== name)).map((user, index) => 
                            <View key={index} style={styles.activeUserContainer}>
                                <Text style={{color : "#F6E4EC"}}>{user.userName}</Text>
                            </View>
                        )}
                    </View>
                </View>
                
                {/* Footer */}
                <View style={styles.menu}>
                    {menuIcons.map((icon, index) => 
                        <TouchableOpacity 
                            key={index} 
                            style={styles.tile}
                            onPress={disconnect}>
                            <FontAwesome
                                name={icon.name}
                                size={24}
                                color={"#F6E4EC"}
                            />
                            <Text style = {styles.textTile}>{icon.title}</Text>
                        </TouchableOpacity> 
                    )}
                </View>
            </SafeAreaView>
            
        ) : (
            // 3) by default, camera not started so we load input boxes and "start jam" button
            <StartMeeting
                name={name}
                setName={setName}
                roomId={roomId}
                setRoomId={setRoomId}
                joinRoom={joinRoom}
            />
        )}
        
    </View>
  )
}

export default MeetingRoom

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#BA2667",
        flex: 1
    },
    textTile: {
        color: "#F6E4EC",
        marginTop: 10,
    },
    menu: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    cameraContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    activeUsersContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    activeUserContainer: {
        borderColor: "gray",
        borderWidth: 1,
        width: 225,
        height: 225,
        justifyContent: "center",
        alignItems: "center"
    },
    tile: {
        width: 60,
        height: 60,
        marginBottom: 20,
        backgroundColor: "#DC93B3",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    }

})