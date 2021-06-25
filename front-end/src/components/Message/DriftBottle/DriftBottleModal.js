import PropTypes from 'prop-types';
import DriftBottleModalMainView from './DriftBottleModalMainView';
function DriftBottleModal(props) {

            return (
                

                <div className="driftBotModal"> 
                        
                <span onClick={props.closeModal} className="closeModalBtn">&times;</span>
                
                <div className="modalContent">
                
                <DriftBottleModalMainView addReply={props.addReply} deleteBottle={props.deleteBottle} addCollectedBottleReply={props.addCollectedBottleReply} addSentBottle={props.addSentBottle} collectedBottles={props.collectedBottles}
sentBottles={props.sentBottles} collectBottleInfo={props.collectBottleInfo} closeModal={props.closeModal} state={props.state} />
                
                </div>
    
    
                </div>

            );
 

 
}

DriftBottleModal.propTypes = {
    closeModal: PropTypes.func,
    state: PropTypes.string,
    collectBottleInfo: PropTypes.object,
    collectedBottles: PropTypes.array,
    sentBottles: PropTypes.array,
    addSentBottle: PropTypes.func,
    addCollectedBottleReply: PropTypes.func,
    deleteBottle: PropTypes.func,
    addReply: PropTypes.func,
}


export default DriftBottleModal;
