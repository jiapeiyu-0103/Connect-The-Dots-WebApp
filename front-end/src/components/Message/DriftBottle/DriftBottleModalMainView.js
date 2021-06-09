import PropTypes from 'prop-types';
import SendDriftBottle from './SendDriftBottle';
import CollectDriftBottle from './CollectDriftBottle';
import MyDriftBottle from './MyDriftBottle';
import * as DriftBottleStates from '../../../constants/DriftBottleStates';
function DriftBottleModalMainView(props) {
    
    switch (props.state) {
        case DriftBottleStates.MY_BOTTLES:
            return  <MyDriftBottle addReply={props.addReply} deleteBottle={props.deleteBottle} sentBottles={props.sentBottles} collectedBottles={props.collectedBottles} closeModal={props.closeModal} />
        case DriftBottleStates.COLLECT:
            return  <CollectDriftBottle addCollectedBottleReply={props.addCollectedBottleReply} collectBottleInfo={props.collectBottleInfo} closeModal={props.closeModal} />
        default:
            return <SendDriftBottle addSentBottle={props.addSentBottle} closeModal={props.closeModal} />
    }
 

 
}

DriftBottleModalMainView.propTypes = {
    state: PropTypes.string,
    closeModal:PropTypes.func,
    collectBottleInfo:PropTypes.object,
    collectedBottles: PropTypes.array,
    sentBottles: PropTypes.array,
    addSentBottle: PropTypes.func,
    addCollectedBottleReply: PropTypes.func,
    deleteBottle: PropTypes.func,
    addReply: PropTypes.func,
}


export default DriftBottleModalMainView;
