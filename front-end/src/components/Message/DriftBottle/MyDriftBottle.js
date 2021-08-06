import PropTypes from 'prop-types';
import {useState} from 'react';
import MyDriftBottleLists from './MyDriftBottleLists';
import MyDriftBottleInfoView from './MyDriftBottleInfoView';
import {COLLECTED, SENT} from '../../../constants/BottleStates';

function MyDriftBottle(props) {
// Hooks and constants for MyDriftBottle state control
const BOTTLE_LISTS = "BOTTLE_LISTS"
const BOTTLE_INFO_VIEW = "BOTTLE_INFO_VIEW";
const [myDriftState, setMyDriftState] = useState(BOTTLE_LISTS);
const [bottle, setBottle] = useState(null);  

// Set state to show bottle list
const setMyDriftBottleStateToLists = () => {
    setMyDriftState(BOTTLE_LISTS);
}

// Set state to show infor viewing
const setMyDriftBottleStateToInfoView = (type, index) => {
    let bottle;
    // See if it is a collected or a sent bottles and add to corresponding array
    if (type === COLLECTED) {
        bottle = props.collectedBottles[index];
    } else {
        bottle = props.sentBottles[index];
    }
    
    // Make information on bottle's index in the array and type (collected or sent) avaialble for retrieval
    bottle.index = index;
    bottle.type = type;
    // Set bottle to show
    setBottle(bottle);
    // Set state to showing bottle info
    setMyDriftState(BOTTLE_INFO_VIEW);
}

// Switch on control state
switch (myDriftState) {
    case BOTTLE_INFO_VIEW:
        return <MyDriftBottleInfoView addReply={props.addReply}  bottle={bottle} setMyDriftBottleStateToLists={setMyDriftBottleStateToLists} />
    default:
        return <MyDriftBottleLists deleteBottle={props.deleteBottle} collected={COLLECTED} sent={SENT} setMyDriftBottleStateToInfoView={setMyDriftBottleStateToInfoView} sentBottles={props.sentBottles} collectedBottles={props.collectedBottles} />
}
  

}

MyDriftBottle.propTypes = {
    closeModal:PropTypes.func,
    sentBottles: PropTypes.array,
    collectedBottles: PropTypes.array,
    deleteBottle: PropTypes.func,
    addReply: PropTypes.func,
}

export default MyDriftBottle;