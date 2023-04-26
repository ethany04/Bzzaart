import React from 'react'
import { View, Text } from 'react-native'

const PopupScreen = () => {
    return (
        <View style={styles.ViewArea}>
            <Text>i am the POPUP</Text>
        </View>
    )
}

const styles = {
    ViewArea: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 1,
    },
}

export default PopupScreen;