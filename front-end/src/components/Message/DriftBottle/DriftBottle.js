import { useState, useEffect } from 'react';
import DriftBottleModal from './DriftBottleModal';
import './DriftBottle.css';
import * as DriftBottleStates from '../../../constants/DriftBottleStates';
import {COLLECTED} from '../../../constants/BottleStates';
import {SERVER_URL} from '../../../constants/ServerUrl';
function DriftBottle(props) {
const [showDriftBotModal, setShowDriftBotModal] = useState(false);
const [driftBotModalState, setDriftBotModalState] = useState(null);
const [collectBottleInfo, setCollectBottleInfo] = useState(null);



const [imageFileInfo, setImageFileInfo] = useState(null);
const [videoFileInfo, setVideoFileInfo] = useState(null);
const [audioFileInfo, setAudioFileInfo] = useState(null);

const [pics, setPics] = useState(null);
const [videos, setVideos] = useState(null);
const [audioData, setAudioData]=useState(null);

const curUser = props.curUser;
const yourName = curUser.username;
const yourPhoto = curUser.photo;
const userId = curUser.message_id;
    
useEffect(() => {
  fetchSendBottles();
  fetchCollectedBottles();
}, []);

const [sentBottles, setSentBottles] = useState ([]);
    
    
const [collectedBottles, setCollectedBottles] = useState (
[]);
    
    
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

const addSentBottle = (e) => {
    const contentValue = e.target.parentElement.querySelector("#sendBottleTextField").value;
    
    // construct bottle to add
    const bottleToAdd = constructYourObj(contentValue);
    
    bottleToAdd.audioUrl = audioData;
    bottleToAdd.imageUrl = pics;
    bottleToAdd.videoUrl = videos;
    bottleToAdd.name = yourName;
    
 
    
    const newSentBottles = [...sentBottles];
    newSentBottles.push(bottleToAdd);

//    setSentBottles (newSentBottles);
           //add post request
    fetch(SERVER_URL+'messageApi/addSendDriftBottles', {
            method: 'POST',
            body: JSON.stringify(bottleToAdd),
            headers: {
            'Content-Type': 'application/json'
            }

        })
        .then(response => response.json())
        .then((data) => {
            if (data.message === 'ADD SEND BOTTLE success') {
                if (imageFileInfo) {
                    postImageDriftBottle(data.bottleId);
                }
                if(videoFileInfo) {
                    postVideoDriftBottle(data.bottleId);
                }
                if(audioFileInfo) {
                    postAudioDriftBottle(data.bottleId);
                }
                fetchSendBottles();

            } else {
                console.error("Error when ADD a Send Drift Bottle!");
            }
     })

}


const postVideoDriftBottle = (bottleId) => {
    const formData = new FormData();
    formData.append('bottleId', bottleId);
    formData.append('userId', userId);
    formData.append('videoFile', videoFileInfo.videoFile);
    formData.append('videoFileName', videoFileInfo.videoFileName);
    
     fetch(SERVER_URL+'messageApi/addDriftBottlesVideos', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then((data) => {
            if (data === 'AddDriftBottlesVideos SUCCESS') {
                
                fetchSendBottles();
                setVideoFileInfo(null);

            } else {
                console.error("Error when ADD a Send Drift Bottle VIDEO!");
            }
     })
}

const postImageDriftBottle = (bottleId) => {
    
    const formData = new FormData();
    formData.append('bottleId', bottleId);
    formData.append('userId', userId);
    formData.append('imageFile', imageFileInfo.imageFile);
    formData.append('imageFileName', imageFileInfo.imageFileName);
    
     fetch(SERVER_URL+'messageApi/addDriftBottlesImages', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then((data) => {
            if (data === 'AddDriftBottlesImages SUCCESS') {
                
                fetchSendBottles();
                setImageFileInfo(null);

            } else {
                console.error("Error when ADD a Send Drift Bottle IMAGE!");
            }
     })
        
    
}

const postAudioDriftBottle = (bottleId) => {
    
    const formData = new FormData();
    formData.append('bottleId', bottleId);
    formData.append('userId', userId);
    formData.append('audioFile', audioFileInfo.audioFile);
    formData.append('audioFileName', audioFileInfo.audioFileName);
    
     fetch(SERVER_URL+'messageApi/addDriftBottlesAudios', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then((data) => {
            if (data === 'AddDriftBottlesAudios SUCCESS') {
                
                fetchSendBottles();
                setAudioFileInfo(null);

            } else {
                console.error("Error when ADD a Send Drift Bottle AUDIO!");
            }
     })
        
    
}

const fetchSendBottles = () => {
       //Fetch sent bottles
    fetch(SERVER_URL+'messageApi/getSendDriftBottles/' + userId)
        .then(response => response.json())
        .then(data => {setSentBottles( [...data])})
        .catch(err=> console.error("Error when RETRIEVING Send Drift Bottles array"));
}

const fetchCollectedBottles = () => {
       //Fetch collected bottles
    fetch(SERVER_URL+'messageApi/getCollectedDriftBottles/' + userId)
        .then(response => response.json())
        .then(data => {setCollectedBottles( [...data])})
        .catch(err=> console.error("Error when RETRIEVING Collected Drift Bottles array"));
}
const collectBottle = () => {
    
    // Get a random bottle in the sea, use example bottle for now.
    fetch(SERVER_URL+'messageApi/getARandomDriftBottle/' + userId)
        .then(response => response.json())
        .then(data => {
        
            if (data !== 'none') {
                fetchCollectedBottles();
                const newCollectedBottles = [...collectedBottles];
                newCollectedBottles.push(data);
    
                setCollectedBottles (newCollectedBottles);
    
                setDriftBotModalState(DriftBottleStates.COLLECT);
                setCollectBottleInfo(data);
                setShowDriftBotModal(true);
                
                
            } else {
                alert("Sorry no bottle to retrieve");
            }
            
        
        })
        .catch(err=> console.error("Error when RETRIEVING A RANDOM  Drift Bottle"));
    
  
}


const addCollectedBottleReply = (index, replyValue) => {
    const newCollectedBottles = [...collectedBottles];
    
    //construct reply to add
    const replyToAdd = constructYourObj(replyValue);
    let i = index;
    if(i === -1) {
        i = newCollectedBottles.length-1;
        
    } 
    
    
    newCollectedBottles[i].replies.push(replyToAdd);
    
    
    setCollectedBottles(newCollectedBottles);
    
    fetch(SERVER_URL+'messageApi/addSendDriftBottlesReplies', {
        method: 'PUT',
        body: JSON.stringify(newCollectedBottles[i]),
        headers: {
        'Content-Type': 'application/json'
        }

    })
    .then(response => response.json())
    .then((data) => {
        if (data === 'ADD SEND BOTTLE REPLIES success') {  

        } else {
            console.error("Error when ADD a Send Drift Bottle REPLY!");
        }
    })
}



const addSentBottleReply = (index, replyValue) => {
    const newSentBottles = [...sentBottles];
    
    //construct reply to add
    const replyToAdd = constructYourObj(replyValue);
    let i = index;
    if(i === -1) {
        i = newSentBottles.length-1;
        
    } 
    
    newSentBottles[i].replies.push(replyToAdd);
    
    setSentBottles(newSentBottles);
    
    fetch(SERVER_URL+'messageApi/addSendDriftBottlesReplies', {
        method: 'PUT',
        body: JSON.stringify(newSentBottles[i]),
        headers: {
        'Content-Type': 'application/json'
        }

    })
    .then(response => response.json())
    .then((data) => {
        if (data === 'ADD SEND BOTTLE REPLIES success') {  
            

        } else {
            console.error("Error when ADD a Send Drift Bottle REPLY!");
        }
    })
    
        
   
    
    
    
}

const addReply = (type, index, replyValue) => {
    if (type=== COLLECTED) {
        addCollectedBottleReply(index, replyValue);
    } else {
        addSentBottleReply(index, replyValue);
    }
}


const deleteBottle = (type, index) => {
    if (type === COLLECTED) {
        const bottleToDelete = collectedBottles[index];
         fetch(SERVER_URL+'messageApi/deleteCollectedDriftBottles/' + bottleToDelete._id, {
            method: 'DELETE',
         })
        .then(response => response.json())
        .then((data) => {
            if (data === 'DELETE COLLECTED BOTTLE success') {
                fetchCollectedBottles();

            } else {
                console.error("Error when DELETE a COLLECTED Drift Bottle!");
            }
     })
    } else {
         const bottleToDelete = sentBottles[index];
         fetch(SERVER_URL+'messageApi/deleteSendDriftBottles/' + bottleToDelete._id, {
            method: 'DELETE',
         })
        .then(response => response.json())
        .then((data) => {
            if (data === 'DELETE SEND BOTTLE success') {
                fetchSendBottles();

            } else {
                console.error("Error when DELETE a Send Drift Bottle!");
            }
     })
    }
}



const closeModal = () => {
    setShowDriftBotModal(false);
        
    setAudioData(null);
    setPics(null);
    setVideos(null);
    setImageFileInfo(null);
    setVideoFileInfo(null);
    setAudioFileInfo(null);
}

const setModalToSend = () => {
    setDriftBotModalState(DriftBottleStates.SEND);
    setShowDriftBotModal(true);
}


const setModalToCollect = () => {
    collectBottle();
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


const handleAudioUpload = (url, file) => {
    setAudioData(url);
    const audioFileInfo = {
        audioFile: file,
        audioFileName: file.name,
    }
    setAudioFileInfo(audioFileInfo);
    
}


const setModalToMy = () => {
    setDriftBotModalState(DriftBottleStates.MY_BOTTLES);
    setShowDriftBotModal(true);
}
            return (
                
                 
                <div id="driftBotOuter">
                
                {showDriftBotModal ?
                <DriftBottleModal  videos={videos} setVideos={handleVideoUpload} pics={pics} setPics={handleImageUpload} audioData={audioData} setAudioData={handleAudioUpload} addReply={addReply} deleteBottle={deleteBottle} addCollectedBottleReply={addCollectedBottleReply} addSentBottle={addSentBottle} collectedBottles={collectedBottles} sentBottles={sentBottles} collectBottleInfo={collectBottleInfo} state={driftBotModalState} closeModal={closeModal} /> : null}
                
                    <div id="driftBotNav">
                    <button onClick = {setModalToSend}> Send </button>
                    <button onClick = {setModalToCollect}> Collect </button>
                    <button onClick = {setModalToMy}> My Bottles </button>
                    </div>
                </div>
            );
 
 
}

export default DriftBottle;
