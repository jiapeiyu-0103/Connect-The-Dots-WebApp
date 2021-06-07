import PropTypes from 'prop-types';
function SendDriftBottle(props) {
const handleSend = () => {
    //Do send works
    props.closeModal();
}
            return (
                <div id="sendBottleForm"> 
                    <textarea id="sendBottleTextField" />
                    
                    <button onClick={handleSend}>Throw into the sea</button>
                </div>
            );
 
 
}

SendDriftBottle.propTypes = {
    closeModal:PropTypes.func,
}

export default SendDriftBottle;
