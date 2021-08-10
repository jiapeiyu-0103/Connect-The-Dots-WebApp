import React from 'react';
import './UploadImageModal.css';
import Slider from 'infinite-react-carousel';
import { useState, useEffect} from 'react';
import useStorage from '../../../hook/useStorage';

function UploadVideoModal(props){

  const showModal = props.show ? "modal display-block" : "modal display-none";
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const { url } = useStorage(file);

  useEffect(() => {
    if (url) {
      props.setState([...props.url,url]);
    }
  }, [url]);

  const handleChange = async (e) => {
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
              
                   <h2> Record what you saw!</h2>
                     <div className="imges-container" >
                         {props.url.length !==0 && (
                         <Slider dots>
                         {props.url.map(video => (
                            <video width="400" height="250" controls src={video}/> 
                  ))}  
                        </Slider>)}   
                    </div>
                    <div className="pics-upload" >
                     <input type="file" accept="video/*" multiple = "true" onChange={handleChange} /> 
                    </div>             
          </div>          
        </div>
      );
}

export default UploadVideoModal;