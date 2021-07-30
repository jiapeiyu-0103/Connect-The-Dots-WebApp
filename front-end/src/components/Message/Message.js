import './Message.css';
import MessageMainView from './MessageMainView';
function Message(props) {
    return (
        <div id="message">
            <MessageMainView curUser={props.curUser}/>
        </div>
    );
}

export default Message;
