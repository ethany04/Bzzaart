import React from "react";
import { View, Text }  from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={({ headerShown: false})}>
            <Stack.Group>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="LikedArtists" component={LikedArtists} />
                <Stack.Screen name="ChatPage" component={ChatPage} />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default StackNavigator;