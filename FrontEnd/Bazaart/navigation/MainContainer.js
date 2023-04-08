import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import BookmarkScreen from './screens/BookmarkScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';
import SwipeScreen from './screens/SwipeScreen';

//Screen names
const swipeName = "Swipe";
const bookmarkName = "Bookmark";
const chatName = "Chat";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={swipeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === swipeName) {
                iconName = focused ? 'home' : 'home-outline';
            } else if (rn === chatName) {
                iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
            } else if (rn === bookmarkName) {
                iconName = focused ? 'bookmarks' : 'bookmarks-outline';
            } else if (rn === profileName) {
                iconName = focused ? 'person-circle' : 'person-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
        })}
        tabBarOptions={{
            showLabel: false,
            activeTintColor: 'black',
            inactiveTintColor: 'black',
            style: { padding: 50, height: 10 },
            tabStyle: { backgroundColor: 'rgba(255, 218, 227, 1)', paddingBottom: 25, height: 80 },
        }}
        >

        <Tab.Screen name={swipeName} component={SwipeScreen} />
        <Tab.Screen name={bookmarkName} component={BookmarkScreen} />
        <Tab.Screen name={chatName} component={ChatScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;