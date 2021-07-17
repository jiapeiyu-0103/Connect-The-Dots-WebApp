import React, { useState, useEffect} from 'react';
import './Search.css';
import {useSelector, useDispatch} from 'react-redux';
// import {add} from './../actions';
import DiaryEntry from './DiaryEntry';
import {filterDate,getAll } from '../../../actions';
import 'react-day-picker/lib/style.css';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { getAllDiaries} from '../../../services/diaryApi';


function Search(props) {
  const diaries = useSelector(state => state.diaries);
//   const isModalOpen = useSelector(state => state.addModal);
  const dispatch = useDispatch();
  const [diary, setDiary] = useState([]);
  const [date, setDate] = useState('');
  const selectDate = (date.year + "-" + date.month + "-" +date.day).toString();

  useEffect(() => {
    getAllDiaries()
      .then(function(res) {
        setDiary(res);
          })
    },[]);  

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
      setDate('');
      dispatch(getAll());
      setDiary(diaries);
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
                   
                    <DiaryEntry entry={entry}>

                    </DiaryEntry>
                   
                ))
            }
      </div>

        </div>

    );
}

export default Search;