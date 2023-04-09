import { View, Text } from 'react-native'
import FlipCard from 'react-native-flip-card'

function flipCard() {
    return (
        <FlipCard>
        {/* Face Side */}
        <View style={styles.face}>
            <Text>The Face</Text>
        </View>
        {/* Back Side */}
        <View style={styles.back}>
            <Text>The Back</Text>
        </View>
        </FlipCard>
    )
}

const styles = {
    face: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
    },
    back: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
    }

}

export default flipCard

