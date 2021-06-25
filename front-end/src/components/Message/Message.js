import './Message.css';
import React, { useState } from 'react';
import * as MessageStates from '../../constants/MessageStates';
import MessageMainView from './MessageMainView';
function Message() {
const [messageState, setMessageState] = useState(MessageStates.DRIFT_BOTTLE);
 const onNavClick = (e)=>{
      const navTarget = e.target;
      const navChildren = navTarget.parentElement.children;
      for (const navChild of navChildren) { 
        if (navChild.classList.contains("chosen")) {
            navChild.classList.remove("chosen");
            break;
        }
      }     
      navTarget.classList.add("chosen"); 
  }
            return (
                <div id="message">
                    {/*<div id="messageNav">*/}
                    {/*    <button className="chosen" onClick={(e) => {onNavClick(e); setMessageState(MessageStates.DRIFT_BOTTLE); }}>Drift Bottle</button>*/}
                    {/*    <button onClick={(e) => {onNavClick(e); setMessageState(MessageStates.TREE_HOLE); }}>Tree Hole</button>*/}
                    {/*    <button onClick={(e) => {onNavClick(e); setMessageState(MessageStates.CHAT); }}>Chat</button>*/}
                    {/*</div>*/}
                
                    {/*<MessageMainView state={messageState} />*/}
                    <MessageMainView/>
                
                </div>
            );
 
 
}

export default Message;
