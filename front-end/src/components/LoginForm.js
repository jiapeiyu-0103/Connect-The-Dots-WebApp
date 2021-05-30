import PropTypes from "prop-types";
import {DASHBOARD} from '../constants/States';
function LoginForm({setState}) {
        const setStateToDashboard = () => {
            setState(DASHBOARD);
        }
        return (
           <div>
                <p>This is the login form.</p>
    
                <button onClick = {setStateToDashboard}> Login </button>
            </div>
        );

 
}

LoginForm.propTypes = {
    setState: PropTypes.func,
}

export default LoginForm;


