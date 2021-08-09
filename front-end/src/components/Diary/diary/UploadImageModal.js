import React from 'react';
import './UploadImageModal.css';
import Slider from 'infinite-react-carousel';
import { useState, useEffect} from 'react';
import useStorage from '../../../hook/useStorage';

function UploadImageModal(props){

  const showModal = props.show ? "modal display-block" : "modal display-none";
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [imgurl, setImgUrl] = useState(null);
  const types = ['image/png', 'image/jpeg','image/jpg','image/gif'];
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
      setError('Please select an image file (png or jpg)');
    }
  };

    return (
      <div className={showModal}>
          <button onClick={props.handleClose} className="modal-button">&times;</button>
          
          <div className="modal-content">
              
                   <h2> Record what you saw!</h2>
                  
                     <div className="imges-container" >
                        {/* <img  src={props.url} alt=""/>     */}
                        <Slider dots>
                        
                    {props.url.map(ig => (
                    
                    <img src={ig} alt="diary-image"></img>
                    
                    
                  ))}  

                </Slider>   
                    </div>
                    
                    <div className="pics-upload" >
                     <input type="file" accept="image/*" multiple ={true} onChange={handleChange} /> 
                     {/* onChange={(e) => {props.setState([...props.url,URL.createObjectURL(e.target.files[0])]);}} */}
                    </div>
            
  
          
          </div>          
        </div>
      );
}

export default UploadImageModal;