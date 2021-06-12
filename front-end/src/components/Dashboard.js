import PropTypes from "prop-types";
import * as States from '../constants/States';
import DashboardNavBar from './DashboardNavBar';
import DashboardMainView from './DashboardMainView'
import * as DashboardStates from '../constants/DashboardStates';
import { useState } from 'react';
function Dashboard({setState, curUser}) {
        const [dashboardState, setDashboardState] = useState(DashboardStates.DIARY);
    
        const setStateToLoginForm = ()=>{
            setState(States.LOGIN_PAGE);
        }
        
        const setDashboardViewToDiary = ()=>{
            setDashboardState(DashboardStates.DIARY);
        }
        
        const setDashboardViewToMessage = ()=>{
            setDashboardState(DashboardStates.MESSAGE);
        }
        
        const setDashboardViewToAccount = ()=>{
            setDashboardState(DashboardStates.ACCOUNT);
        }
        
        const setDashboardViewToData = ()=>{
            setDashboardState(DashboardStates.DATA);
        }

        return (
           <div>
                {/* <p>This is the dashboard nav bar with the following buttons: </p> */}
            
                <DashboardNavBar 
                    setDashboardViewToDiary={setDashboardViewToDiary} 
                    setDashboardViewToMessage={setDashboardViewToMessage} 
                    setDashboardViewToAccount={setDashboardViewToAccount}
                    setDashboardViewToData={setDashboardViewToData} 
                    setStateToLoginForm={setStateToLoginForm}
                    curUser={curUser} 
                />
            
                {/* <br/>
                <br/>
                <br/> */}
                {/* <DashboardMainView dashboardState={dashboardState} /> */}

                    
                
            </div>
        );

 
}
Dashboard.propTypes = {
    setState: PropTypes.func,
}

export default Dashboard;
