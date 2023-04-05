import * as React from 'react';

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createButtonTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StyleSheet, Text, View } from 'react-native';

import SwipePage from './SwipePage';
import ChatPage from './ChatPage';
import LikedArtists from './LikedARtists';



const Tab = createButtonTabNavigator();



export default function MainNavigation() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={SwipePage} />
                <Tab.Screen name="Chat" component={ChatPage} />
                <Tab.Screen name="Liked Artists" component={LikedArtists} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}