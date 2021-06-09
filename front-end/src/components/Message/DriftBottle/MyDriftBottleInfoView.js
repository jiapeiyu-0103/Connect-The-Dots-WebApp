import PropTypes from 'prop-types';
import CollectDriftBottle from './CollectDriftBottle';

function MyDriftBottleInfoView(props) {

  return (<div id="driftBottleInfoView">
      
      
      <span id="exitBottleInfoView" onClick={props.setMyDriftBottleStateToLists}> &#8592; </span>

      <CollectDriftBottle isNormal={false} collectBottleInfo={props.bottle} />
    
    </div>);

}

MyDriftBottleInfoView.propTypes = {
    setMyDriftBottleStateToLists:PropTypes.func,
    bottle: PropTypes.object,
 
}

export default MyDriftBottleInfoView;