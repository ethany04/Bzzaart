import React, { useState } from 'react'
import { ImageBackground, Text, View, SafeAreaView, Button, Modal } from 'react-native'
import TinderCard from 'react-tinder-card'
import FlipCard from 'react-native-flip-card'

const styles = {
  safeView: {
    backgroundColor: 'pink',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 1,
  },
  header: {
    color: '#000',
    fontSize: 30,
    marginBottom: 30,
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
    margin: 10,
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
}

const db = [
  {
    name: 'Asmita Karmakar',
    img: require('./assets/asmita.png')
  },
  {
    name: 'Jatin Kulkarni',
    img: require('./assets/jatin.png')
  },
  {
    name: 'Priya Barve',
    img: require('./assets/priya.png')
  },
  {
    name: 'Megha Sengupta',
    img: require('./assets/megha.png')
  },
  {
    name: 'Neer Jain',
    img: require('./assets/neer.png')
  },
  {
    name: 'Ryan Chu',
    img: require('./assets/ryan.png')
  },
  {
    name: 'Tesna Thomas',
    img: require('./assets/tesna.png')
  }
]

// test() {
//   fetch('http://yourPCip:5000/users')
//     .then(response => response.json())
//     .then(users => console.warn(users))
// }

SearchForImg=()=>
{
  var SearchAPIURL = "http://localhost:5000";

  var header={
        'Accept':'application/json',
        'Content-Type':'application/json'
  };

  var Data={

  };

  fetch(
      SearchAPIURL,
      {
        method:'POST',
        headers:header,
        body: JSON.stringify(Data),
      }
  )
}
 

function Simple() {
  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const [modalVisible, setModalVisible] = useState(false);

  // constructor() ;{
  //   this.state={show: false}
  // }

  return (
    <SafeAreaView style={styles.safeView}>
        <Text style={styles.header}>Find an Artist!</Text>
        <View style={styles.cardContainer}>
            {characters.map((character) =>
              <TinderCard key={character.name} onSwipe={(dir) => swiped(dir, character.name)} preventSwipe={['down']}>
                  <View style={styles.card}>
                    <ImageBackground style={styles.cardImage} source={character.img}>
                      <Text style={styles.cardTitle}>{character.name}</Text>
                    </ImageBackground>
                  </View>
              </TinderCard>
            )}
        </View>
        <Button title="show modal" onPress={() => setModalVisible(!modalVisible)} />                  
        <View style={styles.safeView}>
          <Modal
          transparent={ true }
          visible={ modalVisible }
          animationType='slide'
          >
            <View style={styles.outerModal}>
              <Text style={{fontSize: 50}}>this is the modal</Text>
              <Button title="hide modal" onPress={() => setModalVisible(!modalVisible)} />
            </View>
          </Modal>
        </View>
    </SafeAreaView>
  )
}

export default Simple
