import React from 'react';
import './Diary.css';
import { useState} from 'react';
import UploadImage from './UploadImageModal';
import UploadAudio from './UploadAudioModal';
import UploadVideo from './UploadVideoModal';

function Diary() {
    // const imageUploader = React.useRef(null);
    // const audioUploader = React.useRef(null);
    const day = new Date().toLocaleString("en-US", { day : '2-digit'});
    const month = new Date().toLocaleString("en-US", { month: "long" });
    const year = new Date().getFullYear();
    const separator = '';
    const [pics, setPics] = useState(null);
    const [videos, setVideos] = useState(null);
   
    const [audioData, setAudioData]=useState(null);
    const [isImageOpen, setIsImageOpen] = useState(false);
    const [isAudioOpen, setIsAudioOpen] = useState(false);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <div id="Diary" >
            <div className="title">
                <h1>Hi, sweetie! Do you want to record your day?</h1>
                <br/>
                <hr/>
            </div>

            <div className="container">
                <div>
                    <img className="greet" src="https://i.postimg.cc/j5mMTYvX/IMG-0488.jpg"/>
                </div>
                <div className="list-container">
                    <div className="item-container">
                        <img alt="" className="checkbox-img" src="https://i.postimg.cc/hPTMxwPJ/IMG-0457.jpg"/>
                        <p>Sunny</p>
                        <input type="checkbox" name="myCheckbox" value="1" onClick="selectOnlyThis(this)"/>
                    </div>

                    <div className="item-container">
                        <img alt="" className="checkbox-img" src="https://i.postimg.cc/15dnm5Zw/IMG-0458.jpg"/>
                        <p>Cloudy</p>
                        <input type="checkbox" name="myCheckbox" value="1" onClick="selectOnlyThis(this)"/>
                    </div>

                    <div className="item-container">
                        <img alt="" className="checkbox-img" src="https://i.postimg.cc/wxmTXcKy/IMG-0459.jpg"/>
                        <p>Rain</p>
                        <input type="checkbox" name="myCheckbox" value="1" onClick="selectOnlyThis(this)"/>
                    </div>

                    <div className="item-container">
                        <img alt="" className="checkbox-img" src="https://i.postimg.cc/SQCk2S8c/IMG-0460.jpg"/>
                        <p>Snow</p>
                        <input type="checkbox" name="myCheckbox" value="1" onClick="selectOnlyThis(this)"/>
                    </div>

                    <div className="item-container">
                        <img alt="" className="checkbox-img" src="https://i.postimg.cc/4ygCbctV/IMG-0461.jpg"/>
                        <p>Thundershower</p>
                        <input type="checkbox" name="myCheckbox" value="1" onClick="selectOnlyThis(this)"/>
                    </div>

                    <div className="item-container">
                        <img alt="" className="checkbox-img" src="https://i.postimg.cc/PJhc8jsM/IMG-0462.jpg"/>
                        <p>Overcast</p>
                        <input type="checkbox" name="myCheckbox" value="1" onClick="selectOnlyThis(this)"/>
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
                        <img alt="" className="checkbox-img" src="https://i.postimg.cc/Jn2FPdFf/IMG-0463.jpg"/>
                        <p>Grinning</p>
                        <input type="checkbox" name="myCheckbox" value="1" onClick="selectOnlyThis(this)"/>
                    </div>

                    <div className="item-container">
                        <img alt="" className="checkbox-img" src="https://i.postimg.cc/fRvDBDf1/IMG-0464.jpg"/>
                        <p>Grinning Squinting</p>
                        <input type="checkbox" name="myCheckbox" value="1" onClick="selectOnlyThis(this)"/>
                    </div>

                    <div className="item-container">
                        <img alt="" className="checkbox-img" src="https://i.postimg.cc/9Xq2sGBd/IMG-0465.jpg"/>
                        <p>Touched</p>
                        <input type="checkbox" name="myCheckbox" value="1" onClick="selectOnlyThis(this)"/>
                    </div>

                    <div className="item-container">
                        <img alt="" className="checkbox-img" src="https://i.postimg.cc/y8L2DdP6/IMG-0466.jpg"/>
                        <p>Angry</p>
                        <input type="checkbox" name="myCheckbox" value="1" onClick="selectOnlyThis(this)"/>
                    </div>

                    <div className="item-container">
                        <img alt="" className="checkbox-img" src="https://i.postimg.cc/dtvfndNt/IMG-0467.jpg"/>
                        <p>Weary</p>
                        <input type="checkbox" name="myCheckbox" value="1" onClick="selectOnlyThis(this)"/>
                    </div>

                    <div className="item-container">
                        <img alt="" className="checkbox-img" src="https://i.postimg.cc/9QkJ3qb9/IMG-0468.jpg"/>
                        <p>Crying</p>
                        <input type="checkbox" name="myCheckbox" value="1" onClick="selectOnlyThis(this)"/>
                    </div>

                    <div className="item-container">
                        <img alt="" className="checkbox-img" src="https://i.postimg.cc/qqQx1tgz/IMG-0469.jpg"/>
                        <p>Exploding</p>
                        <input type="checkbox" name="myCheckbox" value="1" onClick="selectOnlyThis(this)"/>
                    </div>

                    <div className="item-container">
                        <img alt="" className="checkbox-img" src="https://i.postimg.cc/J07bH1Km/IMG-0470.jpg"/>
                        <p>Fearful</p>
                        <input type="checkbox" name="myCheckbox" value="1" onClick="selectOnlyThis(this)"/>
                    </div>

                    <div className="item-container">
                        <img alt="" className="checkbox-img" src="https://i.postimg.cc/BvWHc5Nm/IMG-0492.jpg"/>
                        <p>Woozy</p>
                        <input type="checkbox" name="myCheckbox" value="1" onClick="selectOnlyThis(this)"/>
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
                        <img alt="" className="checkbox-img" src="https://i.postimg.cc/mDWxsnj7/IMG-0471.jpg"/>
                        <p>Writing</p>
                        <input type="checkbox" name="myCheckbox" value="1" onClick="selectOnlyThis(this)"/>
                    </div>

                    <div className="item-container">
                        <img alt="" className="checkbox-img" src="https://i.postimg.cc/wjF33hZt/IMG-0472.jpg"/>
                        <p>Dancing</p>
                        <input type="checkbox" name="myCheckbox" value="1" onClick="selectOnlyThis(this)"/>
                    </div>

                    <div className="item-container">
                        <img alt="" className="checkbox-img" src="https://i.postimg.cc/MHZFZJQf/IMG-0473.jpg"/>
                        <p>Party</p>
                        <input type="checkbox" name="myCheckbox" value="1" onClick="selectOnlyThis(this)"/>
                    </div>

                    <div className="item-container">
                        <img alt="" className="checkbox-img" src="https://i.postimg.cc/43zLzxvh/IMG-0474.jpg"/>
                        <p>Show</p>
                        <input type="checkbox" name="myCheckbox" value="1" onClick="selectOnlyThis(this)"/>
                    </div>

                    <div className="item-container">
                        <img alt="" className="checkbox-img" src="https://i.postimg.cc/YSw8qwc2/IMG-0475.jpg"/>
                        <p>Travel</p>
                        <input type="checkbox" name="myCheckbox" value="1" onClick="selectOnlyThis(this)"/>
                    </div>

                    <div className="item-container">
                        <img alt="" className="checkbox-img" src="https://i.postimg.cc/RFSRKQVj/IMG-0476.jpg"/>
                        <p>Park</p>
                        <input type="checkbox" name="myCheckbox" value="1" onClick="selectOnlyThis(this)"/>
                    </div>

                    <div className="item-container">
                        <img alt="" className="checkbox-img" src="https://i.postimg.cc/fbK7ztj5/IMG-0477.jpg"/>
                        <p>Delicacy</p>
                        <input type="checkbox" name="myCheckbox" value="1" onClick="selectOnlyThis(this)"/>
                    </div>

                    <div className="item-container">
                        <img alt="" className="checkbox-img" src="https://i.postimg.cc/FF2TnSPJ/IMG-0478.jpg"/>
                        <p>Sport</p>
                        <input type="checkbox" name="myCheckbox" value="1" onClick="selectOnlyThis(this)"/>
                    </div>

                    <div className="item-container">
                        <img alt="" className="checkbox-img" src="https://i.postimg.cc/rw9gmPqS/IMG-0479.jpg"/>
                        <p>Game</p>
                        <input type="checkbox" name="myCheckbox" value="1" onClick="selectOnlyThis(this)"/>
                    </div>

                    <div className="item-container">
                        <img alt="" className="checkbox-img" src="https://i.postimg.cc/tCv4jXxP/IMG-0480.jpg"/>
                        <p>Divination</p>
                        <input type="checkbox" name="myCheckbox" value="1" onClick="selectOnlyThis(this)"/>
                    </div>

                    <div className="item-container">
                        <img alt="" className="checkbox-img" src="https://i.postimg.cc/3wm8mmbC/IMG-0482.jpg"/>
                        <p>Zoo</p>
                        <input type="checkbox" name="myCheckbox" value="1" onClick="selectOnlyThis(this)"/>
                    </div>

                    <div className="item-container">
                        <img alt="" className="checkbox-img" src="https://i.postimg.cc/j2dtp9qZ/IMG-0483.jpg"/>
                        <p>Match</p>
                        <input type="checkbox" name="myCheckbox" value="1" onClick="selectOnlyThis(this)"/>
                    </div>
                </div>
                <br/>
                <hr/>
            </div>
            <div>
                <h3 >Date: {month}{separator}{day},{year}{separator} </h3>
                </div>
           
            <div>
            <div className="diary">
                <div className="pic-upload" id="picture-upload">
                    {/* <input type="file" accept="image/*" multiple = "false"
                           style={{
                               display: "none"
                           }} ref={imageUploader} onChange={(e) => setPics(URL.createObjectURL(e.target.files[0]))}/> 
                            onClick={() => imageUploader.current.click()}*/ }
                     <div className="img-container" >
                        <img className="img-display" />
                        
                    </div>
                <div className="button-container" >
                    <button className="buttons" onClick={()=>setIsImageOpen(true)}>Add image</button>
                    {/* <button className="upload-button">View picture</button> */}
                    <button className="buttons" onClick={()=>setIsAudioOpen(true)}>Add audio</button>
                    {/* <button className="upload-button">View audio</button> */}
                    <button className="buttons" onClick={()=>setIsVideoOpen(true)}>Add video</button>
                    {/* <button className="upload-button">View video</button> */}
                </div>
                </div>
               
                <div>
                  <input type="text" name="title" placeholder="Title.." className="diary-title"></input>
                </div>
                <textarea name="diary-content" className="diary-input" rows="33" placeholder="Tell me about your day..."></textarea>
            </div>

            </div>
                <button className="buttons" >Record</button> 
                <div>
                {isImageOpen && (<UploadImage url={pics} setState={setPics} show={true} handleClose={()=>setIsImageOpen(false)}/>)}
                </div>
                <div>
                {isAudioOpen && (<UploadAudio url={audioData} setState={setAudioData} show={true} handleClose={()=>setIsAudioOpen(false)}/>)}
                </div>
                <div>
                {isVideoOpen && (<UploadVideo url={videos} setState={setVideos} show={true} handleClose={()=>setIsVideoOpen(false)}/>)}
                </div>

            
        
                
            
            
        </div>
    );
}

export default Diary;
