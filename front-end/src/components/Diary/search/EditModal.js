import './EditModal.css';
import React from "react";
import { useState, useEffect} from "react";
import Slider from 'infinite-react-carousel';
import ReactAudioPlayer from 'react-audio-player';
import { getAllDiaries, editDiary, getDiaryById} from '../../../services/diaryApi';
import UploadImage from '../diary/UploadImageModal';
import UploadAudio from '../diary/UploadAudioModal';
import UploadVideo from '../diary/UploadVideoModal';
function EditModal(props) {
  
  const showModal = props.show ? "edit-diary-modal display-block" : "modal display-none";
  const [title, setTitle] = useState(props.entry.title);
  const [content, setContent] = useState(props.entry.content);
  const [pics, setPics] = useState(props.entry.pics);
  const [videos, setVideos] = useState(props.entry.video);
  const [audioData, setAudioData]= useState(props.entry.audio);

  const [isImageOpen, setIsImageOpen] = useState(false);
  const [isAudioOpen, setIsAudioOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  useEffect(() => {
    getDiaryById(newDiary)
      .then(function(res) {
        setTitle(res.title);
        setContent(res.content);
        setPics(res.pics);
        setAudioData(res.audio);
        setVideos(res.video);
      })
  },[props.edit]); 
  
  const newDiary = {
    id: props.entry._id,
    title: title, 
    content: content,
    audio: audioData,
    pics: pics,
    video: videos};

  const handleClick = (e) => {
    e.preventDefault();
    props.setEdit(!props.edit);
    editDiary(newDiary).then(function(){
        getAllDiaries(props.curUser.unique_id).then(function(res){
        props.setDiary(res);
          window.alert("Edit successfully!");
        });
    });
  };

  return (
    <div className={showModal}>
      <button onClick={props.handleClose} className="modal-button">&times;</button>
      <div className="info-modal-content">
        <textarea name="diary-title" id="diary-title" className="edit-title" rows="3" placeholder={title} value={title} onChange={(e)=>{setTitle(e.target.value)}} ></textarea><br/>

        <h3>Date: {props.entry.date}</h3>
        <h5>Weather: {props.entry.weather}</h5>
        <h5>Emotion: {props.entry.emotion}</h5>
        <h5>Activity: {props.entry.activity}</h5>
        
        <h3 className="diary-text">Dear Diary: </h3>
        <textarea name="diary-content" id="diary-content" className="edit-input" rows="33" placeholder={content} value={content} onChange={(e)=>{setContent(e.target.value)}} ></textarea><br/>
        <button className="edit-buttons" onClick={()=>setIsImageOpen(true)}>Add image</button>
        <button className="edit-buttons" onClick={()=>setIsAudioOpen(true)}>Add audio</button>
        <button className="edit-buttons" onClick={()=>setIsVideoOpen(true)}>Add video</button>
  
        {pics.length !==0 && (
             <Slider dots className="carousel-image">
                  
                  {pics.map(ig => (
                  
                  <img src={ig} alt="diary-image"></img>
                  
                ))}  
             </Slider>  )}  

       {audioData.length !==0  &&  (
         <Slider dots className="carousel-image">  
                {
                  audioData.map(
                      aud=> (  
                       <ReactAudioPlayer src={aud} controls/>
                       )
                  )
          }
         </Slider>)}
        
         {videos.length !==0 && (
           <Slider dots className="carousel-image">
                  {videos.map(vid => (
                  <video width="300" height="250" controls src={vid}/> 
                ))}  
            
          </Slider> )
               }
          
              <div>
                {isImageOpen && (<UploadImage url={pics} setState={setPics} show={true} handleClose={()=>setIsImageOpen(false)}/>)}
              </div>
              <div>
                {isAudioOpen && (<UploadAudio url={audioData} setState={setAudioData} show={true} handleClose={()=>setIsAudioOpen(false)}/>)}
              </div>
              <div>
                {isVideoOpen && (<UploadVideo url={videos} setState={setVideos} show={true} handleClose={()=>setIsVideoOpen(false)}/>)}
              </div>       

              <button className="edit-buttons" onClick={handleClick} >Confirm</button>
      </div>        
      </div>
    );

}

export default EditModal;