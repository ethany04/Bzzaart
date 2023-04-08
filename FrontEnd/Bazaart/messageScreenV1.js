import React, { useState, useEffect } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyA4kglMm5RuMkttQSBKg-i_gtFPa5WaBIw",
    authDomain: "bazaart-c8baf.firebaseapp.com",
    projectId: "bazaart-c8baf",
    storageBucket: "bazaart-c8baf.appspot.com",
    messagingSenderId: "1034283516558",
    appId: "1:1034283516558:web:6b66b33b0f91b766143fdf",
    measurementId: "G-PRN4T0K72L"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  //sets up reference to database
  const db = firebase.database().ref();

  export default function MessagesScreen() {
    //create a state variable to hold chat messages 
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        //add new messages to database and update the state accordingly 
        db.on('child_added', (snapshot) => {
            setMessages((prevMessages) => GiftedChat.append(prevMessages, snapshot.val())
            );
        }, []);

    
        const onSend = async (newMessages) => {
            const message = newMessages[0];
            db.push().set(message);
        };

        //render giftedchat component passing in messages, onSend function, and user object as props
        return (
            <GiftedChat 
                messages={messages}
                onSend={(newMessages) => onSend(newMessages)}
                user={{_id: 1}}
            />
        );
    })
  }



