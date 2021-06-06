// Reference from: https://material-ui.com/components/tabs/
import './Diary.css'
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Diary from './Diary';
import Message from './Message';
import Account from './Account';
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
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 3000,
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
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Diary" {...a11yProps(0)} />
        <Tab label="Message" {...a11yProps(1)} />
        <Tab label="Data" {...a11yProps(2)}  />
        <Tab label="Account" {...a11yProps(3)} />
        
      </Tabs>
      <TabPanel value={value} index={0}>
      <Diary/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Message/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Message/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Account/>
      </TabPanel>
      
    </div>
  );
}

DashboardNavBar.propTypes = {
    setStateToLoginForm: PropTypes.func,
    setDashboardViewToDiary: PropTypes.func, 
    setDashboardViewToMessage: PropTypes.func, 
    setDashboardViewToAccount: PropTypes.func
}

