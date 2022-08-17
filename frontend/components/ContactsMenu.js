import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const contacts = [
    {
        type: "starred",
        name: "Favorites"
    },
    {
        type: "contact",
        name: "Oscar Peterson",
        picture: require("../assets/oscarPete.png")
    },
    {
        type: "contact",
        name: "Emmet Cohen",
        picture: require("../assets/emmetCohen.png")
    },
    {
        type: "contact",
        name: "Cory Henry",
        picture: require("../assets/coryHenry.png")
    }
]

function ContactsMenu() {

    return (
        <View style={styles.container}>

            {contacts.map((item, index) => 
                <View
                    style={styles.row}
                    key={index}
                    >
                    {item.type == "starred" ?
                        <View style={styles.starredIcon}>
                            <AntDesign name="star" size={30} color="#F6E4EC"/>
                        </View> :
                        <Image source={item.picture} style={styles.image}/> 
                    }
                    
                    <Text style={styles.text}>{item.name}</Text>
                </View>
            )}
            
        </View>
    )
    
}
export default ContactsMenu

const styles = StyleSheet.create({
    container: {

    },
    row: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center"
    },
    starredIcon: {
        backgroundColor: "#CB5C8D",
        height: 55,
        width: 55,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
    text: {
        color: "#F6E4EC",
        paddingLeft: 15,
        fontSize: 18
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 15
    }
})
