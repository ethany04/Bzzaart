import * as React from 'react';
import { View, Text } from 'react-native';

export default function ChatScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255, 218, 227, 1)' }}>
            <Text
                    style={{ fontSize: 26, fontWeight: 'bold' }}>Chat Screen</Text>
        </View>
    )
}