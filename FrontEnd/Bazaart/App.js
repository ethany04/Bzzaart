import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import SwipePage from'./SwipePage'
import ArtWorkPage from './ArtWorkPage'
import ChatPage from './chatPage'
import messagesScreen from './messagesScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ChatPage/>
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
