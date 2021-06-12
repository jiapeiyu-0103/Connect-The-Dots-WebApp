import React from 'react';
import './UploadImageModal.css';


function UploadImageModal(props){

    const showModal = props.show ? "modal display-block" : "modal display-none";
    

    return (
      <div className={showModal}>
          <button onClick={props.handleClose} className="modal-button">&times;</button>
          
          <div className="modal-content">
              
                   <h2> Record what you saw!</h2>
                     <div className="imges-container" >
                        <img  src={props.url} alt=""/>    
                    </div>
                    
                    <div className="pics-upload" >
                     <input type="file" accept="image/*" multiple = "true" onChange={(e) => props.setState(URL.createObjectURL(e.target.files[0]))} /> 
                    </div>
            
  
          
          </div>          
        </div>
      );
}

export default UploadImageModal;