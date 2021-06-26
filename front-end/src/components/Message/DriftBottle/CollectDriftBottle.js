import PropTypes from 'prop-types';
import defaultUserImage from '../img/Default_User_Logo.png';
import './CollectDriftBottle.css'
import TextField from '@material-ui/core/TextField';

function CollectDriftBottle(props) {
const handleReply = () => {
    //Do reply works
    const replyValue = document.getElementById("collectReplyField").value;
    if (replyValue) {
        props.addCollectedBottleReply(-1, replyValue);
    }
    
    props.closeModal();
  
    
}
            return (
                 <div id="collectBottleForm"> 
                    <div id="collectUserAccount" className="collectUserInfo">
                
                        <img alt="stuff" width="60vw" max-height="60vh" height="auto" src={props.collectBottleInfo.imageSrc || defaultUserImage} id="collectUserInfoImage" />
                
                        <div id="collectUserInfoDiv">
                            <p>{`NAME: ${props.collectBottleInfo.name}`}</p>
                            <p>{`FROM: ${props.collectBottleInfo.location}`}</p>
                        </div>

                    </div>

                    <div className="collectUserMsg">
                        <p>{props.collectBottleInfo.content}</p>
                    </div>

                    <div className="collectReply" id="collectReplyTab">
                    
                      { /* <textarea placeholder="Type your reply..." id="collectReplyField" rows="8"></textarea>*/}
                        
                        
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
