import PropTypes from "prop-types";
import DriftBottle from './DriftBottle/DriftBottle';
import TreeHole from './TreeHole/TreeHole';
import Chat from './Chat';
import * as MessageStates from '../../constants/MessageStates';
function MessageMainView(props) {
  switch(props.state) {
      case MessageStates.CHAT:
          return (
              <Chat/>
          );
      case MessageStates.TREE_HOLE:
          return (
              <TreeHole/>
          );
      default:
        return (
            <DriftBottle />
        );
  }
 
}
            
MessageMainView.propTypes = {
    state: PropTypes.string,
}

export default MessageMainView;
