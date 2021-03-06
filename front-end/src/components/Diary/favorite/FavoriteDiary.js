import React, { useState, useEffect} from 'react';
import './FavoriteDiary.css';
import {useSelector, useDispatch} from 'react-redux';
// import {add} from './../actions';
import DiaryEntry from '../search/DiaryEntry';
import { getAllDiaries} from '../../../services/diaryApi';

function FavoriteDiary(props) {
  const diaries = useSelector(state => state.diaries);
  const favList = useSelector(state => state.favList);
//   const isModalOpen = useSelector(state => state.addModal);
  const dispatch = useDispatch();
  const [diary, setDiary] = useState([]);
//   const favList = localStorage.getItem("favorites");
useEffect(() => {
  getAllDiaries(props.curUser.unique_id)
    .then(function(res) {
      setDiary(res);
        })
  },[]);  
    
    return (
    <div className="main-body">

       <div className="cardbox">
        
        {diary.map(entry => (
          
           entry.like && <DiaryEntry entry={entry} setDiary={setDiary}></DiaryEntry>
                   
                ))
            }
      </div>

        </div>

    );
}

export default FavoriteDiary;