import React, { useState }  from 'react'
import { Image, Text, View, StyleSheet, ScrollView, TouchableOpacity, FlatList, ImageBackground} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';

function BookmarkScreen() {

    // const [artists, updateArtists] = useState([
    //     {
    //         name: 'Tesna Thomas',
    //         pfp: require("../../assets/tesna.png"),
    //         genre: 'Impressionism',
    //         img: require("../../assets/NightLife.jpeg"),
    //         bookmark: true
    //     }
    // ])

    const artists = this.props.route.params.bookmarkedArtists;

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

    return (  
        <View style={styles.container} contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
            <ImageBackground source={require('../../assets/swipeBack.png')} style={{flex: 1, width: '100%'}} >
                    <View style={styles.title_container}>
                        <Text style={{ fontWeight: 'bold', fontSize: 40 }}>Bookmarked Artists</Text>
                    </View>
                <ScrollView>
                        {artists.map((artist) => 
                            <View key={artist.name} style={styles.artist_content}>
                                <Avatar
                                    rounded
                                    size="large"
                                    source={require('../../assets/tesna.png')}
                                />
                                <Text style={styles.artist_name}>{artist.name}</Text>
                                <TouchableOpacity>{artist.bookmark && <Ionicons name={'bookmark'} size={40} color={'#ff0f69'} borderColor={'#ff0f69'}/>}</TouchableOpacity>
                                <View style={styles.genre}>
                                    <Text>{artist.genre}</Text>
                                </View>
                                <View style={styles.artList}>
                                    {/* <FlatList
                                        data={artistPics}
                                        key={1}
                                        numColumns={2}
                                        renderItem={renderItem}
                                        keyExtractor={(item) => item.key}
                                        contentContainerStyle={{size: 64}}
                                    /> */}x
                                    <Image source={require('../../assets/Bordighera.jpg')} style={{width: '100%', height: 300}}/>
                                </View>
                            </View> 
                        )}        
                </ScrollView>
            </ImageBackground>
        </View>
    )    
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'rgba(255, 218, 227, 1)',
        height: 800, 
        flex: 1,
        flexGrow: 14,
    },
    title_container: {
        top: 55,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    divider: {
        paddingTop: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 5,
        top: 50,
    },
    divider_less_container: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    divider_less: {
        paddingTop: 10,
        borderBottomColor: '#ff0f69',
        borderBottomWidth: 2,
        opacity: 1,
    },
    artist_content: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 60,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    artist_name: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black',
        // borderLeftWidth: 10,
        // borderRightWidth: 10,
    },
    icon: {
        width: 50, 
        height: 50,
        borderRadius: 25,
        backgroundColor: 'rgba(255, 218, 227, 1)',
        alignSelf: 'flex-end',
    },
    art: {
        alignSelf: 'center',
        width: 400,
        height: 300,
        borderRadius: 25,
        borderColor: 'white',
        borderWidth: 5,
    },
    genre: {
        backgroundColor: 'rgba(255, 168, 77, 0.47)',
        borderRadius: 10,
        padding: 3,
        alignItems: 'center',
    },
    artList: {
        paddingTop: 5, 
        overflow: 'hidden', 
        height: 250, 
        width: 350, 
        borderWidth: 5, 
        borderColor: "#FAEFE5", 
        borderRadius: 10, 
        justifyContent: 'center', 
        alignItems: 'center',
        top: 5,
    }
});

export default BookmarkScreen;