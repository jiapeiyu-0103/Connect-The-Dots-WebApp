import PropTypes from 'prop-types';
import Thread from '../Thread/Thread';

function MyDriftBottleInfoView(props) {
  // Function to add reply to bottles
  const addReply = (replyValue) => {
      props.addReply(props.bottle.type, props.bottle.index, replyValue);
  }
  return (<div id="driftBottleInfoView">
      
      
      <span id="exitBottleInfoView" onClick={props.setMyDriftBottleStateToLists}> &#8592; </span>

      <Thread handleReplySubmit={addReply} thread={props.bottle} />
    
    </div>);

}

MyDriftBottleInfoView.propTypes = {
    setMyDriftBottleStateToLists:PropTypes.func,
    bottle: PropTypes.object,
    addReply: PropTypes.func,
 
}

export default MyDriftBottleInfoView;