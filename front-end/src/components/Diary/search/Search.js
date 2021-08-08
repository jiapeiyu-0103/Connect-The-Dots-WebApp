import React, { useState, useEffect} from 'react';
import './Search.css';
import {useSelector, useDispatch} from 'react-redux';
// import {add} from './../actions';
import DiaryEntry from './DiaryEntry';
import SearchByDate from './SearchByDate';
import SearchByTag from './SearchByTag';
import {filterDate,getAll } from '../../../actions';
import 'react-day-picker/lib/style.css';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { getAllDiaries, searchByDate, searchByKeyword} from '../../../services/diaryApi';
import 'antd/dist/antd.css';
import { Input, Space } from 'antd';
import { Switch } from 'antd';

function Search(props) {
  const diaries = useSelector(state => state.diaries);
//   const isModalOpen = useSelector(state => state.addModal);
  const dispatch = useDispatch();
  const [diary, setDiary] = useState([]);
  const [date, setDate] = useState('');
  const [option, setOption] = useState(true);
  const [keyword, setKeyword] = useState('');
  const month = date.month < 10 ? "0"+ date.month : date.month;
  const day = date.day < 10 ? "0" + date.day : date.day;
  const selectDate = (date.year + "-" + month + "-" + day).toString();
  const { Search } = Input;
  const onSearch = value => console.log(value);

  // useEffect(() => {
  //   // console.log(selectDate);
  //   searchByDate(selectDate, props.curUser.unique_id)
  //     .then(function(res) {
  //       setDiary(res);
  //         })
  //   },[selectDate]);  

// useEffect(() => {
//   searchByKeyword(keyword, props.curUser.unique_id)
//       .then(function(res) {
//         setDiary(res);
//           })
// },[keyword]);

const onChange=(checked)=> {
  setOption(checked);
}
    return (
    <div className="main-body">
    {/* <Search placeholder="Search Diary By Keyword" onSearch={(value)=>{setKeyword(value);}} style={{ width: 500, 'font-family': "Optima" }} enterButton /> */}
    <h2 className="search-title">Search Diary By: </h2>
    <Switch checkedChildren="Date" unCheckedChildren="Tag" style={{ width:200, height: 50, fontFamily:"Optima" }} onChange={onChange}  defaultChecked />
    
    <div>
        {option && (<SearchByDate curUser={props.curUser}/>)}
        
        </div>

        <div>
        {!option && (<SearchByTag curUser={props.curUser}/>)}
        
        </div>
      {/* <div className="calendar">
        <Calendar value={date} onChange={setDate} colorPrimary="#819eb6" calendarClassName="custom-calendar" calendarTodayClassName="custom-today-day"/>
       
        </div> */}
        {/* <div>
        <button className="search-button" onClick={handleClick}>View All Entry</button>
        </div> */}

        </div>

    );
}

export default Search;