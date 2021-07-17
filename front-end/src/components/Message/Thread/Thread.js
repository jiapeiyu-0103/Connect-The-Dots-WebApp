import './Thread.css';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import defaultUserImage from '../img/Default_User_Logo.png';
function Thread(props) {
const thread = props.thread;
const replies = thread.replies;
const handleEnter = (e) => {
    const key = e.keyCode || e.which;
    if (key === 13 && e.target.value) {
        props.handleReplySubmit(e.target.value);
        e.target.value='';
    }
}  


let repliesList;
    
    // Collected bottles
if (replies && replies.length !== 0) {

   repliesList = replies.map((reply, index) =>    
        <li key={index}>
        <div>
        <img alt="stuff" src={reply.imageSrc || defaultUserImage} width="20px" height="20px" />
        <b>{`${reply.name} `}</b>
        </div>
        <p>{reply.content}</p>
        </li>  
    );
}


return (
                <div className="thread">
                    <div className="threadInner">
                    <div className="threadMainPost"> 
                        <div className="threadMainInfo"><img alt="stuff" src={thread.imageSrc || defaultUserImage} width="50px" height="50px" />
                        <p className="threadUserName">{thread.name}</p> 
                        </div>
                        <br/>
                        <br/>
                        {thread.audioUrl ? <audio controls src={thread.audioUrl}></audio> : null}
                        
                        {thread.imageUrl ? <div className="images-container" >
                        <img  src={thread.imageUrl} alt="stuff"/>    </div> : null}
                        
                        {thread.videoUrl ?   <div className="images-container" >
                        <video width="400" controls src={thread.videoUrl}/>  
                        </div> : null}
                    
                        
                        <p className="threadMainContent">{thread.content}</p>
                        
                        
                    </div>
                    <div className="threadNav">  
                    <TextField
                            variant='filled'
                            id="treeHoleFormInput" 
                            color='primary'
                            label='Write a reply...'
                            className="reply"
                            onKeyPress={(e) => {handleEnter(e);}} 
                        />
                        
                        {/*<textarea className="reply" onKeyPress={(e) => {handleEnter(e);}} placeholder="Write a reply..." ></textarea>*/}
                    </div>


                    <ul className="threadReplies"> 
                        {repliesList}
                        
                    </ul>
                    </div>
                
                </div>
);
 
 
}

Thread.propTypes = {
    thread: PropTypes.object,
    handleReplySubmit: PropTypes.func,
}


export default Thread;
