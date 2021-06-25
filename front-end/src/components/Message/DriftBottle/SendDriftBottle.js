import PropTypes from 'prop-types';
import {useState, useEffect, useRef} from 'react';
import './SendDriftBottle.css'
import MessageUploadAudioModal from "../MessageUploadAudioModal"
import MessageUploadImageModal from "../MessageUploadImageModal"
import MessageUploadVideoModal from "../MessageUploadVideoModal"
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
                    <textarea placeholder="Type your message here..." id="sendBottleTextField" rows="15" />
                    
                    <button className="throw-button" onClick={(e)=>{handleSend(e);}}>Throw into the sea</button>
                    <button className="throw-button" onClick={()=>setIsAudioOpen(true)} >Add Audio</button>
                    <button className="throw-button"  onClick={()=>setIsImageOpen(true)} >Add Image</button>
                    <button className="throw-button"  onClick={()=>setIsVideoOpen(true)} >Add Video</button>
{isAudioOpen ? 
<div className="sendBottleModalOuter">
<MessageUploadAudioModal url={props.audioData} setState={props.setAudioData} show={true} handleClose={()=>setIsAudioOpen(false)}/>
</div>
: null
 }

{isImageOpen ? 
<div className="sendBottleModalOuter">
<MessageUploadImageModal url={props.pics} setState={props.setPics} show={true} handleClose={()=>setIsImageOpen(false)}/>
</div>
: null
 }


{isVideoOpen ? 
<div className="sendBottleModalOuter">
<MessageUploadVideoModal url={props.videos} setState={props.setVideos} show={true} handleClose={()=>setIsVideoOpen(false)}/>
</div>
: null
 }
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
