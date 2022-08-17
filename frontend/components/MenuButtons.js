import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const items = [
    {
        id: 1,
        name: "video-camera",
        title: "New Meeting"
    },
    {
        id: 2,
        name: "plus-square",
        title: "Join"
    },
    {
        id: 3,
        name: "calendar",
        title: "Schedule"
    },
    {
        id: 4,
        name: "upload",
        title: "Share Screen"
    }
]

function MenuButtons( { navigation } ) {

    const openMeeting = () => {
        navigation.navigate("MeetingRoom")
    }

    return (
        <View style={styles.container}>

            { items.map((item,index) => 
                <View 
                    style={styles.buttonContainer}
                    key={index}
                >
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={()=>openMeeting() }>
                        <FontAwesome name={item.name} size={23} color="#F6E4EC"/>
                    </TouchableOpacity>
                    <Text style={styles.menuText}>{item.title}</Text>
                </View>
            ) }

            
        </View>
    )
    
}
export default MenuButtons

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 5,
        marginTop: 25,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#CB5C8D"
    },
    buttonContainer: {
        alignItems: "center",
        flex: 1
    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: "#DC93B3",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    menuText: {
        color: "#F6E4EC",
        fontSize: 12,
        paddingTop: 10,
    }
})