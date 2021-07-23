import './TreeHole.css'; 
import {useState, useEffect, useRef} from 'react';
import treeHoleImage from '../img/treeHole.png';
import PropTypes from 'prop-types';
import Thread from '../Thread/Thread';
import MediaUpload from '../MediaUpload';
import TextField from '@material-ui/core/TextField';
function TreeHole(props) {

const isMounted = useRef(false);

const curUser = props.curUser;
const yourName = curUser.username;
const yourPhoto = curUser.photo;
const userId = curUser.message_id;
    
    
const constructYourObj = (value) => {
    
    const returnObj = {};
    returnObj.content = value;
    returnObj.name = yourName;
    returnObj.location = null;
    returnObj.imageSrc = yourPhoto;
    returnObj.userId = userId;
    returnObj.replies = [];
    return returnObj;
}
    
const [pics, setPics] = useState(null);
const [videos, setVideos] = useState(null);
const [audioData, setAudioData]=useState(null);

const [threads, setThreads] = useState([]);

    useEffect(() => {
        if (isMounted.current) {
            const threadListDiv = document.getElementById("treeHoleOuter");
            if (threadListDiv) {
                threadListDiv.scrollIntoView({
                    block: "end",
                    inline: "center",
                    behavior: "smooth",
                    alignToTop: false
                });

            }

        } else {
            isMounted.current = true;
        }



    }, [threads.length]);
    
 
    

    
const handleSubmit = (index, replyValue) => {
    const newThreads = [...threads];
    
    const replyToAdd = constructYourObj(replyValue)
    
    newThreads[index].replies.push(replyToAdd);
    
    setThreads(newThreads);
}


const addThread = (value, audio, img, vid) => {
    const newThreads = [...threads];
    
    const threadToAdd = constructYourObj(value);
    
    threadToAdd.audioUrl = audio;
    threadToAdd.imageUrl = img;
    threadToAdd.videoUrl = vid;
    
    newThreads.push(threadToAdd);
    
    setThreads(newThreads);
}
    
let threadList;
    
    // Collected bottles
if (threads && threads.length !== 0) {

   threadList = threads.map((thread, index) =>    
        <li key={index}>
            <Thread handleReplySubmit={(replyValue) => handleSubmit(index, replyValue)} thread={thread} />
        </li>  
    );
}



const handleSend = () => {
    const value = document.getElementById("treeHoleFormInput").value;
    
    if (value || audioData || pics || videos) {
         addThread(value, audioData, pics, videos);
    }
   
    
    document.getElementById("treeHoleFormInput").value = '';
    setAudioData(null);
    setPics(null);
    setVideos(null);
}
            return (
                <div id="treeHoleOuter">
              
                
                
                
                    <div id="treeHoleImageFormWrapper">
                        <img alt="stuff" id="treeHoleImage" src="https://i.postimg.cc/XqZ1Mmw4/tree-hole.jpg" />
                        <div id="treeHoleForm">
                {/*<textarea id="treeHoleFormInput" placeholder="Tell me your concerns" className="treeHoleInput"></textarea>*/}
                   
                    <TextField
                            variant='filled'
                            id="treeHoleFormInput" 
                            color='primary'
                            label='Tell me your concerns:'
                            multiline
                            className="treeHoleInput"/>
                
                            <br/>
                            <div className="send-container">
                            <button className="send-button"onClick={handleSend}>SEND</button>
                            <MediaUpload setAudioData={setAudioData} setPics ={setPics} setVideos={setVideos} />
                            </div>
                        </div>

  

            

                    </div>
                    <br/>
                    <hr/>
       
                
                    <ul className="threadList"> 
                        {threadList}
                        
                    </ul>


            
                    
                </div>
            );
 
 
}

TreeHole.propTypes = {
    curUser: PropTypes.object,
}

export default TreeHole;
