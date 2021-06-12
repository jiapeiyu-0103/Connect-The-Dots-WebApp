import PropTypes from 'prop-types';
import './SendDriftBottle.css'
function SendDriftBottle(props) {
const handleSend = (e) => {
    if (document.getElementById("sendBottleTextField").value) {
         props.addSentBottle(e);
    }
   
    props.closeModal();
}
            return (
                <div id="sendBottleForm" className="sendBottleForm"> 
                    <textarea placeholder="Type your message here..." id="sendBottleTextField" rows="15" />
                    
                    <button className="throw-button" onClick={(e)=>{handleSend(e);}}>Throw into the sea</button>
                </div>
            );
 
 
}

SendDriftBottle.propTypes = {
    closeModal:PropTypes.func,
    addSentBottle: PropTypes.func,
};

export default SendDriftBottle;
