import './Message.css';
import React, { useState } from 'react';
import * as MessageStates from '../../constants/MessageStates';
import MessageMainView from './MessageMainView';
function Message(props) {
// Hooks for state control
const [messageState, setMessageState] = useState(MessageStates.DRIFT_BOTTLE);
// Handle user's navbar click
 const onNavClick = (e)=>{
     // Get the target of the click
      const navTarget = e.target;
     // Remove chosen classes from all children
      const navChildren = navTarget.parentElement.children;
      for (const navChild of navChildren) { 
        if (navChild.classList.contains("chosen")) {
            navChild.classList.remove("chosen");
            break;
        }
      }     
      // Indicate that it is chosen and add css class
      navTarget.classList.add("chosen"); 
  }
            return (
                <div id="message">
                    <MessageMainView curUser={props.curUser}/>
                </div>
            );
}

export default Message;
