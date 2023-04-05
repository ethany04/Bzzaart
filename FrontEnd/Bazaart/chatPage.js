import React, { useState } from 'react'
import { ImageBackground, Text, View } from 'react-native'

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
        flex: 1,
        justifyContent: 'space-between',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 30,
        position: 'absolute',
        top: -35,
        marginLeft: 25,
    },
    secondHeaderText: {
        fontSize: 20,
        position: 'absolute',
        top: -5,
        marginLeft: 25,
    },
    NameStyle: {
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 95,
        top: -15

    },
    PostTime: {
        fontSize: 12,
        color: 'grey',
        marginLeft: 350,
        top: -45
    },
    MessageText: {
        fontSize: 14,
        marginLeft: 95,
        top: -15
    }

}

 
function ChatPage() {
    const users = db
    
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Chats
            </Text>
            <Text style ={styles.secondHeaderText}>
                Pending 
            </Text>
            <View>
                {users.map((user) => 
                <View>
                    <ImageBackground
                    key={user}
                    source={user.profilePic}
                    imageStyle={{borderRadius: 25,}}
                    style={{position: 'relative',
                        marginLeft: 25,
                        bottom: -50,
                        width: 50,
                        height: 50,
                        marginBottom: 10
                    }}>
                    </ImageBackground>
                    <Text style={styles.NameStyle}>{user.name}</Text>
                    <Text style={styles.MessageText}>{user.messageText}</Text>
                    <Text style={styles.PostTime}>{user.messageTime}</Text>
                </View>
                )}
            </View>
        </View>
    )
}

export default ChatPage;



















