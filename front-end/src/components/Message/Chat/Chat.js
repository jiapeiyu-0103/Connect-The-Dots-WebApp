import {useState} from 'react';
import ChatScreen from './ChatScreen';
import './Chat.css';
import {constructYourObj} from '../../../constants/Helpers';
function Chat() {
const [connected, setConnected] = useState(false);
const [randomStranger, setRandomStranger] = useState(null);
const [chatLog, setChatLog] = useState([]);

const exampleRandomStranger = {
    name: "Random Stranger",
    location: "Somewhere",
    imageSrc: null,
}

const fetchRandomStranger = () => {
    setRandomStranger(exampleRandomStranger);
}
const startConnection = () => {
    fetchRandomStranger();
    setConnected(true);
}

const addToChatLog = (value)=> {
    const yourChat = constructYourObj(value);
    const newChatLog = [...chatLog];
    newChatLog.push(yourChat);
    setChatLog(newChatLog);
}

const endConnection = () => {
    setChatLog([]);
    setConnected(false)
    
}
            return (
                <div id="chatTab"> 
                    {connected ? 
                      
                    <ChatScreen addToChatLog={addToChatLog} chatLog={chatLog} stranger={randomStranger} endConnection={endConnection} />
                    
                     :
                        <button onClick= {startConnection} >Connect To A Stranger </button> 
                    }
                </div>
            );
 
 
}

export default Chat;
