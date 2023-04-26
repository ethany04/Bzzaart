import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import { Linking } from 'react-native';


const portfolioURL="txconvergent.org"
const socialURL="instagram.com/txconvergent"
const renderItem = ({ item }) => (
    <View style={styles.item} resizeMode="cover">
      <Image source={item.image} style={styles.image} />
    </View>
);



export default function ArtistProfileScreen() {


  return (

    <SafeAreaView style={styles.safeViewContainer}>
        <ImageBackground source={require('../../assets/customerprof.png')} style={{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center'}} >
            <View style={styles.container}>
                <Image style={styles.profilePic} source={require('../../assets/priya.png')} />

                <Text style={styles.name}>Priya Barve</Text>
                <Text style={styles.paragraph}>she/her</Text>
                <Text onPress={() => Linking.openURL(portfolioURL)} style={styles.paragraph}>
                    {portfolioURL}
                </Text>
                <Image style={styles.logo} source={require('../../assets/instagram.png')} />
            </View>
            <Text style={styles.signOut}>Sign Out</Text>
        </ImageBackground>
    </SafeAreaView>      

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 0,
    backgroundColor: 'transparent',
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
    width: 200,
    height: 200,
    flexDirection: 'row',
    marginVertical: 5,
    borderRadius: 100,
  },
  safeViewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFDAE3',
  },
  artistProfileButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 2,
    paddingBottom: 5,
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderTopWidth: 1,
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
  logo: {
    height: 60,
    width: 60,
  },
  signOut: {
    top: 65,
    textDecorationLine: 'underline',
  }

});