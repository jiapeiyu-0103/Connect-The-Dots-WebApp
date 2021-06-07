import PropTypes from 'prop-types';
import defaultUserImage from '../img/Default_User_Logo.png';
function CollectDriftBottle(props) {
const handleReply = () => {
    //Do reply works
    props.closeModal();
}
            return (
                 <div id="collectBottleForm"> 
                    <div className="collectUserInfo">
                        <img width="100px" height="100px" src={props.collectBottleInfo.imageSrc || defaultUserImage} />
                        <div id="collectUserInfoDiv">
                            <p>{`NAME: ${props.collectBottleInfo.name}`}</p>
                            <p>{`FROM: ${props.collectBottleInfo.location}`}</p>
                        </div>
                    </div>

                    <div className="collectUserInfo">
                        <p>{props.collectBottleInfo.content}</p>
                    </div>

                    <div className="collectUserInfo" id="collectReplyTab">
                        <h2> REPLY: </h2>
                        <textarea id="collectReplyField" />
                    </div>
                    <button onClick={handleReply}>SEND</button>
                </div>
            );
 
 
}
CollectDriftBottle.propTypes = {
    closeModal:PropTypes.func,
    collectBottleInfo: PropTypes.object,
}

export default CollectDriftBottle;
