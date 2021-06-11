import PropTypes from "prop-types";
import DriftBottle from './DriftBottle/DriftBottle';
import TreeHole from './TreeHole/TreeHole';
import Chat from './Chat/Chat';
import * as MessageStates from '../../constants/MessageStates';
import {makeStyles} from '@material-ui/core/styles';
import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Diary from "../Diary/diary/Diary";
import './MessageMainView.css';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

// function MessageMainView(props) {
//   switch(props.state) {
//       case MessageStates.CHAT:
//           return (
//               <Chat/>
//           );
//       case MessageStates.TREE_HOLE:
//           return (
//               <TreeHole/>
//           );
//       default:
//         return (
//             <DriftBottle />
//         );
//   }
//
// }

function MessageMainView() {
    const classes = useStyles();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <TabContext value={value} >
                <AppBar position="relative"  >
                    <TabList onChange={handleChange} aria-label="simple tabs example" className="tabwidth">
                        <Tab label="Drift Bottle" value="1"  />
                        <Tab label="Tree Hole" value="2" />
                        <Tab label="Chat" value="3" />
                    </TabList>
                </AppBar>
                {/* insert component into the tabpanel */}
                <TabPanel value="1"  ><DriftBottle/></TabPanel>
                <TabPanel value="2"><TreeHole/></TabPanel>
                <TabPanel value="3"><Chat/></TabPanel>
            </TabContext>
        </div>
    )
}
            
// MessageMainView.propTypes = {
//     state: PropTypes.string,
// }

export default MessageMainView;
