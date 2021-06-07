import { useState } from 'react';
import DriftBottleModal from './DriftBottleModal';
import * as DriftBottleStates from '../../../constants/DriftBottleStates';
function DriftBottle() {
const [showDriftBotModal, setShowDriftBotModal] = useState(false);
const [driftBotModalState, setDriftBotModalState] = useState(null);
const [collectBottleInfo, setCollectBottleInfo] = useState(null);

const exampleBottleInfo = {
    name: 'Stranger',
    location: 'Somewhere',
    content: 'Some content as example here. From Stranger'
}
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
                <DriftBottleModal collectBottleInfo={collectBottleInfo} state={driftBotModalState} closeModal={closeModal} /> : null}
                
                    <div id="driftBotNav">
                    <button onClick = {setModalToSend}> Send </button>
                    <button onClick = {setModalToCollect}> Collect </button>
                    <button onClick = {setModalToMy}> My Bottles </button>
                    </div>
                </div>
            );
 
 
}

export default DriftBottle;
