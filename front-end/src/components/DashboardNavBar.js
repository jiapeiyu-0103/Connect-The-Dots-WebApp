import PropTypes from "prop-types";
// Reference from: https://material-ui.com/components/tabs/
import './Diary/DiaryMainView.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DiaryMainView from './Diary/DiaryMainView';
import Message from './Message/Message';
import Account from './Account/Account';
import Data from './Data/Data'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 100+'vh',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    
  },
}));

export default function DashboardNavBar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        inkBarStyle={{background: 'blue'}}
        aria-label="Vertical tabs example"
        className={classes.tabs}

      >
       
          
        <Tab label="Diary" {...a11yProps(0)} />
       
       
        <Tab label="Message" {...a11yProps(1)} />
       
        <Tab label="Data" {...a11yProps(2)}  />
        <Tab label="Account" {...a11yProps(3)} />
        <Tab label="Logout" {...a11yProps(4)} onClick = {props.setStateToLoginForm}/>
        
      </Tabs>

      <TabPanel value={value} index={0}>
      <DiaryMainView curUser={props.curUser}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Message curUser={props.curUser}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Data curUser={props.curUser}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Account curUser={props.curUser}/>
      </TabPanel>
      
    </div>
  );
}

DashboardNavBar.propTypes = {
    setStateToLoginForm: PropTypes.func,
};


