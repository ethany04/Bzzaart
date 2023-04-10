import React, { useState, useEffect, useCallback } from 'react';
import { View, ScrollView, Text, Button, StyleSheet } from 'react-native';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';

const messagesScreen = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'Tesna',
                    avatar: require('./assets/tesna.png'),
                },
            },
            {
                _id: 2,
                text: 'Hello',
                createdAt: new DataTransfer(),
                user: {
                    _id: 1,
                    name: 'Ashmita',
                    avatar: require('./assets/ashmita.png'),
                },
            },
        ]);
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages) => 
        GiftedChat.append(previousMessages, messages),
        );
    }, []);

    const renderSend = (props) => {
        return (
            <Send {...props}>

            </Send>
        )
    }
}