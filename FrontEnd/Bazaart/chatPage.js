import React from 'react'
import { ImageBackground, Text, SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native'

const db = [
  {
    name: 'Asmita',
    profilePic: require('./assets/asmita.png'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there',
  },
  {
    name: 'Jatin',
    profilePic: require('./assets/jatin.png'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there',
  },
  {
    name: 'Megha',
    profilePic: require('./assets/megha.png'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there',
  },
  {
    name: 'Neer',
    profilePic: require('./assets/neer.png'),
    messageTime: '1 day ago',
    messageText:
      'Hey there',
  },
  {
    name: 'Priya',
    profilePic: require('./assets/priya.png'),
    messageTime: '2 days ago',
    messageText:
      'Hey there',
  },
  {
    name: 'Ryan',
    profilePic: require('./assets/ryan.png'),
    messageTime: '30 mins ago',
    messageText: 'Hi',
  },
  {
    name: 'Tesna',
    profilePic: require('./assets/tesna.png'),
    messageTime: '3 days ago',
    messageText: 'Hi',
  }
];

const styles = {
    container: {
        flex:1.5,
        backgroundColor: '#ffcccc',
        height: 850
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 35,
        marginLeft: 25,
        top: 35
    },
    secondHeaderText: {
        fontSize: 20,
        position: 'absolute',
        top: -5,
        marginLeft: -45,
    },
    NameStyle: {
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 100,
        top: 20
    },
    PostTime: {
        fontSize: 12,
        color: 'grey',
        marginLeft: 300,
        top: -10
    },
    MessageText: {
        fontSize: 15,
        marginLeft: 100,
        top: 20
    },
    contactContainer: {
        backgroundColor: 'white',
        bottom: -40,
        borderRadius: 60,
    },
    invidualContainer: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        flex: 1
    }

}

 
function ChatPage() {
    const users = db

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Chats
            </Text>
            <ScrollView style={styles.contactContainer}>
                {users.map((user) => 
                <TouchableOpacity>
                    <SafeAreaView style={styles.invidualContainer}>
                    <Text style={styles.NameStyle}>{user.name}</Text>
                    <Text style={styles.MessageText}>{user.messageText}</Text>
                    <Text style={styles.PostTime}>{user.messageTime}</Text>
                    <ImageBackground
                    key={user}
                    source={user.profilePic}
                    imageStyle={{borderRadius: 25,}}
                    style={{position: 'relative',
                        marginLeft: 25,
                        bottom: -5,
                        width: 55,
                        height: 55,
                        marginBottom: 15,
                        margin: -35,
                        padding: -50
                    }}>
                    </ImageBackground>
                </SafeAreaView>
                </TouchableOpacity>
            )}
            </ScrollView>
        </View>
    )
}

export default ChatPage;