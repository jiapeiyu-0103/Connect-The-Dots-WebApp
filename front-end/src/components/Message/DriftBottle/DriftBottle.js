import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DriftBottleModal from './DriftBottleModal';
import './DriftBottle.css';
import * as DriftBottleStates from '../../../constants/DriftBottleStates';
import {COLLECTED} from '../../../constants/BottleStates';
import {SERVER_URL} from '../../../services/messageApi';
import {constructMessageObj} from '../../../constants/Helpers';
function DriftBottle(props) {
// Hooks to control Drift Bottle modal visibilties and states
const [showDriftBotModal, setShowDriftBotModal] = useState(false);
const [driftBotModalState, setDriftBotModalState] = useState(null);
// Hooks to control states of collect bottle info
const [collectBottleInfo, setCollectBottleInfo] = useState(null);
// Media upload hooks
const [imageFileInfo, setImageFileInfo] = useState(null);
const [videoFileInfo, setVideoFileInfo] = useState(null);
const [audioFileInfo, setAudioFileInfo] = useState(null);

const [pics, setPics] = useState(null);
const [videos, setVideos] = useState(null);
const [audioData, setAudioData]=useState(null);

// Current user information
const curUser = props.curUser;
const userId = curUser.message_id;

// Fetch sent and collected bottles on ComponentDidMount
useEffect(() => {
  fetchSendBottles();
  fetchCollectedBottles();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

// Sent bottle array hook
const [sentBottles, setSentBottles] = useState ([]);
// Collected bottle array hook
const [collectedBottles, setCollectedBottles] = useState ([]);

// Send a bottle into the sea
const addSentBottle = (e) => {
    // Retrieve text information
    const contentValue = e.target.parentElement.querySelector("#sendBottleTextField").value;
    // Construct bottle to send
    const bottleToAdd = constructMessageObj(contentValue, curUser);
    // Media data got from inputs
    bottleToAdd.audioUrl = audioData;
    bottleToAdd.imageUrl = pics;
    bottleToAdd.videoUrl = videos;
    // Update sent bottles array
    const newSentBottles = [...sentBottles];
    newSentBottles.push(bottleToAdd);

    // Post request to server to add bottle information to database
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
// Send video file to server for storage
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
                // Fetch sent bottles array on success
                fetchSendBottles();
                // Reset hooks
                setVideoFileInfo(null);

            } else {
                console.error("Error when ADD a Send Drift Bottle VIDEO!");
            }
     })
}
// Send image file to server for storage
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
                // Fetch sent bottles array on success
                fetchSendBottles();
                // Reset hooks
                setImageFileInfo(null);

            } else {
                console.error("Error when ADD a Send Drift Bottle IMAGE!");
            }
     })
        
    
}

// Send audio file to server for storage
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
                // Fetch sent bottles array on success
                fetchSendBottles();
                // Reset hooks
                setAudioFileInfo(null);

            } else {
                console.error("Error when ADD a Send Drift Bottle AUDIO!");
            }
     })
        
}
// Request array of sent bottles from server
const fetchSendBottles = () => {
       //Fetch sent bottles
    fetch(SERVER_URL+'messageApi/getSendDriftBottles/' + userId)
        .then(response => response.json())
        .then(data => {setSentBottles( [...data])})
        .catch(err=> console.error("Error when RETRIEVING Send Drift Bottles array"));
}
// Request array of collected bottles from server
const fetchCollectedBottles = () => {
    fetch(SERVER_URL+'messageApi/getCollectedDriftBottles/' + userId)
        .then(response => response.json())
        .then(data => {setCollectedBottles( [...data])})
        .catch(err=> console.error("Error when RETRIEVING Collected Drift Bottles array"));
}
// Get a random bottle in the sea
const collectBottle = () => {
    
    // Requesting a random bottle to collect from server
    fetch(SERVER_URL+'messageApi/getARandomDriftBottle/' + userId)
        .then(response => response.json())
        .then(data => {
            // If sucessfully collected bottle
            if (data !== 'none') {
                // Fetch new collected bottles
                fetchCollectedBottles();
                // Make a copy of the current collected bottles and update it with new data
                const newCollectedBottles = [...collectedBottles];
                newCollectedBottles.push(data);
                setCollectedBottles (newCollectedBottles);
    
                // Open moda with Collect Bottle view
                setDriftBotModalState(DriftBottleStates.COLLECT);
                setCollectBottleInfo(data);
                setShowDriftBotModal(true);
            
            } else {
                alert("Sorry no bottle to retrieve");
            }
            
        
        })
        .catch(err=> console.error("Error when RETRIEVING A RANDOM  Drift Bottle"));
    
  
}
// Add new reply to a collected bottle
const addCollectedBottleReply = (index, replyValue) => {
    // Make a new copy of the array
    const newCollectedBottles = [...collectedBottles];
    
    // Construct reply to add
    const replyToAdd = constructMessageObj(replyValue, curUser);
    let i = index;
    // Index = -1 means adding to the latest sent bottle
    if(i === -1) {
        i = newCollectedBottles.length-1;
        
    }
    
    // Push new reply to collected bottles array copy
    newCollectedBottles[i].replies.push(replyToAdd);

    // Update new collected bottles array with the copy
    setCollectedBottles(newCollectedBottles);
    
    // Construct request
    const objectToSentToServer = {
        _id: newCollectedBottles[i]._id,
        replyToAdd: replyToAdd
    }
    
    // Request server to save information of the new reply in database
    fetch(SERVER_URL+'messageApi/addSendDriftBottlesReplies', {
        method: 'PUT',
        body: JSON.stringify(objectToSentToServer),
        headers: {
        'Content-Type': 'application/json'
        }

    })
    .then(response => response.json())
    .then((data) => {
        if (data !== 'ADD SEND BOTTLE REPLIES success') {  
            console.error("Error when ADD a Send Drift Bottle REPLY!");
        }
    })
}

