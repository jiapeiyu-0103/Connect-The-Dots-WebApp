import React, { useState, useEffect} from 'react';
import './FavoriteDiary.css';
import DiaryEntry from '../search/DiaryEntry';
import { getAllDiaries} from '../../../services/diaryApi';

function FavoriteDiary(props) {
  const [diary, setDiary] = useState([]);

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