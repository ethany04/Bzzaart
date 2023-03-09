import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import SwipePage from'./SwipePage'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <SwipePage/>
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
