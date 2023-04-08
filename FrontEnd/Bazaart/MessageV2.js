import React, { Component } from 'react';

import {GiftedChat, Actions, Bubble} from 'react-native-gifted-chat';

export default class MessageV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      loadEarlier: true,
      typingText: null,
      isLoadingEarlier: false,
    };
    this.setState({
        messages: [
          {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://facebook.github.io/react/img/logo_og.png',
            },
          },
        ]
      });
  }

    // componentWillMount() {
    //   this.setState({
    //     messages: [
    //       {
    //         _id: 1,
    //         text: 'Hello developer',
    //         createdAt: new Date(),
    //         user: {
    //           _id: 2,
    //           name: 'React Native',
    //           avatar: 'https://facebook.github.io/react/img/logo_og.png',
    //         },
    //       },
    //     ]
    //   });
    // }

    onSend(messages = []) {
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, messages),
      }));
    }

    render() {
      return (
        <GiftedChat
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      );
    }
}




















// import React, { useState, useCallback, useEffect} from 'react'
// import { ImageBackground, Text, View, Button } from 'react-native'
// import { GiftedChat } from 'react-native-gifted-chat'

// function MessageV2() {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     setMessages([
//       {
//         _id: 1,
//         text: 'Hello developer',
//         createdAt: new Date(),
//         user: {
//           _id: 2,
//           name: 'React Native',
//         },
//       },
//     ])
//   }, [])

//   const onSend = useCallback((messages = []) => {
//     setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
//   }, [])

//   return (
//     <View>
//         <Button 
//         onPress={onSend}
//         title="Hi"
//         />
//         <GiftedChat
//       messages={messages}
//       onSend={messages => onSend(messages)}
//       user={{
//         _id: 1,
//       }}
//     />
//     </View>
//   )
// }

// export default MessageV2;