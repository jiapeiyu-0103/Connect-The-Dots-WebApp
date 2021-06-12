import {useState} from 'react';
import './Account.css';
function Account({curUser}) {

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

    const [editMode, setEditMode] = useState(false)
    const [name, setName] = useState(curUser.name)
    const [photoURL, setPhotoURL] = useState(curUser.photo)
    const [sex, setSex] = useState(curUser.sex)
    const [year, setYear] = useState(curUser.birthday.year)
    const [month, setMonth] = useState(curUser.birthday.month)
    const [day, setDay] = useState(curUser.birthday.day)


    // require implement of database
    const saveToDB = () => {
        curUser.name = name
        curUser.photo = photoURL
        curUser.sex = sex
        curUser.birthday.year = year
        curUser.birthday.month = month
        curUser.birthday.day = day
    }
    

    const onSave = (e) => {
        e.preventDefault()
        if (!name ||!photoURL) {
            alert("please enter your nickname and/or photo URL")
            return
        }

        saveToDB()
        setEditMode(false)

    }


    const onDelete = () => {
        setEditMode(false)
        setName(curUser.name)
        setPhotoURL(curUser.photo)
        setSex(curUser.sex)
        setYear(curUser.birthday.year)
        setMonth(curUser.birthday.month)
        setDay(curUser.birthday.day)
    }
    

    

    if (!editMode) {
        return (
            <div className="account-body"> 
            <div className="info-container">
                <h3>Name: {curUser.name}</h3>
                <h3>Unique ID: {curUser.unique_id}</h3>
                <h3>Sex: {curUser.sex}</h3>
                <h3>Photo:</h3>
                <img width="50vw" hight="50vh" src="https://i.postimg.cc/CKGz7xXV/sponge-Bob.jpg" alt={curUser.name}/>
                <h3>Birthday: {curUser.birthday.year} {curUser.birthday.month} {curUser.birthday.day} </h3>
                <button className="edit-button" onClick={() => {setEditMode(true)}}>Edit</button>
                </div>
            </div>
        )
    } else {
        return(
            <div className="account-body">
                <div className="info-container">
                <label>Name: </label>
                <input type="text" value={name} placeholder="please enter nickname" onChange={(e) => {setName(e.target.value)}}></input> <br/>

                <label>Unique ID: {curUser.unique_id} </label> <br/>

                <label>Sex:</label>
                <select value={sex} onChange={(e) => {setSex(e.target.value)}}>
                    <option value="Male" > Male </option>
                    <option value="Female"> Female </option>
                </select> <br/>

                <label>Photo: </label>
                <input type="text" value={photoURL} placeholder="please enter image URL" onChange={(e) => {setPhotoURL(e.target.value)}}></input> <br/>

                <label>Birthday:</label>

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

                <button className="edit-button" onClick={onSave}> Save </button>
                <button className="edit-button" onClick={onDelete}>Cancel</button>
                </div>
            </div>
        )
    }

 
}

export default Account;
