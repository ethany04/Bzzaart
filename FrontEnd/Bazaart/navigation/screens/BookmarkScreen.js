import React, { useState }  from 'react'
import { Image, Text, View, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function BookmarkScreen() {
    const [artists, updateArtists] = useState([
        {
            name: 'Sam Oh',
            pfp: require("../../assets/s0m.png"),
            genre: '#Digital #Graphic',
            img: require("../../assets/Sam_Oh_Digital_Art.jpg"),
            bookmark: true
        },
        {
            name: 'Hanni Pham',
            pfp: require("../../assets/hanni.png"),
            genre: '#Portrait #Acrylic Painting',
            img: require("../../assets/Hanni_Pham_Portrait_Art.jpeg"),
            bookmark: true
        },
        {
            name: 'Daquinious D.',
            pfp: require("../../assets/Daquin.png"),
            genre: '#Landscape #Oil Painting',
            img: require("../../assets/Daquinious_Demarcus_Oil_Painting.jpeg"),
            bookmark: true
        },
    
    ])

    return (  
        <ScrollView style={styles.container}>
            <View style={styles.title_container}>
                <Text style={styles.title}>
                        Bookmarked Artists
                </Text>
            </View>
            <View style={styles.divider}/>
            <View>
                {artists.map((artist) => 
                    <View key={artist.name}>
                        {/* const [artist.bookmark, setBookmark] = useState(artist.bookmark); */}
                        {artist.bookmark &&
                        <View style={styles.artist_header}>
                            <Text>
                                {"\n"}
                                <View style={styles.pfp_container}>
                                    <Image
                                    style={styles.pfp}
                                    source={artist.pfp}>
                                    </Image>
                                </View>
                                <View style={styles.artist_name_container}>
                                    <Text style={styles.artist_name}>
                                        {artist.name}       
                                    </Text>
                                </View>
                                {/* onPress={() => {artist.changeBookmarkVal(artist.bookmark); forceUpdate}} */}
                                        <TouchableOpacity>
                                            {artist.bookmark && <Ionicons name={'bookmark'} size={40} color={'#ff0f69'} borderColor={'#ff0f69'}/>}
                                            {/* {!artist.bookmark && <Ionicons name={'bookmark'} size={40} color={'#ff0f69'} borderColor={'#ff0f69'}/>} */}
                                        </TouchableOpacity>
                                {'\n'}
                                {"\t\t"}
                                <View style={styles.genre}>
                                    <Text>
                                    {artist.genre}
                                    </Text>
                                </View>
                            </Text>
                            <Image
                                style={styles.art}
                                source={artist.img}
                            />
                        </View>
                        }
                        {artist.bookmark && <View style={styles.divider_less_container}>
                                <View style={styles.divider_less}/>
                            </View>}
                    
                    </View>
            )}
            </View>
        
        </ScrollView>
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
        paddingLeft: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 40,
    },
    divider: {
        paddingTop: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 5,
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
    artist_header: {
        alignItems: 'center'
    },
    artist_name_container: {
        paddingLeft: 10,
    },
    artist_name: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black',
    },
    pfp_container: {
        paddingLeft: 10,
    },
    pfp: {
        width: 50, 
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'black',
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
        // ff337c
        // d600a5
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 3,
    },

});

export default BookmarkScreen;