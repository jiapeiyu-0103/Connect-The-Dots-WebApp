import  React from 'react';
import './Chat.css';

function Chat(props) {

    const connectToRoom = () => {
        window.open('http://localhost:10000', "chat_room")
    };


    return (
        <div>
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
        </div>
    )
}


export default Chat;
