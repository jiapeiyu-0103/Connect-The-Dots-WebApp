import {useState} from 'react';
import './RegisterForm.css'

const RegisterForm = (props) => {

    let years = []

    for(let i = 1900; i < 2021; i++) {
        let id = "year_option" + i
        years.push(<option key={id} value={i}> {i} </option>)
    }

    let days = []

    for(let i = 1; i < 32; i++) {
        let id = "day_option" + i
        days.push(<option key={id} value={i}> {i} </option>)
    }

    const [name, setName] = useState('')
    const [pswd, setPswd] = useState('')
    const [rePswd, setRePswd] = useState('')
    const [sex, setSex] = useState("Male")
    const [year, setYear] = useState('1900')
    const [month, setMonth] = useState('Jan')
    const [day, setDay] = useState('1')


    // check if the user name has been used before if not then return true
    // require the implement of database
    const checkUserID = (name) => {
        return true
    }

    // create a user instance and store into database
    // require: 1) back implement of user class 2) implement of database
    const createUserAndStore = (name, pswd, sex, year, month, day) => {
        return {}
    }
    
    

    const onSubmit = (e) => {
        e.preventDefault()
        if(!name || !pswd ||!sex ||!year || !month ||!day) {
            alert("please fill in the form")
            return
        }

        if(!checkUserID(name)) {
            alert("user name has been registered, please try another one")
            return
        }

        if(pswd !== rePswd) {
            alert("passwords do not match")
            return
        }

        createUserAndStore(name, pswd, sex, year, month, day)
        setName('')
        setPswd('')
        setRePswd('')
        setSex('')
        setYear('')
        setMonth('')
        setDay('')
        props.HideRegisterForm(true)
    }
    

    return (
        <div className="aignup-body">
            <div className="signup-container">
                <div className="signup">
                    <label className="signup-info">User Name:</label>
                    <input type='text' placeholder='enter your user name' value={name} onChange={(e) => {setName(e.target.value)}}/><br/>
                </div>

                <div className="signup">
                    <label className="signup-info">Password:</label>
                    <input type='password' placeholder='enter your password' value={pswd} onChange={(e) => {setPswd(e.target.value)}} /><br/>
                </div>

                <div className="signup">
                    <label className="signup-info">Re-enter your password:</label>
                    <input type='password' placeholder='re-enter your password' value={rePswd} onChange={(e) => {setRePswd(e.target.value)}} /><br/>
                </div>

                <div className="signup">
                    <label className="signup-info">Sex:</label>
                    <select value={sex} onChange={(e) => {setSex(e.target.value)}}>
                        <option value="Male" > Male </option>
                        <option value="Female"> Female </option>
                    </select> <br/>
                </div>

                <div className="signup">
                    <label className="signup-info">Birthday:</label>
                    <select value={year} onChange={(e) => {setYear(e.target.value)}} >
                        <optgroup label="Year" >
                            {years}
                        </optgroup>
                    </select>
                    <select value={month} onChange={(e) => {setMonth(e.target.value)}} >
                    <optgroup label="Month" >
                        <option value="Jan">Jan</option>
                        <option value="Feb">Feb</option>
                        <option value="Mar">Mar</option>
                        <option value="Apr">Apr</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="Aug">Aug</option>
                        <option value="Sep">Sep</option>
                        <option value="Oct">Oct</option>
                        <option value="Nov">Nov</option>
                        <option value="Dec">Dec</option>
                    </optgroup>
                </select>
                    <select value={day} onChange={(e) => {setDay(e.target.value)}}>
                        <optgroup label="Day" >
                            {days}
                        </optgroup>
                    </select><br/>
                </div>

                <input className="save-button" type='button' value='Create' onClick={onSubmit}/>
                <input className="save-button" type='button' value='Close' onClick={() => {props.HideRegisterForm(true)}}/>
            </div>
        </div>
    )
}

export default RegisterForm
