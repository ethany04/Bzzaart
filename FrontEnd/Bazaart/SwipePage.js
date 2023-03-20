import React, { useState } from 'react'
import { ImageBackground, Text, View } from 'react-native'
import TinderCard from 'react-tinder-card'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  header: {
    color: '#000',
    fontSize: 30,
    marginBottom: 20,
  },
  cardContainer: {
    width: 350,
    height: 620,
  },
  card: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 260,
    height: 300,
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
    <SafeAreaView>
        <View style={styles.container}>
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
        </View>
    </SafeAreaView>
  )
}

export default Simple
