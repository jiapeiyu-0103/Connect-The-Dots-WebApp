import PropTypes from 'prop-types';
import Thread from '../Thread/Thread';

function MyDriftBottleInfoView(props) {

  return (<div id="driftBottleInfoView">
      
      
      <span id="exitBottleInfoView" onClick={props.setMyDriftBottleStateToLists}> &#8592; </span>

      <Thread thread={props.bottle} />
    
    </div>);

}

MyDriftBottleInfoView.propTypes = {
    setMyDriftBottleStateToLists:PropTypes.func,
    bottle: PropTypes.object,
 
}

export default MyDriftBottleInfoView;