// Add new reply to a sent bottle
const addSentBottleReply = (index, replyValue) => {
    // Make a new copy of the array
    const newSentBottles = [...sentBottles];
    
    // Construct reply to add
    const replyToAdd = constructMessageObj(replyValue, curUser);
    let i = index;
    // Index = -1 means adding to the latest sent bottle
    if(i === -1) {
        i = newSentBottles.length-1;
        
    } 
       
    // Push new reply to sent bottles array copy
    newSentBottles[i].replies.push(replyToAdd);
    
    // Update new sent bottles array with the copy
    setSentBottles(newSentBottles);
    
    // Construct request
    const objectToSentToServer = {
        _id: newSentBottles[i]._id,
        replyToAdd: replyToAdd
    }
    
    // Request server to save information of the new reply in database
    fetch(SERVER_URL+'messageApi/addSendDriftBottlesReplies', {
        method: 'PUT',
        body: JSON.stringify(objectToSentToServer),
        headers: {
        'Content-Type': 'application/json'
        }

    })
    .then(response => response.json())
    .then((data) => {
        if (data !== 'ADD SEND BOTTLE REPLIES success') {  
            console.error("Error when ADD a Send Drift Bottle REPLY!");
        }
    })
    
}
// Add reply to correct type of bottle
const addReply = (type, index, replyValue) => {
    if (type=== COLLECTED) {
        addCollectedBottleReply(index, replyValue);
    } else {
        addSentBottleReply(index, replyValue);
    }
}
// Delete a bottle on server
const deleteBottle = (type, index) => {
    // Delete for collected bottles
    if (type === COLLECTED) {
        const bottleToDelete = collectedBottles[index];
         fetch(SERVER_URL+'messageApi/deleteCollectedDriftBottles/' + bottleToDelete._id, {
            method: 'DELETE',
         })
        .then(response => response.json())
        .then((data) => {
            if (data === 'DELETE COLLECTED BOTTLE success') {
                // Fetch collected bottles on success
                fetchCollectedBottles();

            } else {
                console.error("Error when DELETE a COLLECTED Drift Bottle!");
            }
     })
    // Delete sent bottles
    } else {
         const bottleToDelete = sentBottles[index];
         fetch(SERVER_URL+'messageApi/deleteSendDriftBottles/' + bottleToDelete._id, {
            method: 'DELETE',
         })
        .then(response => response.json())
        .then((data) => {
            if (data === 'DELETE SEND BOTTLE success') {
                // Fetch sent bottles on success
                fetchSendBottles();

            } else {
                console.error("Error when DELETE a Send Drift Bottle!");
            }
     })
    }
}


// Close modal and reset all values
const closeModal = () => {
    // Close modal
    setShowDriftBotModal(false);
    // Reset values
    setAudioData(null);
    setPics(null);
    setVideos(null);
    setImageFileInfo(null);
    setVideoFileInfo(null);
    setAudioFileInfo(null);
}

// Set modal state to send bottle view
const setModalToSend = () => {
    setDriftBotModalState(DriftBottleStates.SEND);
    setShowDriftBotModal(true);
}

// Set modal state to collect bottle view
const setModalToCollect = () => {
    collectBottle();
}

// Media uploads event handler
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

// Set modal state to show My Drift Bottles
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

DriftBottle.propTypes = {
    curUser: PropTypes.object,
}

export default DriftBottle;
