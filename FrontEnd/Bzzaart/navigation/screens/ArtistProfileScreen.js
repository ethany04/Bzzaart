import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, Pressable, SafeAreaView, ScrollView, StatusBar, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { Linking, LogBox } from 'react-native';


const renderItem = ({ item }) => (
    <View style={styles.item} resizeMode="cover">
      <Image source={item.image} style={styles.image} />
    </View>
);

const artist = this.props.route.params.artist
const portfolioURL="txconvergent.org"
const socialURL="instagram.com/caraungg"
const artistPics = artist.artworks;

export default function ArtistProfileScreen({ navigation }) {

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

  return (
    <SafeAreaView style={styles.safeViewContainer}>
      {artist.map((currArtist) => 
        <View>
          <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate("SwipeScreen")}>
              <Image style={{ width: 20, height: 20, right: 160 }} source={require('../../assets/back.png')} />
            </Pressable>

            <Image style={styles.profilePic} source={{ uri: currArtist.pfp }} />

            <Text style={styles.name}>{currArtist.name}</Text>
            <Text style={styles.paragraph}>{currArtist.pronouns}</Text>
            <Text onPress={() => Linking.openURL(portfolioURL)} style={styles.paragraph}>{portfolioURL}</Text>
            <Text onPress={() => Linking.openURL(socialURL)} style={styles.paragraph}>{socialURL}</Text>
          </View>


          <View style={styles.artistProfileButtons}>
                <Text>                     info                                           reviews                 </Text>
          </View>

          <View style={styles.scrollView}>
            <View style={styles.box}>
              <Text style={styles.headerText}>Meet {currArtist.name}</Text>
              <Text style={styles.artistInfoText}>✨ {currArtist.description}</Text>
              <Text style={styles.artistInfoText}>📍 Based in {currArtist.city}</Text>
            </View>

            <FlatList
                data={artistPics}
                key={1}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
            />
          </View>
        </View>
      )}
</SafeAreaView>      

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 8,
    paddingVertical: 5,
    backgroundColor: 'rgba(255, 218, 227, 1)',
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
    backgroundColor: 'rgba(255, 218, 227, 1)',
    alignItems: 'center',
  },
  scrollView: {
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: 10,
    height: 500,
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
    width: 390
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
    paddingBottom: 5,
    width: 370,
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