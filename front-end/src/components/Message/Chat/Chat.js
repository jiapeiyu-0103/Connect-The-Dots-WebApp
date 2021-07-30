import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './Chat.css';

let socket;
const CONNECTION_PORT = "localhost:3001/";

function Chat(props) {

    const [loggedIn, setLoggedIn] = useState(false);

    //[CONNECTION_PORT]
    useEffect(() => {
        // initialize our connection
        console.log("connect to port");
        socket = io(CONNECTION_PORT);
    }, [CONNECTION_PORT]);

    const connectToRoom = () => {
        // set the room data to server(backend)
        socket.emit('join_room', props.curUser.username);
    };

    return (
        <div>
            <div className="chatInput">
                <h1>Welcome: {props.curUser.username}</h1>
                <h4>Let's start a new chart with a stranger!</h4>

            </div>
            <div className="chatTab">
                <button onClick={connectToRoom}>Enter Chat</button>
            </div>
        </div>
    )
}


export default Chat;
