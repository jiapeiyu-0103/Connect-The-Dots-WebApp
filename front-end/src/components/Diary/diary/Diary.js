import React from 'react';
import './Diary.css';
import { useState, useRef} from 'react';
import UploadImage from './UploadImageModal';
import UploadAudio from './UploadAudioModal';
import UploadVideo from './UploadVideoModal';
import { addDiary } from '../../../services/diaryApi';
import {ACTIVITY, WEATHER, EMOTION} from '../../../constants/DiaryChoice';
import Choice from './Choice';
function Diary(props) {
    
  const month =new Date().getMonth()+1;
  const todayDate = new Date().toISOString().slice(0, 10);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [weather, setWeather] = useState('');
  const [weaEmoji, setWeaEmoji] = useState('');
  const [emotion, setEmotion] = useState('');
  const [emoEmoji, setEmoEmoji] = useState('');
  const [activity, setActivity] = useState('');
  const [actEmoji, setActEmoji] = useState('');
  const [like, setLike] = useState(false);
  const [pics, setPics] = useState([]);
  const [videos, setVideos] = useState([]);
  const [audioData, setAudioData]=useState([]);

  const [isImageOpen, setIsImageOpen] = useState(false);
  const [isAudioOpen, setIsAudioOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const newDiary = {
    userID: props.curUser.unique_id,
    title: title, 
    content: content,
    weather: weather,
    wea_emoji: weaEmoji,
    emotion: emotion,
    emo_emoji: emoEmoji,
    activity: activity,
    act_emoji: actEmoji,
    like: like,
    date: todayDate,
    month: month,
    audio: audioData,
    pics: pics,
    video: videos
  };

  const inputEl = useRef(null);
    const clearInput = () => {
    inputEl.current.reset();
  };

  const handleRecord = (e) => {
    e.preventDefault();
    addDiary(newDiary).then(function(){
      window.alert("Record successfully!");
      clearInput();
      setPics([]);
      setAudioData([]);
      setVideos([]);
      setTitle('');
      setContent('');
           
    });
  };

  return (
        <div id="Diary">
            <div className="title">
                <h1>Hi, sweetie! Do you want to record your day?</h1>
                <br/>
                <hr/>
            </div>
            <form ref={inputEl}>
            <div className="container">
                <div>
                    <img className="greet" src="https://i.postimg.cc/j5mMTYvX/IMG-0488.jpg" alt="greet"/>
                </div>
                
                <div className="list-container">
                   {WEATHER.map(
                      item=> (  
                        <Choice item={item} setChoice={setWeather} setChoEmoji={setWeaEmoji}/>
                       )
                  )}                   
                </div>
                
                <br/>
                <hr/>
            </div>

            <div>
                <div>
                    <img alt="" className="greet" src="https://i.postimg.cc/6QzNKc73/IMG-0489.jpg"/>
                </div>
                <div className="list-container">
                  {EMOTION.map(
                      item=> (  
                        <Choice item={item} setChoice={setEmotion} setChoEmoji={setEmoEmoji}/>
                       )
                  )}   
                </div>
                <br/>
                <hr/>
            </div>

            <div>
                <div>
                    <img alt="" className="greet" src="https://i.postimg.cc/y6fRrCvg/IMG-0490.jpg"/>
                </div>
                <div className="list-container">
                {ACTIVITY.map(
                      item=> (  
                        <Choice item={item} setChoice={setActivity} setChoEmoji={setActEmoji}/>
                       )
                  )}
                </div>
                <br/>
                <hr/>
            </div>
            </form>
            <div>
                <h3 >Date: {todayDate} </h3>
            </div>
            <div>
            <div className="diary">
                <div className="pic-upload" id="picture-upload">
                     <div className="img-container" >
                        <img className="img-display"/>
                    </div>
                <div className="button-container" >
                    <button className="buttons" onClick={()=>setIsAudioOpen(true)}>Add audio</button>
                    <button className="buttons" onClick={()=>setIsImageOpen(true)}>Add image</button>
                    <button className="buttons" onClick={()=>setIsVideoOpen(true)}>Add video</button>
                </div>
                </div>
                <div >
                  <input type="text" name="title" placeholder="Title.." className="diary-title" value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
                </div>
                <textarea name="diary-content" id="diary-content" className="diary-input" rows="33" placeholder="Tell me about your day..." value={content} onChange={(e)=>{setContent(e.target.value)}} ></textarea>
            </div>

            </div>
                <div>
                  {/* when click the button, the corresponding upload media modal will show up */}
                  {isImageOpen && (<UploadImage url={pics} setState={setPics} show={true} handleClose={()=>setIsImageOpen(false)}/>)}
                </div>
                <div>
                  {isAudioOpen && (<UploadAudio url={audioData} setState={setAudioData} show={true} handleClose={()=>setIsAudioOpen(false)}/>)}
                </div>
                <div>
                  {isVideoOpen && (<UploadVideo url={videos} setState={setVideos} show={true} handleClose={()=>setIsVideoOpen(false)}/>)}
                </div>
                <button className="buttons" onClick={(e)=>{handleRecord(e);}}>Record</button>       
        </div>
    );
}

export default Diary;
