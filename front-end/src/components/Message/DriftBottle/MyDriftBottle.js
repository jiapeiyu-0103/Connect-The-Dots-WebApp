import PropTypes from 'prop-types';
import {useState} from 'react';
import MyDriftBottleLists from './MyDriftBottleLists';
import MyDriftBottleInfoView from './MyDriftBottleInfoView';
import {COLLECTED, SENT} from '../../../constants/BottleStates';

function MyDriftBottle(props) {
const BOTTLE_LISTS = "BOTTLE_LISTS"
const BOTTLE_INFO_VIEW = "BOTTLE_INFO_VIEW";
const [myDriftState, setMyDriftState] = useState(BOTTLE_LISTS);
const [bottle, setBottle] = useState(null);  

const setMyDriftBottleStateToLists = () => {
    setMyDriftState(BOTTLE_LISTS);
}

const setMyDriftBottleStateToInfoView = (type, index) => {
    let bottle;
    if (type === COLLECTED) {
        bottle = props.collectedBottles[index];
    } else {
        bottle = props.sentBottles[index];
    }
    bottle.index = index;
    bottle.type = type;
    setBottle(bottle);
    setMyDriftState(BOTTLE_INFO_VIEW);

}
      
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