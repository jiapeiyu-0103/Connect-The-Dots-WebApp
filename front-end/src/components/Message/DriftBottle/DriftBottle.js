import { useState, useEffect } from 'react';
import DriftBottleModal from './DriftBottleModal';
import './DriftBottle.css';
import * as DriftBottleStates from '../../../constants/DriftBottleStates';
import {COLLECTED} from '../../../constants/BottleStates';
import * as YourInfo from '../../../constants/YourInfo';
import {constructYourObj} from '../../../constants/Helpers';
import {SERVER_URL} from '../../../constants/ServerUrl';
function DriftBottle() {
const [showDriftBotModal, setShowDriftBotModal] = useState(false);
const [driftBotModalState, setDriftBotModalState] = useState(null);
const [collectBottleInfo, setCollectBottleInfo] = useState(null);
const exampleCollectedBottle = {
    name: 'Stranger',
    location: 'Somewhere',
    content: 'Hi, wish you happiness wherever you are!',
    imageSrc: null,
    replies:[],
}


const [imageFileInfo, setImageFileInfo] = useState(null);

const [pics, setPics] = useState(null);
const [videos, setVideos] = useState(null);
const [audioData, setAudioData]=useState(null);

const yourName = YourInfo.YOUR_NAME;
const yourLocation = YourInfo.YOUR_LOCATION;
const userId = YourInfo.YOUR_USER_ID;
    
useEffect(() => {
  fetchSendBottles();
}, []);

const [sentBottles, setSentBottles] = useState ([]);
    
    
const [collectedBottles, setCollectedBottles] = useState (

[
    
    {
        name: "Stranger",
        location: "Somewhere",
        content: "To someone, you are awesome!",
        imageSrc: null,
        replies: [
            {
                name: yourName,
                location: yourLocation,
                content: 'Hey, thank you, you too!',
                imageSrc: null
            },
            {
                name: 'Stranger',
                location: 'Somewhere',
                content: "Have a great day!",
                imageSrc: null
            },
            
            
        ]
    },
    
    {
        name: "Stranger2",
        location: "Someplace",
        content: "You know about the up dog?",
        imageSrc: null,
        replies: [
            {
                name: yourName,
                location: yourLocation,
                content: "What's up dog?",
                imageSrc: null
            },
            {
                name: yourName,
                location: yourLocation,
                content: "Ahh you got me!",
                imageSrc: null
            }, 
            
        ]
    },
]);

const addSentBottle = (e) => {
    const contentValue = e.target.parentElement.querySelector("#sendBottleTextField").value;
    
    // construct bottle to add
    const bottleToAdd = constructYourObj(contentValue);
    
    bottleToAdd.audioUrl = audioData;
    bottleToAdd.imageUrl = pics;
    bottleToAdd.videoUrl = videos;
    
 
    
    const newSentBottles = [...sentBottles];
    newSentBottles.push(bottleToAdd);
//    
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
                fetchSendBottles();

            } else {
                console.error("Error when ADD a Send Drift Bottle!");
            }
     })

}

const postImageDriftBottle = (bottleId) => {
    
    const formData = new FormData();
    formData.append('bottleId', bottleId);
    formData.append('userId', userId);
    formData.append('imageFile', imageFileInfo.imageFile);
    formData.append('imageFileName', imageFileInfo.imageFileName);
    
     fetch(SERVER_URL+'messageApi/addDriftBottlesImage', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then((data) => {
            if (data === 'AddDriftBottlesImage SUCCESS') {
                
                fetchSendBottles();
                setImageFileInfo(null);

            } else {
                console.error("Error when ADD a Send Drift Bottle IMAGE!");
            }
     })
        
    
}

const fetchSendBottles = () => {
       //Fetch card array
    fetch(SERVER_URL+'messageApi/getSendDriftBottles/' + userId)
        .then(response => response.json())
        .then(data => {setSentBottles(data)})
        .catch(err=> console.error("Error when RETRIEVING Send Drift Bottles array"));
}

const collectBottle = () => {
    
    // Get a random bottle in the sea, use example bottle for now.
    
    const newCollectedBottles = [...collectedBottles];
    newCollectedBottles.push(exampleCollectedBottle);
    
    setCollectedBottles (newCollectedBottles);
}


const addCollectedBottleReply = (index, replyValue) => {
    const newCollectedBottles = [...collectedBottles];
    
    //construct reply to add
    const replyToAdd = constructYourObj(replyValue);
    
    if(index === -1) {
        newCollectedBottles[newCollectedBottles.length-1].replies.push(replyToAdd);
    } else {
        newCollectedBottles[index].replies.push(replyToAdd);
    }
    
    setCollectedBottles(newCollectedBottles);
}



const addSentBottleReply = (index, replyValue) => {
    const newSentBottles = [...sentBottles];
    
    //construct reply to add
    const replyToAdd = constructYourObj(replyValue);
    
    if(index === -1) {
        newSentBottles[newSentBottles.length-1].replies.push(replyToAdd);
    } else {
        newSentBottles[index].replies.push(replyToAdd);
    }
    
    setSentBottles(newSentBottles);
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
        const newCollectedBottles = [...collectedBottles];
        newCollectedBottles.splice(index, 1);
        setCollectedBottles(newCollectedBottles);
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
}

const setModalToSend = () => {
    setDriftBotModalState(DriftBottleStates.SEND);
    setShowDriftBotModal(true);
}


const setModalToCollect = () => {
    collectBottle();
    setDriftBotModalState(DriftBottleStates.COLLECT);
    setCollectBottleInfo(exampleCollectedBottle);
    setShowDriftBotModal(true);
}




const handleImageUpload = (url, file) => {
    setPics(url);
    const imageFileInfo = {
        imageFile: file,
        imageFileName: file.name,
    }
    setImageFileInfo(imageFileInfo);
    
}


const setModalToMy = () => {
    setDriftBotModalState(DriftBottleStates.MY_BOTTLES);
    setShowDriftBotModal(true);
}
            return (
                
                 
                <div id="driftBotOuter">
                
                {showDriftBotModal ?
                <DriftBottleModal  videos={videos} setVideos={setVideos} pics={pics} setPics={handleImageUpload} audioData={audioData} setAudioData={setAudioData} addReply={addReply} deleteBottle={deleteBottle} addCollectedBottleReply={addCollectedBottleReply} addSentBottle={addSentBottle} collectedBottles={collectedBottles} sentBottles={sentBottles} collectBottleInfo={collectBottleInfo} state={driftBotModalState} closeModal={closeModal} /> : null}
                
                    <div id="driftBotNav">
                    <button onClick = {setModalToSend}> Send </button>
                    <button onClick = {setModalToCollect}> Collect </button>
                    <button onClick = {setModalToMy}> My Bottles </button>
                    </div>
                </div>
            );
 
 
}

export default DriftBottle;
