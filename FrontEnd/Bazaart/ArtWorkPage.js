import { Box, ScrollView, Text, View } from "react-native"
import React from "react";

function ArtWorkPage() {
    return (
        <Box safeArea flex={1} bg={Colors.black}>
            <Text>ArtWorkPage</Text>
        </Box>
    )
}







// import React from 'react';
// import {Text, ImageBackground, View} from 'react-native';

// const styles = {
//     container: {
//         display: 'flex',
//         alignItems: 'center',
//         flex: 1,
//         justifyContent: 'center',
//         width: '100%',
//     },
//     cardContainer: {
//         width: '90%',
//         maxwidth: 260,
//         height: 300,
//     },
//     card: {
//         position: 'absolute',
//         backgroundColor: '#fff',
//         width: '100%',
//         maxWidth: 260,
//         height: 300,
//         shadowColor: 'black',
//         shadowOpacity: 0.2,
//         shadowRadius: 20,
//         borderRadius: 20,
//         resizeMode: 'cover',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     cardImage: {
//         width: '100%',
//         height: '100%',
//         overflow: 'hidden',
//         borderRadius: 100,
//         alignItems: 'center',
//     },
//     cardTitle: {
//         position: 'absolute',
//         bottom: 0,
//         margin: 10,
//         color: '#fff',
//     },
//     infoText: {
//         height: 28,
//         justifyContent: 'center',
//         fisplay: 'flex',
//         zIndex: -100,
//     }
// }

// const art = [
//     {
//         name: 'Glow In the Dark',
//         img: require('/Users/joannacui/Downloads/VS Code/TX Convergent/sp23-compensation/FrontEnd/Bazaart/assets/Glow_in_the_Dark.png')
//     }
// ]

// function display() {
//     const artWorks = art
//     return (
//         <View style={styles.container}>
//             <View style={styles.cardContainer}>
//                 <View style={styles.card}>
//                     <ImageBackground style={styles.cardImage} source={artWorks.img}>
//                         <Text style={styles.cardTitle}>{artWorks.name}</Text>
//                     </ImageBackground>
//                 </View>
//             </View>
//         </View>
//     )
// }

// export default display