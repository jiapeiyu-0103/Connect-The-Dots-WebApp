import PropTypes from 'prop-types';
import bottleImage from '../img/bottleImage.png';

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
        <li idx={index} key={index}>
      
        <img onClick={(e) => {props.setMyDriftBottleStateToInfoView(props.sent, index)}} src={bottleImage} width="150px" height="100px" />
            
            
        <p>{`Sent bottle ${index}`}</p>

        </li>  
    );
}
  
// Collected bottles
if (!collectedBottles || collectedBottles.length === 0) {
      collectedBottlesList = <p>There's currently no bottle, please collect some!</p>
} else {

   collectedBottlesList = collectedBottles.map((bottle, index) =>    
        <li idx={index} key={index}>
      
        <img onClick={(e) => {props.setMyDriftBottleStateToInfoView(props.collected, index)}} src={bottleImage} width="150px" height="100px" />
            
            
        <p>{`Collected bottle ${index}`}</p>

        </li>  
    );
}

  return (

    <div>

    <ul id="bottleDisplay">Sent bottles: {sentBottlesList}</ul>
    <ul id="bottleDisplay">Collected bottles:{collectedBottlesList}</ul>

    </div>
  );
  

}

MyDriftBottleLists.propTypes = {
    sentBottles: PropTypes.array,
    collectedBottles: PropTypes.array,
    setMyDriftBottleStateToInfoView: PropTypes.func,
    collected: PropTypes.string,
    sent: PropTypes.string,
}

export default MyDriftBottleLists;