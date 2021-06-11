import PropTypes from "prop-types";
import {useEffect} from 'react';
function ChatScreen(props) {
const handleKeyPress = (e) => {
    const key = e.keyCode || e.which;
    if (key === 13) {
        handleSend();
    }
}
useEffect(() => {
    const chatList = document.getElementById("chatList");
    if (chatList) {
        chatList.scrollIntoView({
            block: "end",
            inline: "center",
            behavior: "smooth",
            alignToTop: false
        });

    }


});

const handleSend = ()=> {
    const value = document.getElementById("yourChat").value;
    
    if (value) {
        props.addToChatLog(value);
        document.getElementById("yourChat").value='';
    }

}
let chatList;
const chatLog = props.chatLog;
if(chatLog && chatLog.length !== 0) {
    chatList = chatLog.map((chat, index) =>    
        <li  key={index}>
            <p><b>{`${chat.name}: `}</b>{chat.content}</p>

        </li>  
    );
}

            return (
            <div id="chatScreen">
                
                 <div id="mainChat">
                    <span> You're now chatting with a random stranger. Say hi! </span>
                    <ul id="chatList">
                        {chatList}
                    </ul>
                 </div>
                     
                  <div id="chatNav">
                      <button onClick= {props.endConnection}> Disconnect </button>
                      <input onKeyPress={(e)=>handleKeyPress(e)} type="text" id="yourChat" />
                      <button onClick={handleSend}> SEND </button>
                  </div>
            </div>
            );
 
 
}

ChatScreen.propTypes = {
    endConnection: PropTypes.func,
    chatLog: PropTypes.array,
    addToChatLog:PropTypes.func,
    stranger: PropTypes.object,
}

export default ChatScreen;
        
                     