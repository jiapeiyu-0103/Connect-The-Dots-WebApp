import './DiaryMainView.css'
// function Diary() {

//     return (
//         // <div >
//         //   {/* <ul>
//         //     <li><a className="active" href="/diary">Diary</a></li>
//         //     <li><a href="/message">Message</a></li>
//         //     <li><a href="#contact">Data</a></li>
//         //     <li><a href="#about">Account</a></li>
//         //   </ul> */}
//         //   <div className="topnav">
//         //         <a className="active" href="/diary">Diary</a>
//         //         <a href="/diary">Search</a>
//         //     </div> 
//         // </div>
        
//         <div> This is the Diary page </div>
       
//       );
 
// }
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Diary from './diary/Diary';
import Search from './search/Search';
import Favorite from './favorite/FavoriteDiary';
import Manage from './manage/Manage';
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function DiaryMainView(props) {
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
            <Tab label="Diary" value="1"  />
            <Tab label="Search" value="2" />
            <Tab label="Favorite" value="3" />
            {/* <Tab label="Manage" value="4" /> */}
          </TabList>
        </AppBar>
        {/* insert component into the tabpanel */}
        <TabPanel value="1"><Diary curUser={props.curUser}/></TabPanel>
        <TabPanel value="2"><Search curUser={props.curUser}/></TabPanel>
        <TabPanel value="3"><Favorite curUser={props.curUser}/></TabPanel>
        {/* <TabPanel value="4"><Manage curUser={props.curUser}/></TabPanel> */}
      </TabContext>
    </div>
  );
}

 

