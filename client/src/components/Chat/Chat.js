import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import PropTypes from 'prop-types';

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';

const ENDPOINT = 'http://localhost:5000';

let socket;

const Chat = ({ location }) => {
  const [chatName, setChatName] = useState('');
  const [chatRoom, setChatRoom] = useState('');
  const [chatUsers, setChatUsers] = useState([]);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    
    console.log('URL search params:', location.search);
    console.log('Parsed name:', name);
    console.log('Parsed room:', room);

    socket = io(ENDPOINT, {
      transports: ['websocket', 'polling'],
      withCredentials: true
    });

    setChatName(name);
    setChatRoom(room);

    // Set up all socket listeners first
    console.log('Setting up socket listeners...');

    socket.on('disconnect', () => {
      console.log('Socket disconnected');
    });

    socket.on('message', (messageData) => {
      console.log('Received message:', messageData);
      setChatMessages((prevMessages) => [...prevMessages, messageData]);
    });

    socket.on('roomData', ({ users }) => {
      console.log('Received room data:', users);
      setChatUsers(users);
    });

    // Wait for socket to connect before emitting join
    socket.on('connect', () => {
      console.log('Socket connected, now emitting join');
      socket.emit('join', { name, room }, (error) => {
        console.log('Join callback called');
        if (error) {
          console.log('Join error:', error);
          alert(error);
        } else {
          console.log('Successfully joined room');
        }
      });
    });

    return () => {
      socket.disconnect();
    };
  }, [ENDPOINT, location.search]);

  const sendMessage = (event) => {
    console.log('sendMessage called!', event);
    event.preventDefault();

    console.log('chatMessage:', chatMessage);

    if (chatMessage) {
      console.log('Emitting message:', chatMessage);
      socket.emit('sendMessage', chatMessage, () => setChatMessage(''));
    } else {
      console.log('No message to send');
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={chatRoom} />
        <Messages messages={chatMessages} name={chatName} />
        <Input
          message={chatMessage}
          setMessage={setChatMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={chatUsers} />
    </div>
  );
};

Chat.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

export default Chat;