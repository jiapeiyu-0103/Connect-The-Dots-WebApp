import {useState} from 'react';
import './RegisterForm.css'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import {makeStyles, ThemeProvider} from '@material-ui/core/styles'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

const RegisterForm = (props) => {

    //  const useStyles = makeStyles({
    //      root: {
    //          background: 'linear-gradient(45deg, #333, #999)',
    //          border: 0,
    //          borderRadius: 15,
    //          padding: '0 30px'
    //      }
    //  })


    const [name, setName] = useState('')
    const [pswd, setPswd] = useState('')
    const [rePswd, setRePswd] = useState('')
    const [sex, setSex] = useState("Male")
    const [date, setDate] = useState('')
    let localURL = 'https://connect-the-dots-backend.herokuapp.com/userApi'||'https://localhost:3001/userApi';


    // check if the user name has been used before if not then return true
    // require the implement of database
    const checkNameAndCreate = (username) => {
        axios.get(localURL +`/checkUserName/${username}`)
            .then((response) => {
                console.log("retrieve data from database and wait for username duplication check")
                console.log(response)
                if (response.data === "") {
                    createUserAndStore(name, pswd, sex, date)
                    setName('')
                    setPswd('')
                    setRePswd('')
                    setSex('')
                    setDate('')
                    props.HideRegisterForm(true)
                } else {
                    alert("user name has been registered, please try another one")
                }
            })
            .catch((err) => {
                console.log("error when check if username is used")
            })
    }

    // create a user instance and store into database
    // require: 1) back implement of user class 2) implement of database
    const createUserAndStore = (name, pswd, sex, date) => {
        axios.post(localURL +'/users', {
            userID: uuidv4(),
            username: name,
            password: pswd,
            sex: sex,
            birthday: date,
            photo: "some default path in public folder"
        }).then((response) => {
            console.log(">> New user is added successfully.")
        }).catch((err) => {
            console.log(err)
        })
    }
    
    

    const onSubmit = (e) => {
        e.preventDefault()
        if(!name || !pswd ||!sex ||!date) {
            alert("please fill in the form")
            return
        }

        if(pswd !== rePswd) {
            alert("passwords do not match")
            return
        }

        checkNameAndCreate(name)
    }
    

    return (
        <ThemeProvider justify='center'>
            <Grid container justify='center' style={{'minWidth': '300px', 'width': '50%','background': 'white', 'borderRadius': '3vh', 'opacity': '0.7', 'margin': '15% auto'}}>
                <Grid item style={{'marginTop': '20px'}}>
                    <Typography variant='h4' style={{'fontFamily':  'Optima sansSerif', 'margin': '20px auto'}}>
                        Create your new account
                    </Typography>
                </Grid>
                <Grid item style={{'width': '85%', 'margin': '5px'}}>
                    <TextField
                        variant='outlined'
                        label='Username'
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}
                        style={{'width': '80%'}}
                    />
                </Grid>
                <Grid item style={{'width': '85%', 'margin': '5px'}}>
                    <TextField
                        variant='outlined'
                        label='Password'
                        type='password'
                        value={pswd}
                        onChange={(e) => {setPswd(e.target.value)}}
                        style={{'width': '80%'}}
                    />
                </Grid>
                <Grid item style={{'width': '85%', 'margin': '5px'}}>
                    <TextField
                        variant='outlined'
                        label='Confirm your password'
                        type='password'
                        value={rePswd}
                        onChange={(e) => {setRePswd(e.target.value)}}
                        style={{'width': '80%'}}
                    /><br/>
                </Grid>
                <Grid item style={{'width': '85%', 'margin': '5px'}}>
                    <FormControl variant="filled" style={{'width': '80%'}}>
                        <InputLabel>Sex</InputLabel>
                        <Select
                            value={sex}
                            onChange={(e) => {setSex(e.target.value)}}
                        >
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                        </Select><br/>
                    </FormControl>
                </Grid>
                <Grid item style={{'width': '75%'}}>
                    <InputLabel>Birthday</InputLabel>    
                    <TextField
                        variant='outlined'
                        value={date}
                        type='date'
                        onChange={(e) => {setDate(e.target.value)}}
                        style={{'width': '90%'}}
                    />
                </Grid>
                <Grid item style={{'width': '85%', 'margin': '5px'}}>
                    <ButtonGroup style={{'margin': '25px auto'}}>
                        <Button variant='contained' color='primary' onClick={onSubmit} startIcon={<SaveIcon />}>
                            Save
                        </Button>
                        <Button variant='contained' color='primary' onClick={() => {props.HideRegisterForm(true)}} startIcon={<DeleteIcon />}>
                            Discard
                        </Button>
                    </ButtonGroup>
                </Grid>

            </Grid>
        </ThemeProvider>
    )
}

export default RegisterForm
