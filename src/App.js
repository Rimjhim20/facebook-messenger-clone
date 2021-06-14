import React, { useState, useEffect } from 'react';
import { FormControl,  Input, InputLabel } from '@material-ui/core';
import './App.css';
import Message from './Message';
import { db } from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { IconButton } from '@material-ui/core';

function App() {

  const [input, setInput] = useState(" ");
  const [messages, setMessage] = useState([]);

  const [username, setUserName] = useState("");

  useEffect(() => 
  {
    
     db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
      {
        setMessage(snapshot.docs.map((doc) =>({ id: doc.data, message: doc.data() }))
        
        );
      });
  }, []);
  
    useEffect(() => {
      setUserName(prompt('please enter your name'));
    }, []);


    const sendMessage = (event) => {
      //all logic to send message goes
      event.preventDefault();

      db.collection('messages').add({
        message: input,
        username: username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      setInput(' ');
    };

    return (
      <div className="App">
        <img src='https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=150&h=150' alt="logo" />
        <h1>Woahhh!! My ChatBox😎😎</h1>
        <h2>Welcome {username}</h2>
        <form  className='app_from'>
          <FormControl className="app_fromcontrol">
            <InputLabel >Enter a message...</InputLabel>
            <Input className="app_input" placeholder='Enter a message...' value={input} onChange={(event) => setInput(event.target.value)} />
            
            <IconButton className="app_iconButton"
             disabled={!input} variant='container' color='primary'
             type='submit ' onClick={sendMessage}>Send Message 
            
            
            <SendRoundedIcon  />
            </IconButton>
          </FormControl>
        </form>
        <FlipMove>
          {
             messages.map(({ id, message}) => (
              <Message key={id} username={username} message={message} />

            ))

            // messages.map(message => message ? (<Message userName={username} message={message} />) : null)

          }
        </FlipMove>
      </div>
    );
}

export default App;
