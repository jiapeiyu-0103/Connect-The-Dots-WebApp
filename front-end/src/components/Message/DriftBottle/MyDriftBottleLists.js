import PropTypes from 'prop-types';
import bottleImage from '../img/bottleImage.png';
import './MyDriftBottleLists.css';

function MyDriftBottleLists(props) {

const sentBottles = props.sentBottles;
const collectedBottles = props.collectedBottles;
    
//const sentBottles = [];
//const collectedBottles = [];

let sentBottlesList;
let collectedBottlesList;
// sent bottles
if (!sentBottles || sentBottles.length === 0) {
      sentBottlesList = <p>There's currently no bottle, please throw some into the sea!</p>
} else {
    
     sentBottlesList = sentBottles.map((bottle, index) =>    
        <li  className="bottleListElem" key={index}>
        <span onClick={(e)=>{props.deleteBottle(props.sent, index);}}  className="bottleClose">&times;</span>
        <img alt="stuff" onClick={(e) => {props.setMyDriftBottleStateToInfoView(props.sent, index)}} src={bottleImage} width="150px" height="100px" />
            
            
        <p><b>{`${bottle.name}:`}</b> {`${bottle.content}`}</p>

        </li>  
    );
}
  
// Collected bottles
if (!collectedBottles || collectedBottles.length === 0) {
      collectedBottlesList = <p>There's currently no bottle, please collect some!</p>
} else {

   collectedBottlesList = collectedBottles.map((bottle, index) =>    
        <li className="bottleListElem" key={index}>
         <span onClick={(e)=>{props.deleteBottle(props.collected, index);}} className="bottleClose">&times;</span>
        <img alt="stuff" onClick={(e) => {props.setMyDriftBottleStateToInfoView(props.collected, index)}} src={bottleImage} width="150px" height="100px" />
            
            
        <p><b>{`${bottle.name}:`}</b> {`${bottle.content}`}</p>

        </li>  
    );
}

  return (

    <div className="bottleList">

    <ul id="bottleDisplay" className="bottle">Sent bottles: {sentBottlesList}</ul>
    <ul id="bottleDisplay" className="bottle">Collected bottles:{collectedBottlesList}</ul>

    </div>
  );
  

}

MyDriftBottleLists.propTypes = {
    sentBottles: PropTypes.array,
    collectedBottles: PropTypes.array,
    setMyDriftBottleStateToInfoView: PropTypes.func,
    collected: PropTypes.string,
    sent: PropTypes.string,
    deleteBottle: PropTypes.func,
}

export default MyDriftBottleLists;