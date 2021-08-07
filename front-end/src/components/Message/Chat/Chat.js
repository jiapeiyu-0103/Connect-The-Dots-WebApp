import  React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './Chat.css';

let socket;
const CONNECTION_PORT = "localhost:3001/";

function Chat(props) {

    const [loggedIn, setLoggedIn] = useState(false);

    const [message, setMessage] = useState('');
    const [messageList, setMessageList] = useState([]);

    //[CONNECTION_PORT]
    // useEffect(() => {
    //     // initialize our connection
    //     console.log("connect to port");
    //     socket = io(CONNECTION_PORT);
    // }, [CONNECTION_PORT]);

    const connectToRoom = () => {
        // set the room data to server(backend)]
        // setLoggedIn(true);
        // socket.emit('join_room', props.curUser.username);
        window.open('http://localhost:10000', "chat_room")
    };

    const sendMessage = () => {
        // emit message to socket
        // ...
        setMessageList([...messageList, {author: props.curUser.username, content: message}]);
        setMessage("");
    };

    return (
        <div>
            {!loggedIn ? (
                <div>
                    <div className="chatInput">
                        <h1>Welcome: {props.curUser.username}</h1>
                        <h4>Let's start a new chat with a stranger!</h4>
                    </div>
                    <div className="chatTab">
                        <button onClick={connectToRoom}>
                            Enter Chat
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="chatContainer">
                        <div className="messages">
                            {messageList.map((val, key) => {
                                return <div className="messageIndividual">

                                    <div className="messageImg">
                                        <img src={props.curUser.photo} alt={props.curUser.username} width="45vw" height="45vh"/>
                                    </div>

                                    <div className="messageContent">
                                        <div className="textContent">
                                            {val.author} : {val.content}
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>

                        <div className="messageInputs">
                            <input
                                type="text"
                                placeholder="Message..."
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                }}
                            />
                            <button onClick={sendMessage}>Send</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}


export default Chat;
