import PropTypes from 'prop-types';
function SendDriftBottle(props) {
const handleSend = (e) => {
    if (document.getElementById("sendBottleTextField").value) {
         props.addSentBottle(e);
    }
   
    props.closeModal();
}
            return (
                <div id="sendBottleForm"> 
                    <textarea placeholder="Type your message here..." id="sendBottleTextField" />
                    
                    <button onClick={(e)=>{handleSend(e);}}>Throw into the sea</button>
                </div>
            );
 
 
}

SendDriftBottle.propTypes = {
    closeModal:PropTypes.func,
    addSentBottle: PropTypes.func,
}

export default SendDriftBottle;
