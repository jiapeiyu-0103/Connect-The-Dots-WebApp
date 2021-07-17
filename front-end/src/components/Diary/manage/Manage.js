import React, { useState, useEffect} from 'react';
import './Manage.css';
import {useSelector, useDispatch} from 'react-redux';
import DiaryEntry from './DiaryEntry';
import { getAllDiaries} from '../../../services/diaryApi';

function Manage(props){

    const diaries = useSelector(state => state.diaries);
  const favList = useSelector(state => state.favList);
//   const isModalOpen = useSelector(state => state.addModal);
  const dispatch = useDispatch();
  const [diary, setDiary] = useState([]);
//   const favList = localStorage.getItem("favorites");
useEffect(() => {
  getAllDiaries()
    .then(function(res) {
      setDiary(res);
        })
  },[]);  
    
    return (
    <div className="main-body">

       <div className="cardbox">
        
        {diary.map(entry => (
          
           <DiaryEntry entry={entry} setDiary={setDiary}></DiaryEntry>
                   
                ))
            }
      </div>

        </div>

    );
}

export default Manage;