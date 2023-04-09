import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import SwipePage from'./SwipePage'
import ArtWorkPage from './ArtWorkPage'
import ChatPage from './chatPage'
import MessageV2 from './MessageV2'
import ArtistProfile from './ArtistProfile'
import { Message } from 'react-native-gifted-chat';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ChatPage></ChatPage>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -100,
  },
  instructionText: {
    marginRight: 10,
  }
});
