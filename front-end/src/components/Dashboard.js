import PropTypes from "prop-types";
import * as States from '../constants/States';
import DashboardNavBar from './DashboardNavBar';
function Dashboard({setState, curUser}) {    
        const setStateToLoginForm = ()=>{
            setState(States.LOGIN_PAGE);
        }
        return (
           <div>
                <DashboardNavBar setStateToLoginForm={setStateToLoginForm} curUser={curUser} /> 
            </div>
        );

 
}
Dashboard.propTypes = {
    setState: PropTypes.func,
}

export default Dashboard;
