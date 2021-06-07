import PropTypes from 'prop-types';
import DriftBottleModalMainView from './DriftBottleModalMainView';
function DriftBottleModal(props) {

            return (
                

                <div className="driftBotModal"> 
                        
                
                <div className="modalContent">
                
                <DriftBottleModalMainView collectBottleInfo={props.collectBottleInfo} closeModal={props.closeModal} state={props.state} />
                
                </div>
    
    
                </div>

            );
 

 
}

DriftBottleModal.propTypes = {
    closeModal: PropTypes.func,
    state: PropTypes.string,
    collectBottleInfo: PropTypes.object,
}


export default DriftBottleModal;
