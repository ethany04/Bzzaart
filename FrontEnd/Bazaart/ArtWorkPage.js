import React, {useEffect, useState, useContext} from 'react';
import {
    Text,
    Image,
    View,
    ScrollView,
    SafeAreaView,
    Button,
    StyleSheet
} from 'react-native';


function artWorkPage() {
    return (
        <SafeAreaView>
            <ScrollView style={{width: 300, height: 500}}>
                <Image
                    style={styles.image}
                    source={require("./assets/Glow_in_the_Dark.png")}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>Glow In The Dark</Text>
                    <Text style={styles.price}>$800</Text>
                    <Text style={styles.description}>Oil Painting by Daquinious Demarcus capturing night life and the life.</Text>
                    <Button 
                        color="red"
                        title="Add to cart"
                        onPress={() => console.log("Add to Cart")}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    image: {
        bottom: 0
    },
    infoContainer: {
        padding: 16,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    price: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        color: 'black',
        marginBottom: 16,
    }
});

export default artWorkPage;
