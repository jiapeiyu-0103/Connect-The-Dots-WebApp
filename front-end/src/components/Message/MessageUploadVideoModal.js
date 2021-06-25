import React from 'react';
import './MessageUploadModal.css';


function MessageUploadVideoModal(props){

    const showModal = props.show ? "modal display-block" : "modal display-none";
    
    return (
      <div id="messageVideoModal" className={showModal}>
          <button onClick={props.handleClose} className="modal-button">&times;</button>
          
          <div className="modal-content">
              
                   <h2> Record what you saw!</h2>
                     <div className="imges-container" >
                        <video width="400" controls src={props.url}/>  
                    </div>
                    
                    <div className="pics-upload" >
                     <input type="file" accept="video/*" multiple = "true" onChange={(e) => props.setState(URL.createObjectURL(e.target.files[0]))} /> 
                    </div>
                    
          </div>          
        </div>
      );
}

export default MessageUploadVideoModal;