import  React from 'react';
import './Chat.css';

function Chat(props) {

    const connectToRoom = () => {
        let chatServer = process.env.NODE_ENV === 'production' ? 'https://connect-the-dots-chatroom.herokuapp.com' : 'http://localhost:10000';
        window.open(chatServer, "chat_room")
    };

    return (
        <div>
            <div>
                <div className="chatInput">
                    <h1>Welcome: {props.curUser.username}</h1>
                    <h3  style={{'color': 'white',}}> Do you want to make new friends here? Just join our chat room! </h3>
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
