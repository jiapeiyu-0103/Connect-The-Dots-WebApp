import React, { useState, useEffect} from 'react';
import './FavoriteDiary.css';
import {useSelector, useDispatch} from 'react-redux';
// import {add} from './../actions';
import DiaryEntry from '../search/DiaryEntry';

function FavoriteDiary() {
  const diaries = useSelector(state => state.diaries);
  const favList = useSelector(state => state.favList);
//   const isModalOpen = useSelector(state => state.addModal);
  const dispatch = useDispatch();
  const [diary, setDiary] = useState(diaries);
//   const favList = localStorage.getItem("favorites");
useEffect(() => {
    setDiary(diaries);
    
    },[diaries]);
    
    return (
    <div className="main-body">

       <div className="cardbox">
        
        {diaries.map(entry => (
          
           entry.favorite && <DiaryEntry entry={entry}></DiaryEntry>
                   
                ))
            }
      </div>

        </div>

    );
}

export default FavoriteDiary;