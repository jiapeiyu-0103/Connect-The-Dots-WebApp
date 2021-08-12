import React from 'react';
import { useState, useEffect } from 'react';
import './UploadAudioModal.css';
import useStorage from '../../../hook/useStorage';
import Slider from 'infinite-react-carousel';
import ReactAudioPlayer from 'react-audio-player';

function UploadAudioModal(props){

  const showModal = props.show ? "audio-modal display-block" : "audio-modal display-none";
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const { url } = useStorage(file);
  
  useEffect(() => {
    if (url) {
      props.setState([...props.url,url]);
    }
  }, [url]);
  
  function handleChange (e) {
      let selected = e.target.files[0];
      if (selected) {
        setFile(selected);
        setError('');
      } else {
        setFile(null);
        setError('Please select an video file');
      }
  };

  return (
      <div className={showModal}>
          <button onClick={props.handleClose} className="modal-button">&times;</button>
          
          <div className="modal-content">
              <h2> Record what you heard !</h2>
              <div className="imges-container" >
                  {props.url.length !==0 && (
                    // use carousel to display the upload media files
                  <Slider dots>
                    {props.url.map(audio => (
                    
                    <ReactAudioPlayer src={audio} controls/>   
                    
                  ))} 
                </Slider>)}         
              </div>    
              <div className="pics-upload" >
                <input type="file" accept="audio/*" multiple = "true" onChange={handleChange} /> 
              </div>
          </div>          
        </div>
      );
}

export default UploadAudioModal;
