import React from 'react';
import './UploadImageModal.css';
import Slider from 'infinite-react-carousel';
import { useState, useEffect} from 'react';
import useStorage from '../../../hook/useStorage';

function UploadImageModal(props){

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
      setError('Please select an image file (png or jpg)');
    }
  };

    return (
      <div className={showModal}>
          <button onClick={props.handleClose} className="modal-button">&times;</button>
          
          <div className="modal-content">
              
                   <h2> Record what you saw!</h2>
                     <div className="imges-container" >
                        {props.url.length !==0 && (
                          // use carousel to display the upload media files
                        <Slider dots>
                          {props.url.map(ig => (
                            <img src={ig} alt="diary-image"></img>
                  ))}  
                        </Slider>)}   
                    </div>
                    <div className="pics-upload" >
                     <input type="file" accept="image/*" multiple ={true} onChange={handleChange} /> 
                    </div>
          </div>          
        </div>
      );
}

export default UploadImageModal;