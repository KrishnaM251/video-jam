import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import MeetingRoom from "./screens/MeetingRoom";

export default function Navigation() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen 
                    name="Home"
                    component={Home}
                    options={{ headerShown: false}}
                />
                <Stack.Screen
                    name="MeetingRoom"
                    component={MeetingRoom}
                    options={{ 
                        title: "Start a Jam",
                        headerStyle: {
                            backgroundColor: "#BA2667",
                            
                            // removes line under navigation's default header
                            shadowOpacity: 0,                            
                        },
                        headerTintColor: "#F6E4EC"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
