import React, { useState, useEffect } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Button, Text, View, SafeAreaView, Image, ImageBackground, Modal, LogBox, Pressable, Alert } from 'react-native'
import { Avatar } from 'react-native-elements';
import ArtistProfileScreen from './ArtistProfileScreen';


function SwipeScreen({ navigation }) {

  useEffect(() => {
    LogBox.ignoreAllLogs();
  },)

    printArray = () => {
      console.log(db)
    }

    const [modalVisible, setModalVisible] = useState(false);
    const [artworks, setArtworks] = useState([]);
    const [tappedArtist, setTappedArtist] = useState([]);

    const swipedArtists = [];
    
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
            value.img = '/Users/ethanyu/Documents/sp23 bt/sp23-compensation/FrontEnd/Bazaart/assets/' + value.img
            value.pfp = '/Users/ethanyu/Documents/sp23 bt/sp23-compensation/FrontEnd/Bazaart/assets/' + value.pfp
            postArr.push(value);
        }
        setArtworks(postArr);
        })
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Swiper
              ref={swiper => {
                this.swiper = swiper
              }}
              onSwipedLeft={() => console.log('left')}
              onSwipedRight={(cardIndex) => swipedArtists.push(artworks[cardIndex])}
              onSwipedTop={(cardIndex) => {navigation.navigate("MessageScreen", {currArtist: artworks[cardIndex]}); console.log(artworks[cardIndex]) }}
              cards={artworks}
              cardIndex={0}
              renderCard={(artwork) => (artwork &&
                <View key={artwork.artwork_id} style={styles.cardActual}>
                  <ImageBackground source={{uri: artwork.img}} style={styles.cardImage}>
                    <Avatar
                        rounded
                        size="large"
                        source={{uri: artwork.pfp}}
                        onPress={() => {setModalVisible(true); tappedArtist[0] = artworks[0]; console.log(artworks[0])}}
                        containerStyle={styles.avatarContainer}
                      />
                    <Text style={styles.cardTitle} onPress={() => console.log(artwork.pfp)}>{artwork.name}</Text>
                  </ImageBackground>
                </View>
  
             )}
             overlayLabels={{
                left: {
                  element: <Image source={require('../../assets/thumbsdown.png')} style={{resizeMode: 'contain', height: 100, width: 100}}/>,
                  title: 'DISLIKE',
                  style: {
                    label: {
                      backgroundColor: 'black',
                      borderColor: 'black',
                      color: 'white',
                      borderWidth: 1
                    },
                    wrapper: {
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      justifyContent: 'flex-start',
                      marginTop: 30,
                      marginLeft: -30
                    }
                  }
                },
                right: {
                  element: <Image source={require('../../assets/thumbsup.png')} style={{resizeMode: 'contain', height: 100, width: 100}}/>,
                  title: 'LIKE',
                  style: {
                    label: {
                      backgroundColor: 'black',
                      borderColor: 'black',
                      color: 'white',
                      borderWidth: 1
                    },
                    wrapper: {
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      marginTop: 10,
                      marginLeft: 30
                    }
                  }
                },
                top: {
                  element: <Image source={require('../../assets/logo.png')} style={{resizeMode: 'contain', height: 100, width: 100}}/>,
                  title: 'SUPER LIKE',
                  style: {
                    label: {
                      backgroundColor: 'black',
                      borderColor: 'black',
                      color: 'white',
                      borderWidth: 1
                    },
                    wrapper: {
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }
                  }
                }
              }}
             stackSize={5}
             stackSeparation={0}
             animateOverlayLabelsOpacity
             animateCardOpacity
             disableBottomSwipe
             backgroundColor={'#FFDAE3'}
             marginTop={60}
             marginBottom={60}
            >
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.header} onPress={() => console.log(tappedArtist)}>Find an Artist!</Text>
                {/* <Button title={"print array"} onPress={() => printArray()} style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}/>
                <Button title={"print backend"} onPress={() => console.log(card.name)} /> */}
              </View>
            </Swiper>
            {tappedArtist.map((currArtist) =>
              <Modal
                transparent={ true }
                visible={ modalVisible }
                animationType='fade'
                style={{justifyContent: 'center', alignItems: 'center'}}
                key={currArtist.artist_id}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <ArtistProfileScreen style={{top: -50}} initialParams={{artist: currArtist}}/>
                    <Pressable onPress={() => setModalVisible(false)}>
                      <Image source={require('../../assets/exit.png')} style={styles.exit}/>
                    </Pressable>
                  </View>
                </View>
              </Modal>
            )}
        </SafeAreaView>
    )
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 218, 227, 1)',
    },
    cardActual: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    header: {
      color: '#000',
      fontSize: 35,
      marginTop: 0,
      fontWeight: 'bold',
    },
    cardImage: {
      flex: 1,
      resizeMode: 'cover',
      width: 360,
      height: 615,
      overflow: 'hidden',
      borderRadius: 30,
    },
    avatarContainer: {
      top: 465,
      margin: 17,
    },
    cardTitle: {
      margin: 20,
      color: 'white',
      top: 440,
      fontWeight: 'bold',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
    },
    modalView: {
      height: 613,
      width: 360,
      top: 0,
      backgroundColor: '#FFDBA7',
      borderRadius: 30,
      padding: 35,
      paddingLeft: 3,
      paddingRight: 3,
      alignItems: 'center',
      elevation: 5,
      overflow: 'hidden',
    },
    exit: {
      height: 30,
      width: 30,
      top: -534,
      left: 150,
    }
}

export default SwipeScreen