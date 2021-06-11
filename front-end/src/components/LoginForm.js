import PropTypes from "prop-types";
import {DASHBOARD} from '../constants/States';
import RegisterForm from '../components/RegisterForm'
import {useState} from 'react'
import './LoginForm.css'

function LoginForm({setState, user}) {
    
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [hideRgstForm, setHideRgstForm] = useState(true)


    // match name with password, if match return true, else false;
    // require the implement of database
    const checkPswd = (name, password) => {
        return true;
    }

    const SearchUser = (name) => {
        return {
            name: 'default name',
            sex: 'Female',
            birthday: {
                year: '1992',
                month:'Feb',
                day:'2',
            },
            password: 'default password',
            unique_id: name,
            photo: 'default link',
        }
    }
    
    const onLogin = (e) => {
        e.preventDefault()

        if (checkPswd) {
            setState(DASHBOARD);
            user(SearchUser(name));
        } else {
            alert("password do not match user id.")
        }
        setPassword('');
        setName('');
    }

    if(hideRgstForm) {
        return (
            <div className="body">
                <h1 className="main-title">Connect the Dots</h1>
                <div className="input-container">
                    <div className="name-container">
                        <label className="label">User Name:</label>
                        <input type='text' placeholder='please enter your user name' value={name} onChange={(e) => {setName(e.target.value)}}/><br/>
                    </div>
                    <div className="password-container">
                        <label className="label">Password:</label>
                        <input type='password' placeholder='please enter your password' value={password} onChange={(e) => {setPassword(e.target.value)}}/><br/>
                    </div>
                    <button className="sign-in" onClick = {onLogin}> Sign in </button>
                    <button onClick = {() => {setHideRgstForm(false)}}> Sign up </button>
                </div>
            </div>

        )
    } else {
        return(
            <div className="body">
                <RegisterForm HideRegisterForm={setHideRgstForm}/>
            </div>
        )
    }
 
}

LoginForm.propTypes = {
    setState: PropTypes.func,
}

export default LoginForm;


