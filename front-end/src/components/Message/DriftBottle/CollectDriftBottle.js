import PropTypes from 'prop-types';
import defaultUserImage from '../img/Default_User_Logo.png';
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
                
                        <img width="50px" height="50px" src={props.collectBottleInfo.imageSrc || defaultUserImage} id="collectUserInfoImage" />
                
                        <div id="collectUserInfoDiv">
                            <p>{`NAME: ${props.collectBottleInfo.name}`}</p>
                            <p>{`FROM: ${props.collectBottleInfo.location}`}</p>
                        </div>

                    </div>

                    <div className="collectUserInfo">
                        <p>{props.collectBottleInfo.content}</p>
                    </div>

                    <div className="collectUserInfo" id="collectReplyTab">
                    
                        <input type="text" placeholder="Type your reply..." id="collectReplyField" />
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
