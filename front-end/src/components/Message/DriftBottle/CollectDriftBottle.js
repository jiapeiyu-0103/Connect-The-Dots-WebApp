import PropTypes from 'prop-types';
import defaultUserImage from '../img/Default_User_Logo.png';
import './CollectDriftBottle.css'
import TextField from '@material-ui/core/TextField';
import {checkImage} from '../../../constants/Helpers';

function CollectDriftBottle(props) {
// Event handler for adding replies for collected bottles
const handleReply = () => {
    // Add collected bottle reply with a -1 index to indicate that we are adding to the newest bottle collected.
    const replyValue = document.getElementById("collectReplyField").value;
    if (replyValue) {
        props.addCollectedBottleReply(-1, replyValue);
    }
    
    props.closeModal();
  
    
}
            return (
                 <div id="collectBottleForm"> 
                    <div id="collectUserAccount" className="collectUserInfo">
                
                        <img alt="stuff" width="60vw" max-height="60vh" height="auto" src={checkImage(props.collectBottleInfo.imageSrc) ? props.collectBottleInfo.imageSrc : defaultUserImage} id="collectUserInfoImage" />
                
                        <div id="collectUserInfoDiv">
                            <p>{`NAME: ${props.collectBottleInfo.name}`}</p>
                        </div>

                    </div>

                    <div className="collectUserMsg">
                        <p>{props.collectBottleInfo.content}</p>
                    </div>

                    <div className="collectReply" id="collectReplyTab">
                                           
                    <TextField
                            variant='filled'
                            id="collectReplyField" 
                            color='primary'
                            label='Type your reply...'
                            multiline
                            style={{
                                'width': '100%',
                            }}
                            />
                    </div>
                    <button onClick={handleReply}>SEND</button>
                </div>
            );
 
 
}
CollectDriftBottle.propTypes = {
    closeModal:PropTypes.func,
    collectBottleInfo: PropTypes.object,
    addCollectedBottleReply: PropTypes.func,
}

export default CollectDriftBottle;
