import React, { useState }  from 'react'
import { Image, Text, View, StyleSheet, ScrollView, TouchableOpacity, FlatList, ImageBackground} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';

function BookmarkScreen({ route }) {

    const [artists, updateArtists] = useState([
        {
            name: 'Cara Ung',
            pfp: require("../../assets/cara.jpg"),
            genre: 'Rugs',
            bookmark: true
        },
        {
            name: 'Tesna Thomas',
            pfp: require("../../assets/tesna.png"),
            genre: 'Impressionism',
            bookmark: true
        },
    ])

    const swipedArtists = route.params.swipedArray;


    const renderItem = ({ item }) => (
        <View style={styles.item} resizeMode="cover">
          <Image source={item.image} style={styles.image} />
        </View>
    );

    return (  
        <View style={styles.container} contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
            <ImageBackground source={require('../../assets/swipeBack.png')} style={{flex: 1, width: '100%'}} >
                    <View style={styles.title_container}>
                        <Text style={{ fontWeight: 'bold', fontSize: 40 }}>Bookmarked Artists</Text>
                    </View>
                <ScrollView>
                        {artists.map((artist) => 
                            <View key={artist.name} style={styles.artist_content}>
                                <View style={{ width: 500, height: 10 }} />
                                <Avatar
                                    rounded
                                    size="large"
                                    source={artist.pfp}
                                />
                                <Text style={styles.artist_name}>{artist.name}</Text>
                                <TouchableOpacity>{artist.bookmark && <Ionicons name={'bookmark'} size={40} color={'#ff0f69'} borderColor={'#ff0f69'}/>}</TouchableOpacity>
                                <View style={{ width: 500 }} />
                                <View style={styles.genre}>
                                    <Text>{artist.genre}</Text>
                                </View>
                                <View style={{ width: 500, height: 10 }}/>
                                <View style={{  width: 350, height: 1, backgroundColor: 'black' }} />
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
        marginBottom: 10,
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
        top: 50,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    artist_name: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black',
        borderLeftWidth: 10,
        borderRightWidth: 10,
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