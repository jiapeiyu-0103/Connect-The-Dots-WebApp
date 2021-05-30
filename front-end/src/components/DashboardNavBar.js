import PropTypes from "prop-types";
function DashboardNavBar(props) {

            return (
                <div>
                 <button onClick = {props.setDashboardViewToDiary}> Diary </button>
                 <button onClick = {props.setDashboardViewToMessage}> Message </button>
                <button onClick = {props.setDashboardViewToAccount}> Account </button>
                <button onClick = {props.setStateToLoginForm}> Logout </button>
            </div>
            );
 
 
}
DashboardNavBar.propTypes = {
    setStateToLoginForm: PropTypes.func,
    setDashboardViewToDiary: PropTypes.func, 
    setDashboardViewToMessage: PropTypes.func, 
    setDashboardViewToAccount: PropTypes.func
}

export default DashboardNavBar;
