import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import BookmarkScreen from './screens/BookmarkScreen';
import ChatScreen from './screens/ChatScreen';
import ArtworkInfo from './screens/ArtworkInfoScreen';
import SwipeScreen from './screens/SwipeScreen';
import ArtistProfileScreen from './screens/ArtistProfileScreen';
import CustomerProfileScreen from './screens/CustomerProfileScreen';
import MessageScreen from './screens/MessageScreen';

//Screen names
const swipeName = "Swipe";
const bookmarkName = "Bookmark";
const chatName = "Chat";
const profileName = "Profile";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const SwipeStack = () => {
   
  return (
    <Stack.Navigator initialRouteName="SwipeScreen" screenOptions={{ headerShown: false }}>
       <Stack.Screen name="SwipeScreen" component={SwipeScreen} />
       <Stack.Screen name="MessageScreen" component={MessageScreen} />
       <Stack.Screen name="ArtistProfile" component={ArtistProfileScreen} />
    </Stack.Navigator>
  )
}

function MainContainer({ route }) {

  const bookmarkedArtists = [];
  
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

          tabBarShowLabel: false,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
          tabBarBorderTopWidth: 2,
          tabBarBorderColor: 'black',
          tabBarStyle: { backgroundColor: 'rgba(255, 218, 227, 1)', paddingBottom: 25, height: 80 },
          tabBarLabelPosition: 'above-icon',
        })}
        >

        <Tab.Group tabBar={props => <BottomTabBar {...props} state={{...props.state, routes: props.state.routes.slice(0,4)}}></BottomTabBar>}>
          <Tab.Screen name={swipeName} component={SwipeStack} initialParams={ {bookmarkedArray: bookmarkedArtists} } />
          <Tab.Screen name={bookmarkName} component={BookmarkScreen} initialParams={ {bookmarkedArray: bookmarkedArtists} }/>
          <Tab.Screen name={chatName} component={ChatScreen} />
          <Tab.Screen name={profileName} component={CustomerProfileScreen} />
        </Tab.Group>

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;