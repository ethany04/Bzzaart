import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, Pressable, SafeAreaView, ScrollView, StatusBar, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { Linking, LogBox } from 'react-native';


const portfolioURL="txconvergent.org"
const socialURL="instagram.com/txconvergent"
const renderItem = ({ item }) => (
    <View style={styles.item} resizeMode="cover">
      <Image source={item.image} style={styles.image} />
    </View>
);

const artistPics = [
  { key: 'item1', image: require('../../assets/BouquetSunflowers.jpeg')},
  { key: 'item2', image: require('../../assets/Bordighera.jpg')},
  { key: 'item3', image: require('../../assets/WaterLilies.jpeg') },
  { key: 'item4', image: require('../../assets/WaterLilyPond.jpeg') },
  { key: 'item5', image: require('../../assets/Giverny.jpeg')},
  { key: 'item6', image: require('../../assets/SanGiorgio.jpeg')},

];



export default function ArtistProfileScreen() {

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

  return (

    <SafeAreaView style={styles.safeViewContainer}>
      <View style={styles.container}>

        <Image style={styles.profilePic} source={require('../../assets/tesna.png')} />

        <Text style={styles.name}>Tesna Thomas</Text>
        <Text style={styles.paragraph}>she/her</Text>
        <Text onPress={() => Linking.openURL(portfolioURL)} style={styles.paragraph}>{portfolioURL}</Text>
        <Text onPress={() => Linking.openURL(socialURL)} style={styles.paragraph}>{socialURL}</Text>
        <Pressable style={styles.button} onPress={() => Alert.alert('go to dm page')}>
          <Text style={styles.whiteText}>message</Text>
        </Pressable>
      </View>


      <View style={styles.artistProfileButtons}>
            <Text>                 info                                         reviews                 </Text>
      </View>

      <View style={styles.scrollView}>
        <View style={styles.box}>
          <Text style={styles.headerText}>Meet Tesna!</Text>
          <Text style={styles.artistInfoText}>✨ Custom landscape paintings & photographic prints</Text>
          <Text style={styles.artistInfoText}>📍 Based in NYC</Text>
        </View>

        <FlatList
            data={artistPics}
            key={1}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
        />
      </View>
</SafeAreaView>      

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 8,
    paddingVertical: 5,
    backgroundColor: '#FFDBA7',
    width: '100%'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  paragraph: {
    // margin: 24,
    // padding: 10,
    fontSize: 18,
    textAlign: 'center',
    marginVertical: -3,
    marginBottom: 5,

  },
  profilePic: {
    width: 100,
    height: 100,
    flexDirection: 'row',
    marginVertical: 5,
    borderRadius: 50,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderRadius: 10,
    elevation: 10,
    backgroundColor: 'black',
    marginVertical: 1,
    marginBottom: 6,
  },
  whiteText: {
    color: 'white',
  },
  safeViewContainer: {
    flex: 1,
    backgroundColor: '#FFDBA7',
    alignItems: 'center',
  },
  scrollView: {
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: 10,
    height: 288,
  },
  artistProfileButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'space-between',
    paddingTop: 2,
    paddingBottom: 5,
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    backgroundColor: '#FAEFE5',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  artistInfoText: {
    fontSize: 15,
    padding: 2,
  },
  box: {
    paddingBottom: 5
  },
  item: {
    flex: 1,
    margin: 0,
    aspectRatio: 1,
    overflow: 'hidden',
    padding: 5,
  },
  image: {
      alignSelf: 'center',
      height:'100%', 
      width:'100%'
  },

});