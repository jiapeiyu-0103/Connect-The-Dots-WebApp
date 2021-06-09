import { useState } from 'react';
import DriftBottleModal from './DriftBottleModal';
import './DriftBottle.css';
import * as DriftBottleStates from '../../../constants/DriftBottleStates';
function DriftBottle() {
const [showDriftBotModal, setShowDriftBotModal] = useState(false);
const [driftBotModalState, setDriftBotModalState] = useState(null);
const [collectBottleInfo, setCollectBottleInfo] = useState(null);

const exampleBottleInfo = {
    name: 'Stranger',
    location: 'Somewhere',
    content: 'Hi, wish you happiness wherever you are!',
    imageSrc: null,
}

const yourName = "You"
const yourLocation = "Here"

const sentBottles= [
    {
        name: yourName,
        location: yourLocation,
        imageSrc: null,
        content: "I love dogs!",
        replies: [
            {
                name: 'Stranger',
                location: 'Somewhere',
                content: 'I love dogs too!',
                imageSrc: null
            },
            {
                name: 'Stranger2',
                location: 'Someplace',
                content: 'Cats > Dogs',
                imageSrc: null
            }
            
        ]
    },
    
        {
            
        name: yourName,
        location: yourLocation,
        imageSrc: null,
        content: "I love cats!",
        replies: [
            {
                name: 'Stranger',
                location: 'Somewhere',
                content: 'I love cats too!',
                imageSrc: null
            },
            {
                name: 'Stranger2',
                location: 'Someplace',
                content: 'Dogs > Cats',
                imageSrc: null
            }
            
        ]
    },
    
    
];
    
    
    
const collectedBottles = [
    
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
            }
            
            
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
]



const closeModal = () => {
    setShowDriftBotModal(false);
}

const setModalToSend = () => {
    setDriftBotModalState(DriftBottleStates.SEND);
    setShowDriftBotModal(true);
}


const setModalToCollect = () => {
    setDriftBotModalState(DriftBottleStates.COLLECT);
    setCollectBottleInfo(exampleBottleInfo);
    setShowDriftBotModal(true);
}


const setModalToMy = () => {
    setDriftBotModalState(DriftBottleStates.MY_BOTTLES);
    setShowDriftBotModal(true);
}
            return (
                
                 
                <div id="driftBotOuter">
                
                {showDriftBotModal ?
                <DriftBottleModal collectedBottles={collectedBottles} sentBottles={sentBottles} collectBottleInfo={collectBottleInfo} state={driftBotModalState} closeModal={closeModal} /> : null}
                
                    <div id="driftBotNav">
                    <button onClick = {setModalToSend}> Send </button>
                    <button onClick = {setModalToCollect}> Collect </button>
                    <button onClick = {setModalToMy}> My Bottles </button>
                    </div>
                </div>
            );
 
 
}

export default DriftBottle;
