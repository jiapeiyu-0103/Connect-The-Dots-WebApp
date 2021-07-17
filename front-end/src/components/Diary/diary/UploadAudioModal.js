import React from 'react';
import { useState, useEffect } from 'react';
import './UploadAudioModal.css';
import useStorage from '../../../hook/useStorage';
import Slider from 'infinite-react-carousel';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import ReactAudioPlayer from 'react-audio-player';

function UploadAudioModal(props){

    const showModal = props.show ? "audio-modal display-block" : "audio-modal display-none";
    const [recordState, setRecordState]=useState(null);
    const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const { url } = useStorage(file);
    {/* Audio Reference from: https://www.npmjs.com/package/audio-react-recorder */}
   
    useEffect(() => {
      if (url) {
        props.setState([...props.url,url]);
        console.log(props.url);
      }
    }, [url]);
  
    function handleChange (e) {
      
  
      let selected = e.target.files[0];

      if (selected) {
        setFile(selected);
        
  
        console.log(selected);
        console.log(file)
        console.log(url);
        // props.setState([...props.url,url]);
        setError('');
      } else {
        setFile(null);
        // props.setState([...props.url]);
        setError('Please select an video file');
      }
    };
    return (
      <div className={showModal}>
          <button onClick={props.handleClose} className="modal-button">&times;</button>
          
          <div className="modal-content">
              
                   <h2> Record what you heard !</h2>
                   {/* <div>
                       <AudioReactRecorder state={recordState} onStop={(data) => handleStop(data)} backgroundColor='rgb(255,255,255)'/>
                       <audio id='audio'controls src={props.url ? props.url.url : null}></audio>
                       <div className="button-diary">
                           <button className="start" onClick={() => setRecordState(RecordState.START)}>Start</button>
                           <button onClick={() => setRecordState(RecordState.STOP)}>Stop</button>
                       </div>
                  </div> */}
                  <div className="imges-container" >
                  <Slider dots>
                    {props.url.map(audio => (
                    
                    <ReactAudioPlayer src={audio} controls/>   
                    
                  ))}  

                </Slider>  

                          
                    </div>
                    
                    <div className="pics-upload" >
                     <input type="file" accept="audio/*" multiple = "true" onChange={handleChange} /> 
                    </div>
            
  
          
          </div>          
        </div>
      );
}

export default UploadAudioModal;
