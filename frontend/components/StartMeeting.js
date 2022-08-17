import React from 'react'
import { View, Text, StyleSheet, TextInput, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native';


// 4) Here, we receive the useState variables to change their values here, but have the be reflected in MeetingRoom.js
function StartMeeting({name, setName, roomId, setRoomId, joinRoom}) {


  return (
    <View>
      {/* Start Meeting */}
      <View style={styles.startMeetingContainer}>
            <View style={styles.info}>
                <TextInput
                    style={styles.textInput}
                    value={name}
                    placeholder="Enter Name"
                    placeholderTextColor={"#E5AEC6"}
                    onChangeText={text => setName(text)}
                />
            </View>
            <View style={styles.info}>
                <TextInput
                        style={styles.textInput}
                        value={roomId}
                        placeholder="Enter Jam Id"
                        placeholderTextColor={"#E5AEC6"}
                        onChangeText={text => setRoomId(text)}
                    />
            </View>
        </View>
        {/* 5) This button triggers joinRoom with values from input boxes  */}
        <View style={{ alignItems: "center"}}>
            <TouchableOpacity
                onPress={()=>joinRoom()}
                style={styles.startMeetingButton}
            >
                <Text style={styles.buttonText}>
                    Start Jam
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default StartMeeting

const styles = StyleSheet.create({
  startMeetingContainer: {

  },
  info: {
      width: "100%",
      backgroundColor: "#D477A0",
      height: 50,
      borderColor: "#E5AEC6",
      borderTopWidth: 1,
      borderBottomWidth: 1,
      padding: 12,
      justifyContent: "center"
      
  },
  textInput: {
      color: "#F6E4EC",
      fontSize: 18,
  },
  startMeetingButton: {
      height: 50,
      width: 350,
      marginTop: 20,
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F6E4EC"

  },
  buttonText: {
      color: "#D477A0",
      fontSize: 18,
      fontWeight: "bold"
  }
})