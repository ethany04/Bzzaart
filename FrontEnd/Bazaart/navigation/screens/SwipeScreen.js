import React, { useState, useEffect } from 'react'
import { ImageBackground, Text, View, Button, Modal, TouchableOpacity, Image, Pressable } from 'react-native'
import TinderCard from 'react-tinder-card'
import { Avatar } from 'react-native-elements';
import { Swiper } from 'react-native-deck-swiper';


const styles = {
  safeView: {
    backgroundColor: 'rgba(255, 218, 227, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 1,
  },
  header: {
    color: '#000',
    fontSize: 30,
    marginTop: 60,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  cardContainer: {
    width: 350,
    height: 620,
  },
  card: {
    position: 'absolute',
    backgroundColor: '#000000aa',
    width: '100%',
    maxWidth: 350,
    height: 620,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  cardImage: {
    width: 350,
    height: 620,
    overflow: 'hidden',
    borderRadius: 20,
  },
  cardTitle: {
    position: 'absolute',
    bottom: 0,
    margin: 15,
    color: '#fff',
  },
  flipCard: {
    position: 'absolute',
  },
  outerModal: {
    backgroundColor: '#000000aa',
    position: 'absolute',
    width: '100%',
    maxWidth: 350,
    height: 620,
    borderRadius: 20,
    top: 143,
    left: 21,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  imageProp: {
    position: 'absolute',
    flex: 1,
  },
  touchProps: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchContainer: {
    position: 'absolute',
    bottom: 25,
    margin: 15,
  },
  avatarContainer: {
    position: 'absolute',
    bottom: 30,
    margin: 15,
    color: '#fff',
  }
}

function Simple() {
  const [lastDirection, setLastDirection] = useState()

  const [modalVisible, setModalVisible] = useState(false);
  const [artworks, setArtworks] = useState([]);
  const [id, setId] = useState(false);
  
  useEffect(() => {

    var SearchAPIURL = "http://localhost:5000/images";

    var header={
          'Accept':'application/json',
          'Content-Type':'application/json'
    };

    var Data={

    };
    fetch(
        SearchAPIURL,
        {
          method:'GET',
          headers:header,
        }
    )
    .then((response) => response.json())
    .then((result) => {
      console.log('fetched: ' + 'http://localhost:5000/images');
      var postArr = [];
      for (const [key, value] of Object.entries(result)) {
        postArr.push(value);
      }
      setArtworks(postArr);
    })
  }), [id];

  return (
    <View style={styles.safeView}>        
      <Text style={styles.header}>Find an Artist!</Text>
        <View style={styles.cardContainer}>
            {artworks.map((artwork) =>
              <TinderCard key={artwork.name} onSwipe={() => console.log(artwork.img)} preventSwipe={['down']}>
                  <View style={styles.card}>
                    <ImageBackground style={styles.cardImage} src={ `/Users/ethanyu/Documents/sp23 bt/sp23-compensation/FrontEnd/Bazaart/assets/${artwork.img}` } />
                      {/* <Pressable onPress={() => console.log("PRESSED YEEEE")}> */}
                        
                      {/* </Pressable> */}
                      <View style={styles.avatarContainer}>
                        <Avatar
                          rounded
                          size="large"
                          source={require('../../assets/tesna.png')}
                          onPress={() => console.log("PRESSED")}
                        />
                      </View>
                      <Text style={styles.cardTitle}>{artwork.name}</Text>
                  </View>
              </TinderCard>
              // <View style={ {flex: 1, margin: -6} }>
              //   <Swiper
              //     containerStyle={ {backgroundColor: 'transparent'}}
              //     cards={artworks}
              //     key={artwork.name}
              //   >
              //       <View style={{backgroundColor: 'red', height: 0.75, rounded: 'xl'}}>
              //         <Text>{artwork.name}</Text>
              //       </View>
              //   </Swiper>

              // </View>
            )}
        </View>
        <Button title="show modal" onPress={() => setModalVisible(true)} />                  
        <View style={styles.safeView}>
          <Modal
          transparent={ true }
          visible={ modalVisible }
          animationType='fade'
          >
            <View style={styles.outerModal}>
              <Text style={{fontSize: 50}}>this is the modal</Text>
              <Button title="hide modal" onPress={() => setModalVisible(!modalVisible)} />
            </View>
          </Modal>
        </View>
    </View>
  )
}

export default Simple
