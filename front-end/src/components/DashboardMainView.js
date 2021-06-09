import PropTypes from "prop-types";
import Diary from './Diary';
import Message from './Message';
import Account from './Account';
import Data from './Data'
import * as DashboardStates from '../constants/DashboardStates';
function DashboardMainView({dashboardState, curUser}) {
    switch(dashboardState) {
        case DashboardStates.ACCOUNT:
            return (
                <Account curUser={curUser}/>
            );
        case DashboardStates.MESSAGE:
            return (
                <Message/>
            );
        case DashboardStates.DATA:
            return (
                <Data curUser={curUser}/>
            );        
        default:
            return (
                <Diary/>
            );
    }
 
}
DashboardMainView.propTypes = {
    dashboardState: PropTypes.string,
}

export default DashboardMainView;
