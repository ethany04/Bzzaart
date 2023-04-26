import * as React from 'react';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import MainContainer from './navigation/MainContainer';
import Swipe2 from './navigation/screens/Swipe2'
import SwipeEthan from './navigation/screens/SwipeScreen';


export default function App() {

  return (
    // <View style={styles.container}>
    //   <View style={styles.row}>
    //     <MainContainer/>
        
    //   </View>
    // </View>
    <MainContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -100,
  },
  instructionText: {
    marginRight: 10,
  },
  bottom: {
    backgroundColor: 'aquamarine',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  fab: {
    position: 'absolute',
    right: 16,
  },
});
