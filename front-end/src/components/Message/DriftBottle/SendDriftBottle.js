import PropTypes from 'prop-types';
import './SendDriftBottle.css'
import TextField from '@material-ui/core/TextField';
import MediaUpload from '../MediaUpload';
function SendDriftBottle(props) {
// Event handler of user's throwing bottle into the sea event.
const handleSend = (e) => {
    if (document.getElementById("sendBottleTextField").value || props.videos || props.audioData || props.pics) {
         props.addSentBottle(e);
    }
   
    props.closeModal();
}
            return (
                <div id="sendBottleForm" className="sendBottleForm">                  
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

                    <MediaUpload setAudioData={props.setAudioData} setPics ={props.setPics} setVideos={props.setVideos} />

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
    audioData: PropTypes.string,
    setAudioData: PropTypes.func,
    
};

export default SendDriftBottle;
