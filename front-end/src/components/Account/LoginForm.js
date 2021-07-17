import PropTypes from "prop-types";
import {DASHBOARD} from '../../constants/States';
import RegisterForm from './RegisterForm'
import {useState} from 'react'
import './LoginForm.css'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'

function LoginForm({setState, setUser}) {
    
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [hideRgstForm, setHideRgstForm] = useState(true)


    // match name with password, if match return true, else false;
    // require the implement of database
    const checkAccess = (username, password) => {
        axios.get(`http://localhost:3001/userApi/checkUserName/${username}`)
            .then((response) => {
                console.log(response.data)
                let user = response.data
                if (user !== "" && user.username === username && user.password === password) {
                    setState(DASHBOARD);
                    setUser({
                        username: user.username,
                        unique_id: user.userID,
                        sex: user.sex,
                        birthday: user.birthday,
                        password: user.password,
                        photo: user.photo
                    });
                } else {
                    alert("Invaild username or password")
                }
                setPassword('');
                setName('');
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    const onLogin = (e) => {
        e.preventDefault()

        checkAccess(name, password)
    }

    if(hideRgstForm) {
        return (
            <div className="body-style">
                {/* <h1 className="main-title">Connect the Dots</h1> */}
                <div className="input-container">
                    <div className="name-container">
                        <h2>Welcome!</h2>
                        {/* <label className="label">Username:</label>
                        <input type='text' placeholder='please enter your user name' value={name} onChange={(e) => {setName(e.target.value)}}/><br/> */}
                        <TextField
                            variant='outlined'
                            color='primary'
                            label='Username'
                            value={name}
                            onChange={(e) => {setName(e.target.value)}}
                            style={{
                                'width': '75%',
                            }}
                        /><br/>
                    </div>

                    <div className="password-container">
                        {/* <label className="label">Password: </label>
                        <input type='password' placeholder='please enter your password' value={password} onChange={(e) => {setPassword(e.target.value)}}/><br/> */}
                        <TextField
                            variant='outlined'
                            color='primary'
                            label='Password'
                            type='password'
                            value={password}
                            onChange={(e) => {setPassword(e.target.value)}}
                            style={{
                                'width': '75%',
                            }}
                        /><br/>
                    </div>
                    {/* <button className="sign-in" onClick = {onLogin}> Sign in </button>
                    <button className="sign-up" onClick = {() => {setHideRgstForm(false)}}> Sign up </button> */}
                    <Button variant='contained' color='primary' onClick={onLogin} style={{'width': '30%', 'margin': '5px'}}>
                        Sign In
                    </Button>
                    <Button variant='contained' color='primary'onClick={() => {setHideRgstForm(false)}} style={{'width': '30%', 'margin': '5px'}}>
                        Sign Up
                    </Button>
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


