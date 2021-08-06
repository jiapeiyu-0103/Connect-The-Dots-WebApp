import './TreeHole.css'; 
import {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import Thread from '../Thread/Thread';
import MediaUpload from '../MediaUpload';
import TextField from '@material-ui/core/TextField';
import {SERVER_URL} from '../../../services/messageApi';
import {constructMessageObj} from '../../../constants/Helpers';

function TreeHole(props) {

// Component reference used to check if component has been mounted    
const isMounted = useRef(false);

// Current users useful information
const curUser = props.curUser;
const userId = curUser.message_id;
    
// Fetch threads from server on ComponentDidMount
useEffect(() => {
  fetchTreeHoleThreads();
}, []);
        
// Hooks for media uploads
const [imageFileInfo, setImageFileInfo] = useState(null);
const [videoFileInfo, setVideoFileInfo] = useState(null);
const [audioFileInfo, setAudioFileInfo] = useState(null);

const [pics, setPics] = useState(null);
const [videos, setVideos] = useState(null);
const [audioData, setAudioData]=useState(null);

// Hooks for tree hole threads
const [threads, setThreads] = useState([]);

// Scroll to the new thread whenever it is added.
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
    
 
    

// Handle replies submit
const handleSubmit = (index, replyValue) => {
    const newThreads = [...threads];
    
    const replyToAdd = constructMessageObj(replyValue, curUser)

    // Construct request
    const objectToSentToServer = {
        _id: newThreads[index]._id,
        replyToAdd: replyToAdd
    }
    
    // Push replies to server
    fetch(SERVER_URL+'messageApi/addTreeHoleThreadReplies', {
        method: 'PUT',
        body: JSON.stringify(objectToSentToServer),
        headers: {
        'Content-Type': 'application/json'
        }

    })
    .then(response => response.json())
    .then((data) => {
        if (data === 'ADD TREE HOLE THREAD REPLIES success') {  
            fetchTreeHoleThreads();

        } else {
            console.error("Error when ADD a TREE HOLE THREAD REPLY!");
        }
    })
}

// Fetch tree hole threads from server
const fetchTreeHoleThreads = () => {
    fetch(SERVER_URL+'messageApi/getTreeHoleThreads')
        .then(response => response.json())
        .then(data => {setThreads( [...data])})
        .catch(err=> console.error("Error when RETRIEVING Tree Hole Threads array"));
}

// Send video uploads to server
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

// Send image uploads to server
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

// Send audio uploads to server
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




// Add a thread to the page
const addThread = (value, audio, img, vid) => {
    const newThreads = [...threads];
    
    const threadToAdd = constructMessageObj(value, curUser);
    
    threadToAdd.audioUrl = audio;
    threadToAdd.imageUrl = img;
    threadToAdd.videoUrl = vid;
    
    newThreads.push(threadToAdd);
    // Post request to server to add thread information to database
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
                // Post image upload if available
                if (imageFileInfo) {
                    postTreeHoleThreadImage(data.treeHoleThreadId);
                }
                // Post video upload if available
                if(videoFileInfo) {
                    postTreeHoleThreadVideo(data.treeHoleThreadId);
                }
                // Post audi upload if available
                if(audioFileInfo) {
                    postTreeHoleThreadAudio(data.treeHoleThreadId);
                }
                
                // Fetch threads after adding successfully
                fetchTreeHoleThreads();
                
                
                // Reset values after adding successfully
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

// Requesting server to delete a thread  
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
// Variable to store global thread list
let threadList;   
// Show global threads
if (threads && threads.length !== 0) {

   threadList = threads.map((thread, index) =>    
        <li key={index}>
                            
            {thread.userId === userId ? <span onClick={(e)=>{deleteThread(index);}} className={"deleteThreadBtn"}>&times;</span> : null}
            <Thread handleReplySubmit={(replyValue) => handleSubmit(index, replyValue)} thread={thread} />
            
        </li>  
    );
}

// Media uploads event handle
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

// Add thread on the user clicking Send button
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
