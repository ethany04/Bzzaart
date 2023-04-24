import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import SwipePage from'./SwipePage'
import ArtWorkPage from './ArtWorkPage'
import ChatPage from './chatPage'
import ArtistProfile from './ArtistProfile'
import MessageScreen from './MessageScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <MessageScreen></MessageScreen>
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
