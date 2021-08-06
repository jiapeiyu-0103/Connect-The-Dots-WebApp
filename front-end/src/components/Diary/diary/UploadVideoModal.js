import React from 'react';
import './UploadVideoModal.css';
import './UploadImageModal.css';

import Slider from 'infinite-react-carousel';
import { useState, useEffect} from 'react';
import useStorage from '../../../hook/useStorage';
import ReactPlayer from 'react-player'
function UploadVideoModal(props){

    const showModal = props.show ? "modal display-block" : "modal display-none";
    const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const { url } = useStorage(file);

  useEffect(() => {
    if (url) {
      props.setState([...props.url,url]);
      console.log(props.url);
    }
  }, [url]);

  const handleChange = async (e) => {
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
              
                   <h2> Record what you saw!</h2>
                     <div className="imges-container" >
                     {/* {props.url && props.url.map(data => (
                        <video width="400" controls src={data}/> 
                              ))} */}
                        
                        {/* <div className="img-grid">

                        </div> */}
                         <Slider dots>
                    {props.url.map(video => (
                    
                    <video width="400" height="250" controls src={video}/> 
                    
                    
                    
                  ))}  

                </Slider>  

                          
                    </div>
                    
                    <div className="pics-upload" >
                     <input type="file" accept="video/*" multiple = "true" onChange={handleChange} /> 
                    </div>
                    
          </div>          
        </div>
      );
}

export default UploadVideoModal;