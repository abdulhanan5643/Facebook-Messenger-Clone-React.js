import React, {useEffect, useState} from 'react';
import {Button, FormControl, Input, InputLabel} from "@material-ui/core";
import Message from "./Message";
import './App.css';

function App() {

    const [input, setInput] = useState('');
    const [messages,setMessages]=useState([]);
    const [username, setUsername]=useState('');

    useEffect(()=>{
        db.collection('messages').onSnapshot(snapshot=>{
            setMessages(snapshot.docs.map(doc=>doc.data))})
    },[])

    useEffect(()=>{
        setUsername(prompt('Please enter your name'));
    },[])

    const sendMessage = (event)=>{
        event.preventDefault();
        setMessages([...messages, {username: username, text: input}]);
        setInput('');
    }

    return <div className="App">

        <h1>Hey Mate! 😃</h1>
        <h2>Welcome {username}</h2>
        <form>
            <FormControl>
                <InputLabel>Enter a message...</InputLabel>
                <Input value={input} onChange={event => setInput(event.target.value)}/>
                <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send
                    Message</Button>
            </FormControl>
        </form>


        {
            messages.map(message => <Message username={username} message={message} />)
        }

    </div>
}

export default App;
