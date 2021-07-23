import './TreeHole.css'; 
import {useState, useEffect, useRef} from 'react';
import treeHoleImage from '../img/treeHole.png';
import PropTypes from 'prop-types';
import Thread from '../Thread/Thread';
import MediaUpload from '../MediaUpload';
import TextField from '@material-ui/core/TextField';
import {SERVER_URL} from '../../../constants/ServerUrl';

function TreeHole(props) {

const isMounted = useRef(false);

const curUser = props.curUser;
const yourName = curUser.username;
const yourPhoto = curUser.photo;
const userId = curUser.message_id;
    
    
useEffect(() => {
  fetchTreeHoleThreads();
}, []);
    
    
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
    

const [imageFileInfo, setImageFileInfo] = useState(null);
const [videoFileInfo, setVideoFileInfo] = useState(null);
const [audioFileInfo, setAudioFileInfo] = useState(null);
    
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
    
    fetch(SERVER_URL+'messageApi/addTreeHoleThreadReplies', {
        method: 'PUT',
        body: JSON.stringify(newThreads[index]),
        headers: {
        'Content-Type': 'application/json'
        }

    })
    .then(response => response.json())
    .then((data) => {
        if (data === 'ADD TREE HOLE THREAD REPLIES success') {  
            

        } else {
            console.error("Error when ADD a TREE HOLE THREAD REPLY!");
        }
    })
}


const fetchTreeHoleThreads = () => {
       //Fetch tree hole threads
    fetch(SERVER_URL+'messageApi/getTreeHoleThreads')
        .then(response => response.json())
        .then(data => {setThreads( [...data])})
        .catch(err=> console.error("Error when RETRIEVING Tree Hole Threads array"));
}


const postTreeHoleThreadVideo = (treeHoleThreadId) => {
    const formData = new FormData();
    formData.append('treeHoleThreadId', treeHoleThreadId);
    formData.append('userId', userId);
    formData.append('videoFile', videoFileInfo.videoFile);
    formData.append('videoFileName', videoFileInfo.videoFileName);
    
     fetch(SERVER_URL+'messageApi/addTreeHoleThreadVideos', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then((data) => {
            if (data === 'addTreeHoleThreadVideos SUCCESS') {
                
                fetchTreeHoleThreads();
                setVideoFileInfo(null);

            } else {
                console.error("Error when ADD a TREE HOLE THREAD VIDEO!");
            }
     })
}

const postTreeHoleThreadImage = (treeHoleThreadId) => {
    
    const formData = new FormData();
    formData.append('treeHoleThreadId', treeHoleThreadId);
    formData.append('userId', userId);
    formData.append('imageFile', imageFileInfo.imageFile);
    formData.append('imageFileName', imageFileInfo.imageFileName);
    
     fetch(SERVER_URL+'messageApi/addTreeHoleThreadImages', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then((data) => {
            if (data === 'addTreeHoleThreadImages SUCCESS') {
                
                fetchTreeHoleThreads();
                setImageFileInfo(null);

            } else {
                console.error("Error when ADD a TREE HOLE THREAD IMAGE!");
            }
     })
        
    
}

const postTreeHoleThreadAudio = (treeHoleThreadId) => {
    
    const formData = new FormData();
    formData.append('treeHoleThreadId', treeHoleThreadId);
    formData.append('userId', userId);
    formData.append('audioFile', audioFileInfo.audioFile);
    formData.append('audioFileName', audioFileInfo.audioFileName);
    
     fetch(SERVER_URL+'messageApi/addTreeHoleThreadAudios', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then((data) => {
            if (data === 'addTreeHoleThreadAudios SUCCESS') {
                
                fetchTreeHoleThreads();
                setAudioFileInfo(null);

            } else {
                console.error("Error when ADD a TREE HOLE THREAD AUDIO!");
            }
     })
        
    
}




const addThread = (value, audio, img, vid) => {
    const newThreads = [...threads];
    
    const threadToAdd = constructYourObj(value);
    
    threadToAdd.audioUrl = audio;
    threadToAdd.imageUrl = img;
    threadToAdd.videoUrl = vid;
    
    newThreads.push(threadToAdd);
    
    fetch(SERVER_URL+'messageApi/addTreeHoleThread', {
            method: 'POST',
            body: JSON.stringify(threadToAdd),
            headers: {
            'Content-Type': 'application/json'
            }

        })
        .then(response => response.json())
        .then((data) => {
            if (data.message === 'ADD TREE HOLE THREAD success') {
                if (imageFileInfo) {
                    postTreeHoleThreadImage(data.treeHoleThreadId);
                }
                if(videoFileInfo) {
                    postTreeHoleThreadVideo(data.treeHoleThreadId);
                }
                if(audioFileInfo) {
                    postTreeHoleThreadAudio(data.treeHoleThreadId);
                }
                fetchTreeHoleThreads();
                
                
    
                document.getElementById("treeHoleFormInput").value = '';
                document.getElementById("driftAudio").value = '';
                document.getElementById("driftVideo").value = '';
                document.getElementById("driftImage").value = '';
                
                setAudioData(null);
                setPics(null);
                setVideos(null);

            } else {
                console.error("Error when ADD a TREE HOLE THREAD!");
            }
     })

}
    
let threadList;
    
const deleteThread = (index) => {
    const threadToDelete = threads[index];
    
    fetch(SERVER_URL+'messageApi/deleteTreeHoleThreads/' + threadToDelete._id, {
            method: 'DELETE',
         })
        .then(response => response.json())
        .then((data) => {
            if (data === 'DELETE TREE HOLE THREAD success') {
                fetchTreeHoleThreads();

            } else {
                console.error("Error when DELETE TREE HOLE THREAD!");
            }
     })
    
}
    
// Show global threads
if (threads && threads.length !== 0) {

   threadList = threads.map((thread, index) =>    
        <li key={index}>
                            
            {thread.userId === userId ? <span onClick={(e)=>{deleteThread(index);}} className={"deleteThreadBtn"}>&times;</span> : null}
            <Thread handleReplySubmit={(replyValue) => handleSubmit(index, replyValue)} thread={thread} />
            
        </li>  
    );
}

const handleAudioUpload = (url, file) => {
    setAudioData(url);
    const audioFileInfo = {
        audioFile: file,
        audioFileName: file.name,
    }
    setAudioFileInfo(audioFileInfo);
    
}

const handleImageUpload = (url, file) => {
    setPics(url);
    const imageFileInfo = {
        imageFile: file,
        imageFileName: file.name,
    }
    setImageFileInfo(imageFileInfo);
    
}

const handleVideoUpload = (url, file) => {
    setVideos(url);
    const videoFileInfo = {
        videoFile: file,
        videoFileName: file.name,
    }
    setVideoFileInfo(videoFileInfo);
    
}






const handleSend = () => {
    const value = document.getElementById("treeHoleFormInput").value;
    
    if (value || audioData || pics || videos) {
         addThread(value, audioData, pics, videos);
    }
   
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
                            <MediaUpload setAudioData={handleAudioUpload} setPics ={handleImageUpload} setVideos={handleVideoUpload} />
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
