import React, { useState, useEffect} from 'react';
import './Manage.css';
import {useSelector, useDispatch} from 'react-redux';
import DiaryEntry from './DiaryEntry';

function Manage(props){

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
          
           <DiaryEntry entry={entry}></DiaryEntry>
                   
                ))
            }
      </div>

        </div>

    );
}

export default Manage;