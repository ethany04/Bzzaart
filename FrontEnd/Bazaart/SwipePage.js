import React, { useState } from 'react'
import { ImageBackground, Text, View, SafeAreaView, Button } from 'react-native'
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
    height: 630,
  },
  card: {
    position: 'absolute',
    backgroundColor: 'black',
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
  infoText: {
    height: 28,
    justifyContent: 'center',
    display: 'flex',
    zIndex: -100,
  },
  flipCard: {
    position: 'absolute',
  }
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

function Simple() {
  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  return (
    <SafeAreaView style={styles.safeView}>
        <Text style={styles.header} onPress>Find an Artist!</Text>
        <View style={styles.cardContainer}>
            {characters.map((character) =>
              <TinderCard key={character.name} onSwipe={(dir) => swiped(dir, character.name)} preventSwipe={['down']}>
                <FlipCard
                  style={styles.card}
                  friction={6}
                  flipHorizontal={true}
                  flipVertical={false}
                  flip={false}
                  clickable={true}
                  onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
                >
                  <View style={styles.card}>
                    <ImageBackground style={styles.cardImage} source={character.img}>
                      <Text style={styles.cardTitle}>{character.name}</Text>
                    </ImageBackground>
                  </View>
                  
                </FlipCard>
              </TinderCard>
            )}
        </View>
    </SafeAreaView>
  )
}

export default Simple
