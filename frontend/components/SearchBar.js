import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";

function SearchBar() {
    return (
        <View style={styles.container}>
            <Fontisto name="search" size={20} color="#E5AEC6"/>
            <Text style={styles.textSearchBar}>Search</Text>
        </View>
    )
    
}
export default SearchBar

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#F6E4EC",
        paddingHorizontal: 10,
        height: 40,
        alignItems: "center",
        borderRadius: 10,
    },
    textSearchBar: {
        color: "#E5AEC6",
        paddingLeft: 10,
        fontSize: 20,
    }
})