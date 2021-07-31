import React, { useState, useEffect} from 'react';
import './Search.css';
import {useSelector, useDispatch} from 'react-redux';
// import {add} from './../actions';
import DiaryEntry from './DiaryEntry';
import {filterDate,getAll } from '../../../actions';
import 'react-day-picker/lib/style.css';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { getAllDiaries, searchByDate} from '../../../services/diaryApi';


function Search(props) {
  const diaries = useSelector(state => state.diaries);
//   const isModalOpen = useSelector(state => state.addModal);
  const dispatch = useDispatch();
  const [diary, setDiary] = useState([]);
  const [date, setDate] = useState('');
  const month = date.month < 10 ? "0"+ date.month : date.month;
  const day = date.day < 10 ? "0" + date.day : date.day;
  const selectDate = (date.year + "-" + month + "-" + day).toString();

  useEffect(() => {
    console.log(selectDate);
    searchByDate(selectDate, props.curUser.unique_id)
      .then(function(res) {
        setDiary(res);
          })
    },[selectDate]);  

// useEffect(() => {
//   setDiary(diaries);
//   dispatch(filterDate(selectDate));
  
//    console.log(selectDate); 
//     // console.log(selectDate);
//     // console.log(diaries);
//     // console.log(diary);
//     // console.log("hhh");
    
//     });
    
const handleClick=(e)=> {
  // e.preventDefault();
      
  getAllDiaries(props.curUser.unique_id)
      .then(function(res) {
        setDiary(res);
        // setDate('');
          })
    
      // console.log(date);
      // console.log(selectDate);
};
    return (
    <div className="main-body">

        <div className="calendar">
          {/* <h3 text-align="start">Search diary entry by date:</h3> */}
        <Calendar value={date} onChange={setDate} colorPrimary="#819eb6" calendarClassName="custom-calendar" calendarTodayClassName="custom-today-day"/>
       
        </div>
        <div>
        <button className="search-button" onClick={handleClick}>View All Entry</button>
        </div>
       <div className="cardbox">
       
        {diary.map(entry => (
                   
                    <DiaryEntry entry={entry} setDiary={setDiary}>

                    </DiaryEntry>
                   
                ))
            }
      </div>

        </div>

    );
}

export default Search;