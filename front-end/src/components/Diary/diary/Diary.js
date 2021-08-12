import React from 'react';
import './Diary.css';
import { useState, useRef} from 'react';
import UploadImage from './UploadImageModal';
import UploadAudio from './UploadAudioModal';
import UploadVideo from './UploadVideoModal';
import { addDiary } from '../../../services/diaryApi';

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
                  <div className="item-container">
                    <input type="radio" name="weather" id="Sunny" class="input-hidden" onClick={()=>{setWeather("sunny");setWeaEmoji("https://i.postimg.cc/hPTMxwPJ/IMG-0457.jpg");}}/>
  
                    <label for="Sunny">
                      <img src="https://i.postimg.cc/hPTMxwPJ/IMG-0457.jpg" alt="I'm sad" />
                    </label>
                    <p>Sunny</p>
                   </div>
                   <div className="item-container">
                    <input type="radio" name="weather" id="Cloudy" class="input-hidden" onClick={()=>{setWeather("cloudy");setWeaEmoji("https://i.postimg.cc/15dnm5Zw/IMG-0458.jpg");}}/>
  
                    <label for="Cloudy">
                      <img src="https://i.postimg.cc/15dnm5Zw/IMG-0458.jpg" alt="I'm sad" />
                    </label>
                    <p>Cloudy</p>
                   </div>
                   <div className="item-container">
                    <input type="radio" name="weather" id="Rain" class="input-hidden" onClick={()=>{setWeather("rain");setWeaEmoji("https://i.postimg.cc/wxmTXcKy/IMG-0459.jpg");}} />
  
                    <label for="Rain">
                      <img src="https://i.postimg.cc/wxmTXcKy/IMG-0459.jpg" alt="I'm sad" />
                    </label>
                    <p>Rain</p>
                   </div>
                   <div className="item-container">
                    <input type="radio" name="weather" id="Snow" class="input-hidden" onClick={()=>{setWeather("snow");setWeaEmoji("https://i.postimg.cc/SQCk2S8c/IMG-0460.jpg");}} />
  
                    <label for="Snow">
                      <img src="https://i.postimg.cc/SQCk2S8c/IMG-0460.jpg" alt="I'm sad" />
                    </label>
                    <p>Snow</p>
                   </div>
                   <div className="item-container">
                    <input type="radio" name="weather" id="Thundershower" class="input-hidden" onClick={()=>{setWeather("thundershower");setWeaEmoji("https://i.postimg.cc/4ygCbctV/IMG-0461.jpg");}} />
  
                    <label for="Thundershower">
                      <img src="https://i.postimg.cc/4ygCbctV/IMG-0461.jpg" alt="I'm sad" />
                    </label>
                    <p>Thundershower</p>
                   </div>
                   <div className="item-container">
                    <input type="radio" name="weather" id="Overcast" class="input-hidden" onClick={()=>{setWeather("overcast");setWeaEmoji("https://i.postimg.cc/PJhc8jsM/IMG-0462.jpg");}}/>
  
                    <label for="Overcast">
                      <img src="https://i.postimg.cc/PJhc8jsM/IMG-0462.jpg" alt="I'm sad" />
                    </label>
                    <p>Overcast</p>
                   </div>
                   
                </div>
                
                <br/>
                <hr/>
            </div>

            <div>
                <div>
                    <img alt="" className="greet" src="https://i.postimg.cc/6QzNKc73/IMG-0489.jpg"/>
                </div>
                <div className="list-container">
                  <div className="item-container">
                    <input type="radio" name="emotion" id="Grinning" class="input-hidden" onClick={()=>{setEmotion("grinning");setEmoEmoji("https://i.postimg.cc/Jn2FPdFf/IMG-0463.jpg");}}/>
  
                    <label for="Grinning">
                      <img src="https://i.postimg.cc/Jn2FPdFf/IMG-0463.jpg" alt="I'm sad" />
                    </label>
                    <p>Grinning</p>
                   </div>
                   <div className="item-container">
                    <input type="radio" name="emotion" id="Squinting" class="input-hidden" onClick={()=>{setEmotion("grin-squint");setEmoEmoji("https://i.postimg.cc/fRvDBDf1/IMG-0464.jpg");}}/>
  
                    <label for="Squinting">
                      <img src="https://i.postimg.cc/fRvDBDf1/IMG-0464.jpg" alt="I'm sad" />
                    </label>
                    <p>Squinting</p>
                   </div>
                   <div className="item-container">
                    <input type="radio" name="emotion" id="Touched" class="input-hidden" onClick={()=>{setEmotion("touched");setEmoEmoji("https://i.postimg.cc/9Xq2sGBd/IMG-0465.jpg");}}/>
  
                    <label for="Touched">
                      <img src="https://i.postimg.cc/9Xq2sGBd/IMG-0465.jpg" alt="I'm sad" />
                    </label>
                    <p>Touched</p>
                   </div>
                   <div className="item-container">
                    <input type="radio" name="emotion" id="Angry" class="input-hidden" onClick={()=>{setEmotion("angry");setEmoEmoji("https://i.postimg.cc/y8L2DdP6/IMG-0466.jpg");}}/>
  
                    <label for="Angry">
                      <img src="https://i.postimg.cc/y8L2DdP6/IMG-0466.jpg" alt="I'm sad" />
                    </label>
                    <p>Angry</p>
                   </div>
                   <div className="item-container">
                    <input type="radio" name="emotion" id="Weary" class="input-hidden" onClick={()=>{setEmotion("weary");setEmoEmoji("https://i.postimg.cc/dtvfndNt/IMG-0467.jpg");}}/>
  
                    <label for="Weary">
                      <img src="https://i.postimg.cc/dtvfndNt/IMG-0467.jpg" alt="I'm sad" />
                    </label>
                    <p>Weary</p>
                   </div>
                   <div className="item-container">
                    <input type="radio" name="emotion" id="Crying" class="input-hidden" onClick={()=>{setEmotion("crying");setEmoEmoji("https://i.postimg.cc/9QkJ3qb9/IMG-0468.jpg");}}/>
  
                    <label for="Crying">
                      <img src="https://i.postimg.cc/9QkJ3qb9/IMG-0468.jpg" alt="I'm sad" />
                    </label>
                    <p>Crying</p>
                   </div>
                   <div className="item-container">
                    <input type="radio" name="emotion" id="Exploding" class="input-hidden" onClick={()=>{setEmotion("exploding");setEmoEmoji("https://i.postimg.cc/qqQx1tgz/IMG-0469.jpg");}}/>
  
                    <label for="Exploding">
                      <img src="https://i.postimg.cc/qqQx1tgz/IMG-0469.jpg" alt="I'm sad" />
                    </label>
                    <p>Exploding</p>
                   </div>
                   <div className="item-container">
                    <input type="radio" name="emotion" id="Fearful" class="input-hidden" onClick={()=>{setEmotion("fearful");setEmoEmoji("https://i.postimg.cc/J07bH1Km/IMG-0470.jpg");}}/>
  
                    <label for="Fearful">
                      <img src="https://i.postimg.cc/J07bH1Km/IMG-0470.jpg" alt="I'm sad" />
                    </label>
                    <p>Fearful</p>
                   </div>
                   <div className="item-container">
                    <input type="radio" name="emotion" id="Woozy" class="input-hidden" onClick={()=>{setEmotion("woozy");setEmoEmoji("https://i.postimg.cc/BvWHc5Nm/IMG-0492.jpg");}}/>
  
                    <label for="Woozy">
                      <img src="https://i.postimg.cc/BvWHc5Nm/IMG-0492.jpg" alt="I'm sad" />
                    </label>
                    <p>Woozy</p>
                   </div>
                   
                </div>
                <br/>
                <hr/>
            </div>

            <div>
                <div>
                    <img alt="" className="greet" src="https://i.postimg.cc/y6fRrCvg/IMG-0490.jpg"/>
                </div>
                <div className="list-container">
                    <div className="item-container">
                    <input type="radio" name="activity" id="Writing" class="input-hidden" onClick={()=>{setActivity("writing");setActEmoji("https://i.postimg.cc/mDWxsnj7/IMG-0471.jpg");}}/>
  
                    <label for="Writing">
                      <img src="https://i.postimg.cc/mDWxsnj7/IMG-0471.jpg" alt="I'm sad" />
                    </label>
                    <p>Writing</p>
                    </div>
                    <div className="item-container">
                    <input type="radio" name="activity" id="Dancing" class="input-hidden" onClick={()=>{setActivity("dancing");setActEmoji("https://i.postimg.cc/wjF33hZt/IMG-0472.jpg");}}/>
  
                    <label for="Dancing">
                      <img src="https://i.postimg.cc/wjF33hZt/IMG-0472.jpg" alt="I'm sad" />
                    </label>
                    <p>Dancing</p>
                    </div>
                    <div className="item-container">
                    <input type="radio" name="activity" id="Party" class="input-hidden" onClick={()=>{setActivity("party");setActEmoji("https://i.postimg.cc/MHZFZJQf/IMG-0473.jpg");}}/>
  
                    <label for="Party">
                      <img src="https://i.postimg.cc/MHZFZJQf/IMG-0473.jpg" alt="I'm sad" />
                    </label>
                    <p>Party</p>
                    </div>
                    <div className="item-container">
                    <input type="radio" name="activity" id="Show" class="input-hidden" onClick={()=>{setActivity("show");setActEmoji("https://i.postimg.cc/43zLzxvh/IMG-0474.jpg");}}/>
  
                    <label for="Show">
                      <img src="https://i.postimg.cc/43zLzxvh/IMG-0474.jpg" alt="I'm sad" />
                    </label>
                    <p>Show</p>
                    </div>
                    <div className="item-container">
                    <input type="radio" name="activity" id="Travel" class="input-hidden" onClick={()=>{setActivity("travel");setActEmoji("https://i.postimg.cc/YSw8qwc2/IMG-0475.jpg");}}/>
  
                    <label for="Travel">
                      <img src="https://i.postimg.cc/YSw8qwc2/IMG-0475.jpg" alt="I'm sad" />
                    </label>
                    <p>Travel</p>
                    </div>
                    <div className="item-container">
                    <input type="radio" name="activity" id="Park" class="input-hidden" onClick={()=>{setActivity("park");setActEmoji("https://i.postimg.cc/RFSRKQVj/IMG-0476.jpg");}}/>
  
                    <label for="Park">
                      <img src="https://i.postimg.cc/RFSRKQVj/IMG-0476.jpg" alt="I'm sad" />
                    </label>
                    <p>Park</p>
                    </div>
                    <div className="item-container">
                    <input type="radio" name="activity" id="Delicacy" class="input-hidden" onClick={()=>{setActivity("delicacy");setActEmoji("https://i.postimg.cc/fbK7ztj5/IMG-0477.jpg");}}/>
  
                    <label for="Delicacy">
                      <img src="https://i.postimg.cc/fbK7ztj5/IMG-0477.jpg" alt="I'm sad" />
                    </label>
                    <p>Delicacy</p>
                    </div>
                   
                    <div className="item-container">
                    <input type="radio" name="activity" id="Sport" class="input-hidden" onClick={()=>{setActivity("sport");setActEmoji("https://i.postimg.cc/FF2TnSPJ/IMG-0478.jpg");}}/>
  
                    <label for="Sport">
                      <img src="https://i.postimg.cc/FF2TnSPJ/IMG-0478.jpg" alt="I'm sad" />
                    </label>
                    <p>Sport</p>
                    </div>
                    <div className="item-container">
                    <input type="radio" name="activity" id="Game" class="input-hidden" onClick={()=>{setActivity("game");setActEmoji("https://i.postimg.cc/rw9gmPqS/IMG-0479.jpg");}}/>
  
                    <label for="Game">
                      <img src="https://i.postimg.cc/rw9gmPqS/IMG-0479.jpg" alt="I'm sad" />
                    </label>
                    <p>Game</p>
                    </div>
                    <div className="item-container">
                    <input type="radio" name="activity" id="Divination" class="input-hidden" onClick={()=>{setActivity("divination");setActEmoji("https://i.postimg.cc/tCv4jXxP/IMG-0480.jpg");}}/>
  
                    <label for="Divination">
                      <img src="https://i.postimg.cc/tCv4jXxP/IMG-0480.jpg" alt="I'm sad" />
                    </label>
                    <p>Divination</p>
                    </div>
                    <div className="item-container">
                    <input type="radio" name="activity" id="Zoo" class="input-hidden" onClick={()=>{setActivity("zoo");setActEmoji("https://i.postimg.cc/3wm8mmbC/IMG-0482.jpg");}}/>
  
                    <label for="Zoo">
                      <img src="https://i.postimg.cc/3wm8mmbC/IMG-0482.jpg" alt="I'm sad" />
                    </label>
                    <p>Zoo</p>
                    </div>
                    <div className="item-container">
                    <input type="radio" name="activity" id="Match" class="input-hidden" onClick={()=>{setActivity("match");setActEmoji("https://i.postimg.cc/j2dtp9qZ/IMG-0483.jpg");}}/>
  
                    <label for="Match">
                      <img src="https://i.postimg.cc/j2dtp9qZ/IMG-0483.jpg" alt="I'm sad" />
                    </label>
                    <p>Match</p>
                    </div>   
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
