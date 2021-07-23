import PropTypes from 'prop-types';
import {useState, useEffect, useRef} from 'react';
import './SendDriftBottle.css'
import TextField from '@material-ui/core/TextField';

function SendDriftBottle(props) {
    

const isMounted = useRef(false);
    
    


const [isImageOpen, setIsImageOpen] = useState(false);
const [isAudioOpen, setIsAudioOpen] = useState(false);
const [isVideoOpen, setIsVideoOpen] = useState(false);
    
      useEffect(() => {
        if (isMounted.current) {
                const messageVideoModal = document.getElementById("messageVideoModal");
            if (messageVideoModal) {
                messageVideoModal.scrollIntoView({
                    block: "end",
                    inline: "center",
                    behavior: "smooth",
                    alignToTop: false
                });

    }

        } else {
            isMounted.current = true;
        }



    }, [isVideoOpen]);
    
    
    
       useEffect(() => {
        if (isMounted.current) {
                const messageImageModal = document.getElementById("messageImageModal");
            if (messageImageModal) {
                messageImageModal.scrollIntoView({
                    block: "end",
                    inline: "center",
                    behavior: "smooth",
                    alignToTop: false
                });

    }

        } else {
            isMounted.current = true;
        }



    }, [isImageOpen]);
    
    
    useEffect(() => {
        if (isMounted.current) {
                const messageAudioModal = document.getElementById("messageAudioModal");
            if (messageAudioModal) {
                messageAudioModal.scrollIntoView({
                    block: "end",
                    inline: "center",
                    behavior: "smooth",
                    alignToTop: false
                });

    }

        } else {
            isMounted.current = true;
        }



    }, [isAudioOpen]);
    
    
const handleSend = (e) => {
    if (document.getElementById("sendBottleTextField").value || props.videos || props.audioData || props.pics) {
         props.addSentBottle(e);
    }
   
    props.closeModal();
}
            return (
                <div id="sendBottleForm" className="sendBottleForm"> 
                {/*<textarea placeholder="Type your message here..." id="sendBottleTextField" rows="15" />*/}
                 
                    <TextField
                            variant='filled'
                            id="sendBottleTextField" 
                            color='primary'
                            label='Type your message here...'
                            multiline
                            style={{
                                'height': '400px',
                            }}
                            />
                <br/><br/>
                    
                    <button className="throw-button" onClick={(e)=>{handleSend(e);}}>Throw into the sea</button>

                    <input type="file" id="driftAudio" name="driftAudio" hidden onChange = {(e)=>{props.setAudioData(URL.createObjectURL(e.target.files[0]), e.target.files[0])}} accept="audio/*" />
                        
                    <button className="throw-button" onClick={()=>{document.getElementById('driftAudio').click();}} >Add Audio</button>

                    <input type="file" id="driftImage" name="driftImage" hidden onChange = {(e)=>{props.setPics(URL.createObjectURL(e.target.files[0]), e.target.files[0])}} accept="image/*" />

                    <button className="throw-button"  onClick={()=>{document.getElementById('driftImage').click();}} >Add Image</button>

                    <input type="file" id="driftVideo" name="driftVideo" hidden onChange = {(e)=>{props.setVideos(URL.createObjectURL(e.target.files[0]), e.target.files[0])}} accept="video/*" />
                        
                        
                    <button className="throw-button"  onClick={()=>{document.getElementById('driftVideo').click();}} >Add Video</button>

                </div>
            );
 
 
}

SendDriftBottle.propTypes = {
    closeModal:PropTypes.func,
    addSentBottle: PropTypes.func,
    videos: PropTypes.string,
    setVideos: PropTypes.func,
    pics: PropTypes.string,
    setPics: PropTypes.func,
    audioData: PropTypes.object,
    setAudioData: PropTypes.func,
    
};

export default SendDriftBottle;
