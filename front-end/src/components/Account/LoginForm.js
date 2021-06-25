import PropTypes from "prop-types";
import {DASHBOARD} from '../../constants/States';
import RegisterForm from './RegisterForm'
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
            <div className="body-style">
                {/* <h1 className="main-title">Connect the Dots</h1> */}
                <div className="input-container">
                    <div className="name-container">
                        <h2>Welcome!</h2>
                        <label className="label">Username:</label>
                        <input type='text' placeholder='please enter your user name' value={name} onChange={(e) => {setName(e.target.value)}}/><br/>
                    </div>
                    <div className="password-container">
                        <label className="label">Password: </label>
                        <input type='password' placeholder='please enter your password' value={password} onChange={(e) => {setPassword(e.target.value)}}/><br/>
                    </div>
                    <button className="sign-in" onClick = {onLogin}> Sign in </button>
                    <button className="sign-up" onClick = {() => {setHideRgstForm(false)}}> Sign up </button>
                </div>
                <div className="logo-name">
                <h1>Connect</h1>
                <h2> the</h2>
                <h1> Dots</h1>
                </div>
                <div className="logo">
                {/* <img src="https://i.postimg.cc/3rmkRPmJ/Dope-Daydreamer.gif" alt="web Logo" className="responsive"></img> */}
                <img src="https://i.postimg.cc/0jMzxyD9/Were-Falling-To-Pieces.gif" alt="web Logo" className="responsive"></img>
            </div>
            </div>

        )
    } else {
        return(
            <div className="body-style">
                <RegisterForm HideRegisterForm={setHideRgstForm}/>
            </div>
        )
    }
 
}

LoginForm.propTypes = {
    setState: PropTypes.func,
}

export default LoginForm;


