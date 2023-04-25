import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  TextInput,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  Pressable,
} from 'react-native';

const MessageScreen = ({ route, navigation }) => {

    const artist = route.params.currArtist;

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const flatListRef = useRef(null);

  useEffect(() => {
    // scroll to the bottom of the list when messages change
    if (flatListRef.current && messages.length > 0) {
        flatListRef.current.scrollToEnd();
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages(prevMessages => [...messages, message]);
      setMessage('');
      Keyboard.dismiss(); // hide the keyboard after sending the message
      flatListRef.current.scrollToEnd();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate("SwipeScreen")}>
            <Image source={require('../../assets/back.png')} style={{ height: 20, width: 20, right: 85, bottom: 20 }} />
        </Pressable>
        <Text style={styles.headerText}>{artist.name}</Text>
        <Image source={{ uri: artist.pfp }} style={styles.logo} />
      </View>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <FlatList
          data={Object.values(messages)}
          renderItem={({ item }) => (
            <View style={styles.messageBubbleContainer}>
              <Text style={styles.messageBubble}>{item}</Text>
            </View>
          )}
          keyExtractor={(item) => item}
          ref={flatListRef}
          contentContainerStyle={[styles.messageContainer, { paddingBottom: 70 }]}
          onContentSizeChange={() => flatListRef.current.scrollToEnd()}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your message"
            value={message}
            onChangeText={setMessage}
            onSubmitEditing={handleSendMessage}
            autoFocus={true}
          />
          <Button title="Send" onPress={handleSendMessage} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 70,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 27,
    fontWeight: 'bold',
    marginRight: 10,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  messageContainer: {
    flexGrow: 1, // allow messages to fill the remaining space
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  messageBubbleContainer: {
    alignSelf: 'flex-end', // align the bubble to the right side of the screen
    backgroundColor: '#ffcccc',
    borderRadius: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  messageBubble: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default MessageScreen;