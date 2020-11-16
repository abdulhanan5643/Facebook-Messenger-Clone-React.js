import React, {useState} from 'react';
import {Button, FormControl, Input, InputLabel} from "@material-ui/core";
import './App.css';

function App() {

    const [input, setInput] = useState('');
    const [messages,setMessages]=useState([]);

    console.log(messages);
    const sendMessage = (event)=>{
        event.preventDefault();
        setMessages([...messages,input]);
        setInput('');
    }

    return <div className="App">

        <h1>Hey Mate! 😃</h1>
        <form>
            <FormControl>
                <InputLabel>Enter a message...</InputLabel>
                <Input value={input} onChange={event => setInput(event.target.value)}/>
                <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send
                    Message</Button>
            </FormControl>
        </form>


        {messages.map(message => <p key={message}>{message}</p>)}

    </div>
}

export default App;
