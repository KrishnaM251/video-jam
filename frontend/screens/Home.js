import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import ContactsMenu from "../components/ContactsMenu";
import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import MenuButtons from "../components/MenuButtons";

function Home( { navigation }) {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ height: '100%'}}>
                <Header/>
                <SearchBar/>
                <MenuButtons navigation={navigation}/>
                <ContactsMenu/>
            </SafeAreaView>
            
        </View>
    )
    
}
export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#BA2667",
        padding: 15
    }

})