import React, { useState, useEffect} from 'react';
import './SearchByTag.css';
import DiaryEntry from './DiaryEntry';
import 'react-day-picker/lib/style.css';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { getAllDiaries, searchByWeather, searchByEmotion, searchByActivity, searchByKeyword} from '../../../services/diaryApi';
import 'antd/dist/antd.css';
import { Input } from 'antd';

function SearchByTag(props) {
   
    const [diary, setDiary] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [filter, setFilter] = useState(false);
    const { Search } = Input;
    const [weather, setWeather] = useState('');
    const [weaEmoji, setWeaEmoji] = useState('');
    const [emotion, setEmotion] = useState('');
    const [emoEmoji, setEmoEmoji] = useState('');
    const [activity, setActivity] = useState('');
    const [actEmoji, setActEmoji] = useState('');
    
  useEffect(() => {
    searchByKeyword(keyword, props.curUser.unique_id)
      .then(function(res) {
        setDiary(res);
    })
  },[keyword]);

  const handleClick=(e)=> {
    setKeyword('');
    setFilter(false);   
    getAllDiaries(props.curUser.unique_id)
        .then(function(res) {
          setDiary(res);
            })
  };

  const filterWeather =(e)=>{
      e.preventDefault();
     setEmotion("");
     setActivity("");
     setFilter(true);
      searchByWeather(weather, props.curUser.unique_id)
        .then(function(res) {
          setDiary(res);
            })
  }

  const filterEmotion =(e)=>{
    e.preventDefault();
    setActivity("");
    setWeather("");
    setFilter(true);
    searchByEmotion(emotion, props.curUser.unique_id)
    .then(function(res) {
      setDiary(res);
        })
}

const filterActivity =(e)=>{
    e.preventDefault();
    setWeather("");
    setEmotion("");
    setFilter(true);
    searchByActivity(activity, props.curUser.unique_id)
    .then(function(res) {
      setDiary(res);
        })
}
  return (
      <div className="main-body">
        <div className="search">
          <Search placeholder="Search Diary By Keyword" onSearch={(value)=>{setKeyword(value); setActivity("");setWeather("");setEmotion("");setFilter(false);}} style={{ width: 500, 'font-family': "Optima" }} enterButton />
        </div>
          <div className="title-filter"> 
              <img src="https://i.postimg.cc/XJ21RRsh/18860108731537184102-512-1.png"  style={{'width': '2vw', 'height':'3.5vh'}} alt="FILTER" />
              </div>
                <h2 className="tag-title"> BY: WEATHER</h2>
           
          <div className="list-container">
             
                  <div className="tag-container">
                    <input type="radio" name="weather" id="Sunny" class="input-hidden" onClick={()=>{setWeather("sunny");setWeaEmoji("https://i.postimg.cc/hPTMxwPJ/IMG-0457.jpg");}}/>
  
                    <label for="Sunny">
                      
                      <img src="https://i.postimg.cc/hPTMxwPJ/IMG-0457.jpg"  style={{'width': '5vw', 'height':'8vh'}} alt="I'm sad" />
                     
                    </label>
                    <p>Sunny</p>
                   </div>
                   <div className="tag-container">
                    <input type="radio" name="weather" id="Cloudy" class="input-hidden" onClick={()=>{setWeather("cloudy");setWeaEmoji("https://i.postimg.cc/15dnm5Zw/IMG-0458.jpg");}}/>
  
                    <label for="Cloudy">
                       
                      <img src="https://i.postimg.cc/15dnm5Zw/IMG-0458.jpg" style={{'width': '5vw', 'height':'8vh'}} alt="I'm sad" />
                      
                    </label>
                    <p>Cloudy</p>
                   </div>
                   <div className="tag-container">
                    <input type="radio" name="weather" id="Rain" class="input-hidden" onClick={()=>{setWeather("rain");setWeaEmoji("https://i.postimg.cc/wxmTXcKy/IMG-0459.jpg");}} />
  
                    <label for="Rain">
                      <img src="https://i.postimg.cc/wxmTXcKy/IMG-0459.jpg" style={{'width': '5vw', 'height':'8vh'}} alt="I'm sad" />
                    </label>
                    <p>Rain</p>
                   </div>
                   <div className="tag-container">
                    <input type="radio" name="weather" id="Snow" class="input-hidden" onClick={()=>{setWeather("snow");setWeaEmoji("https://i.postimg.cc/SQCk2S8c/IMG-0460.jpg");}} />
  
                    <label for="Snow">
                      <img src="https://i.postimg.cc/SQCk2S8c/IMG-0460.jpg" style={{'width': '5vw', 'height':'8vh'}} alt="I'm sad" />
                    </label>
                    <p>Snow</p>
                   </div>
                   <div className="tag-container">
                    <input type="radio" name="weather" id="Thundershower" class="input-hidden" onClick={()=>{setWeather("thundershower");setWeaEmoji("https://i.postimg.cc/4ygCbctV/IMG-0461.jpg");}} />
  
                    <label for="Thundershower">
                      <img src="https://i.postimg.cc/4ygCbctV/IMG-0461.jpg" style={{'width': '5vw', 'height':'8vh'}} alt="I'm sad" />
                    </label>
                    <p>Thundershower</p>
                   </div>
                   <div className="tag-container">
                    <input type="radio" name="weather" id="Overcast" class="input-hidden" onClick={()=>{setWeather("overcast");setWeaEmoji("https://i.postimg.cc/PJhc8jsM/IMG-0462.jpg");}}/>
  
                    <label for="Overcast">
                      <img src="https://i.postimg.cc/PJhc8jsM/IMG-0462.jpg" style={{'width': '5vw', 'height':'8vh'}} alt="I'm sad" />
                    </label>
                    <p>Overcast</p>
                   </div>
                   
                </div>
                <button className="search-button" onClick={filterWeather}>Filter</button>
                <br/>
                <hr/>

            <div>
            <div className="title-filter"> 
              <img src="https://i.postimg.cc/XJ21RRsh/18860108731537184102-512-1.png"  style={{'width': '2vw', 'height':'3.5vh'}} alt="FILTER" />
              </div>
                <h2 className="tag-title"> BY: EMOTION</h2>
                <div className="list-container">
                  <div className="tag-container">
                    <input type="radio" name="emotion" id="Grinning" class="input-hidden" onClick={()=>{setEmotion("grinning");setEmoEmoji("https://i.postimg.cc/Jn2FPdFf/IMG-0463.jpg");}}/>
  
                    <label for="Grinning">
                      <img src="https://i.postimg.cc/Jn2FPdFf/IMG-0463.jpg" style={{'width': '5vw', 'height':'8vh'}} alt="I'm sad" />
                    </label>
                    <p>Grinning</p>
                   </div>
                   <div className="tag-container">
                    <input type="radio" name="emotion" id="Squinting" class="input-hidden" onClick={()=>{setEmotion("grin-squint");setEmoEmoji("https://i.postimg.cc/fRvDBDf1/IMG-0464.jpg");}}/>
  
                    <label for="Squinting">
                      <img src="https://i.postimg.cc/fRvDBDf1/IMG-0464.jpg" style={{'width': '5vw', 'height':'8vh'}} alt="I'm sad" />
                    </label>
                    <p>Squinting</p>
                   </div>
                   <div className="tag-container">
                    <input type="radio" name="emotion" id="Touched" class="input-hidden" onClick={()=>{setEmotion("touched");setEmoEmoji("https://i.postimg.cc/9Xq2sGBd/IMG-0465.jpg");}}/>
  
                    <label for="Touched">
                      <img src="https://i.postimg.cc/9Xq2sGBd/IMG-0465.jpg" style={{'width': '5vw', 'height':'8vh'}} alt="I'm sad" />
                    </label>
                    <p>Touched</p>
                   </div>
                   <div className="tag-container">
                    <input type="radio" name="emotion" id="Angry" class="input-hidden" onClick={()=>{setEmotion("angry");setEmoEmoji("https://i.postimg.cc/y8L2DdP6/IMG-0466.jpg");}}/>
  
                    <label for="Angry">
                      <img src="https://i.postimg.cc/y8L2DdP6/IMG-0466.jpg" style={{'width': '5vw', 'height':'8vh'}} alt="I'm sad" />
                    </label>
                    <p>Angry</p>
                   </div>
                   <div className="tag-container">
                    <input type="radio" name="emotion" id="Weary" class="input-hidden" onClick={()=>{setEmotion("weary");setEmoEmoji("https://i.postimg.cc/dtvfndNt/IMG-0467.jpg");}}/>
  
                    <label for="Weary">
                      <img src="https://i.postimg.cc/dtvfndNt/IMG-0467.jpg" style={{'width': '5vw', 'height':'8vh'}} alt="I'm sad" />
                    </label>
                    <p>Weary</p>
                   </div>
                   <div className="tag-container">
                    <input type="radio" name="emotion" id="Crying" class="input-hidden" onClick={()=>{setEmotion("crying");setEmoEmoji("https://i.postimg.cc/9QkJ3qb9/IMG-0468.jpg");}}/>
  
                    <label for="Crying">
                      <img src="https://i.postimg.cc/9QkJ3qb9/IMG-0468.jpg" style={{'width': '5vw', 'height':'8vh'}} alt="I'm sad" />
                    </label>
                    <p>Crying</p>
                   </div>
                   <div className="tag-container">
                    <input type="radio" name="emotion" id="Exploding" class="input-hidden" onClick={()=>{setEmotion("exploding");setEmoEmoji("https://i.postimg.cc/qqQx1tgz/IMG-0469.jpg");}}/>
  
                    <label for="Exploding">
                      <img src="https://i.postimg.cc/qqQx1tgz/IMG-0469.jpg" style={{'width': '5vw', 'height':'8vh'}} alt="I'm sad" />
                    </label>
                    <p>Exploding</p>
                   </div>
                   <div className="tag-container">
                    <input type="radio" name="emotion" id="Fearful" class="input-hidden" onClick={()=>{setEmotion("fearful");setEmoEmoji("https://i.postimg.cc/J07bH1Km/IMG-0470.jpg");}}/>
  
                    <label for="Fearful">
                      <img src="https://i.postimg.cc/J07bH1Km/IMG-0470.jpg" style={{'width': '5vw', 'height':'8vh'}} alt="I'm sad" />
                    </label>
                    <p>Fearful</p>
                   </div>
                   <div className="tag-container">
                    <input type="radio" name="emotion" id="Woozy" class="input-hidden" onClick={()=>{setEmotion("woozy");setEmoEmoji("https://i.postimg.cc/BvWHc5Nm/IMG-0492.jpg");}}/>
  
                    <label for="Woozy">
                      <img src="https://i.postimg.cc/BvWHc5Nm/IMG-0492.jpg" style={{'width': '5vw', 'height':'8vh'}} alt="I'm sad" />
                    </label>
                    <p>Woozy</p>
                   </div>
                  
                </div>
                <button className="search-button" onClick={filterEmotion}>Filter</button>
                <br/>
                <hr/>
            </div>

            <div>
            <div className="title-filter"> 
              <img src="https://i.postimg.cc/XJ21RRsh/18860108731537184102-512-1.png"  style={{'width': '2vw', 'height':'3.5vh'}} alt="FILTER" />
              </div>
                <h2 className="tag-title"> BY: ACTIVITY</h2>
                <div className="list-container">
                    <div className="tag-container">
                    <input type="radio" name="activity" id="Writing" class="input-hidden" onClick={()=>{setActivity("writing");setActEmoji("https://i.postimg.cc/mDWxsnj7/IMG-0471.jpg");}}/>
  
                    <label for="Writing">
                      <img src="https://i.postimg.cc/mDWxsnj7/IMG-0471.jpg" style={{'width': '5vw', 'height':'8vh'}} alt="I'm sad" />
                    </label>
                    <p>Writing</p>
                    </div>
                    <div className="tag-container">
                    <input type="radio" name="activity" id="Dancing" class="input-hidden" onClick={()=>{setActivity("dancing");setActEmoji("https://i.postimg.cc/wjF33hZt/IMG-0472.jpg");}}/>
  
                    <label for="Dancing">
                      <img src="https://i.postimg.cc/wjF33hZt/IMG-0472.jpg" style={{'width': '5vw', 'height':'8vh'}} alt="I'm sad" />
                    </label>
                    <p>Dancing</p>
                    </div>
                    <div className="tag-container">
                    <input type="radio" name="activity" id="Party" class="input-hidden" onClick={()=>{setActivity("party");setActEmoji("https://i.postimg.cc/MHZFZJQf/IMG-0473.jpg");}}/>
  
                    <label for="Party">
                      <img src="https://i.postimg.cc/MHZFZJQf/IMG-0473.jpg" style={{'width': '5vw', 'height':'8vh'}} alt="I'm sad" />
                    </label>
                    <p>Party</p>
                    </div>
                    <div className="tag-container">
                    <input type="radio" name="activity" id="Show" class="input-hidden" onClick={()=>{setActivity("show");setActEmoji("https://i.postimg.cc/43zLzxvh/IMG-0474.jpg");}}/>
  
                    <label for="Show">
                      <img src="https://i.postimg.cc/43zLzxvh/IMG-0474.jpg" style={{'width': '5vw', 'height':'8vh'}} alt="I'm sad" />
                    </label>
                    <p>Show</p>
                    </div>
                    <div className="tag-container">
                    <input type="radio" name="activity" id="Travel" class="input-hidden" onClick={()=>{setActivity("travel");setActEmoji("https://i.postimg.cc/YSw8qwc2/IMG-0475.jpg");}}/>
  
                    <label for="Travel">
                      <img src="https://i.postimg.cc/YSw8qwc2/IMG-0475.jpg" style={{'width': '5vw', 'height':'8vh'}} alt="I'm sad" />
                    </label>
                    <p>Travel</p>
                    </div>
                    <div className="tag-container">
                    <input type="radio" name="activity" id="Park" class="input-hidden" onClick={()=>{setActivity("park");setActEmoji("https://i.postimg.cc/RFSRKQVj/IMG-0476.jpg");}}/>
  
                    <label for="Park">
                      <img src="https://i.postimg.cc/RFSRKQVj/IMG-0476.jpg" style={{'width': '5vw', 'height':'8vh'}} alt="I'm sad" />
                    </label>
                    <p>Park</p>
                    </div>
                    <div className="tag-container">
                    <input type="radio" name="activity" id="Delicacy" class="input-hidden" onClick={()=>{setActivity("delicacy");setActEmoji("https://i.postimg.cc/fbK7ztj5/IMG-0477.jpg");}}/>
  
                    <label for="Delicacy">
                      <img src="https://i.postimg.cc/fbK7ztj5/IMG-0477.jpg" style={{'width': '5vw', 'height':'8vh'}} alt="I'm sad" />
                    </label>
                    <p>Delicacy</p>
                    </div>
                   
                    <div className="tag-container">
                    <input type="radio" name="activity" id="Sport" class="input-hidden" onClick={()=>{setActivity("sport");setActEmoji("https://i.postimg.cc/FF2TnSPJ/IMG-0478.jpg");}}/>
  
                    <label for="Sport">
                      <img src="https://i.postimg.cc/FF2TnSPJ/IMG-0478.jpg" style={{'width': '5vw', 'height':'8vh'}} alt="I'm sad" />
                    </label>
                    <p>Sport</p>
                    </div>
                    <div className="tag-container">
                    <input type="radio" name="activity" id="Game" class="input-hidden" onClick={()=>{setActivity("game");setActEmoji("https://i.postimg.cc/rw9gmPqS/IMG-0479.jpg");}}/>
  
                    <label for="Game">
                      <img src="https://i.postimg.cc/rw9gmPqS/IMG-0479.jpg" style={{'width': '5vw', 'height':'8vh'}} alt="I'm sad" />
                    </label>
                    <p>Game</p>
                    </div>
                    <div className="tag-container">
                    <input type="radio" name="activity" id="Divination" class="input-hidden" onClick={()=>{setActivity("divination");setActEmoji("https://i.postimg.cc/tCv4jXxP/IMG-0480.jpg");}}/>
  
                    <label for="Divination">
                      <img src="https://i.postimg.cc/tCv4jXxP/IMG-0480.jpg" style={{'width': '5vw', 'height':'8vh'}} alt="I'm sad" />
                    </label>
                    <p>Divination</p>
                    </div>
                    <div className="tag-container">
                    <input type="radio" name="activity" id="Zoo" class="input-hidden" onClick={()=>{setActivity("zoo");setActEmoji("https://i.postimg.cc/3wm8mmbC/IMG-0482.jpg");}}/>
  
                    <label for="Zoo">
                      <img src="https://i.postimg.cc/3wm8mmbC/IMG-0482.jpg" style={{'width': '5vw', 'height':'8vh'}} alt="I'm sad" />
                    </label>
                    <p>Zoo</p>
                    </div>
                    <div className="tag-container">
                    <input type="radio" name="activity" id="Match" class="input-hidden" onClick={()=>{setActivity("match");setActEmoji("https://i.postimg.cc/j2dtp9qZ/IMG-0483.jpg");}}/>
  
                    <label for="Match">
                      <img src="https://i.postimg.cc/j2dtp9qZ/IMG-0483.jpg" style={{'width': '5vw', 'height':'8vh'}} alt="I'm sad" />
                    </label>
                    <p>Match</p>
                    </div>
                </div>
                <button className="search-button" onClick={filterActivity}>Filter</button>
                <br/>
                <hr/>
            </div>
          <div>
          <button className="search-button" onClick={handleClick}>View All Entry</button>
          </div>
          {filter && ( 
          <div>
            <img src="https://i.postimg.cc/jjzkxdrS/open-book-emoji-by-twitter.png" alt="result" className="emoji"/>
            <h3>THESE DIARY ENTRIES CONTAIN TAGS: </h3>
            <h4 style={{color: '#3f51b5'}}> ⛱️WEATHER: {weather} </h4>
            <h4 style={{color: '#0091ff'}}> 👻EMOTION: {emotion} </h4>
            <h4 style={{color: '#56799d'}}> 👾ACTIVITY: {activity} </h4>

          </div>)}
         
         <div className="cardbox">
        
          {diary.map(entry => (
                     
                      <DiaryEntry entry={entry} setDiary={setDiary} curUser={props.curUser}>
  
                      </DiaryEntry>
                     
                  ))
              }
        </div>
  
      </div>
  
      );
  }
  
  export default SearchByTag;