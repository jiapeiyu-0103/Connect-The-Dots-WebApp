import React from 'react';
import { useState } from 'react';
import './UploadAudioModal.css';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'


function UploadAudioModal(props){

    const showModal = props.show ? "audio-modal display-block" : "audio-modal display-none";
    const [recordState, setRecordState]=useState(null);
    

    return (
      <div className={showModal}>
          <button onClick={props.handleClose} className="modal-button">&times;</button>
          
          <div className="modal-content">
              
                   <h2> Record what you heard!</h2>
                   <div>
                    {/* Reference from: https://www.npmjs.com/package/audio-react-recorder */}
                   <AudioReactRecorder state={recordState} onStop={(data) => props.setState(data)} backgroundColor='rgb(255,255,255)'/>
                   <audio id='audio'controls src={props.url ? props.url.url : null}></audio>
 
                   <button onClick={() => setRecordState(RecordState.START)}>Start</button>
                   <button onClick={() => setRecordState(RecordState.STOP)}>Stop</button>
                  </div>
            
  
          
          </div>          
        </div>
      );
}

export default UploadAudioModal;