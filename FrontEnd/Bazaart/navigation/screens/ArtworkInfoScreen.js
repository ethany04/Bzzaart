import React from 'react'
import { Text, Image, SafeAreaView } from 'react-native'
import { Button } from 'react-native-paper'

const styles = {
    container: {
        flex: 1.5,
        height: 850
    },
    artworkTitle: {
        fontWeight: 'bold',
        fontSize: 35,
        marginLeft: 20,
        top: 25
    },
    artistName: {
        fontSize: 14,
        marginLeft: 20,
        top: 30,
    },
    imageStyle: {
        bottom: 0,
        width: 350,
        height: 350,
        marginLeft: 20,
        position: 'absolute',
        bottom: 325,
        borderRadius: 10,
        resizeImage: 'center'
    },
    descriptionHeader: {
        top: 425,
        fontSize: 25,
        marginLeft: 25,
        fontWeight: 'bold'
    },
    description: {
        flexWrap: 'wrap',
        fontSize: 15,
        marginLeft: 25,
        top: 475,
    },
    tagStyle: {
        backgroundColor: '#ffcccc',
        marginLeft: 25,
        borderRadius: 15,
        width: 150,
        position: 'absolute',
        top: 575
    },
    tagLabelStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12
    }
}

function ArtworkInfo() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.artworkTitle}>
                Glow In The Dark
            </Text>
            <Text style={styles.artistName}>
                Daquinious Demarcus
            </Text>
            <Image
                style={styles.imageStyle}
                source={require("../../assets/NightLife.jpeg")}
            />
            <Text style={styles.descriptionHeader}>
                Artwork Description
            </Text>
            <SafeAreaView style={styles.tagContainer}>

            </SafeAreaView>
            <Text style={styles.description}>
                Oil paint was used to emphasize the contrast between the light and dark. Although the 
                night enshrounds the word in darkness, the light contrasts against the dark to highlight the blomming, urban life. As one, the nightlife of Paris, France 
                comes alive.
            </Text>
            <Button mode='contained' style={styles.tagStyle} labelStyle={styles.tagLabelStyle}>
                Oil Painting
            </Button>
        </SafeAreaView>
    )
}

export default ArtworkInfo;






















// import React from 'react';
// import {
//     Text,
//     Image,
//     View,
//     ScrollView,
//     SafeAreaView,
//     StyleSheet,
// } from 'react-native';

// import Button from "react-native-bootstrap-buttons";
// import { addTheme } from "react-native-bootstrap-buttons";


// function artWorkPage() {

//     addTheme("myButton", "black", "white", "pink", "grey")
//     return (
//         <SafeAreaView>
//             <ScrollView style={{width: 300, height: 500}}>
//                 <Image
//                     style={styles.image}
//                     source={require("./assets/Glow_in_the_Dark.png")}
//                 />
//                 <View style={styles.infoContainer}>
//                     <Text style={styles.name}>Glow In The Dark</Text>
//                     <Text style={styles.price}>$800</Text>
//                     <Text style={styles.description}>Oil Painting by Daquinious Demarcus capturing night life and the life.</Text>
//                     <Button 
//                         buttonType="myButton" 
//                         label = "                      Add to Cart" 
//                         />
//                 </View>

//             </ScrollView>
//         </SafeAreaView>
//     );
// }


// const styles = StyleSheet.create({
//     button: {
//         backgroundColor: "orange",
//         padding: 20,
//         marginTop: 150,
//         alignItems: 'center'
//     },
//     text: {
//         fontWeight: 'bold',
//         fontSize: 35,
//         marginLeft: 25,
//         top: 65
//     },
//     image: {
//         bottom: 0
//     },
//     infoContainer: {
//         padding: 16,
//     },
//     name: {
//         fontSize: 30,
//         fontWeight: 'bold',
//         justifyContent: 'center',
//     },
//     price: {
//         fontSize: 18,
//         fontWeight: '600',
//         marginBottom: 8,
//     },
//     description: {
//         fontSize: 16,
//         fontWeight: '400',
//         color: 'black',
//         marginBottom: 16,
//     },
// });

// export default artWorkPage;