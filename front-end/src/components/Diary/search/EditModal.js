import './EditModal.css';
import React from "react";
// import { editCard, getAllCards,getCardInfoById} from '../services/api';
import { useState, useEffect,useRef } from "react";
import TextField from '@material-ui/core/TextField';
import Slider from 'infinite-react-carousel';
import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from 'react-player'
import { getDiaryById, getAllDiaries, editDiary} from '../../../services/diaryApi';
import UploadImage from '../diary/UploadImageModal';
import UploadAudio from '../diary/UploadAudioModal';
import UploadVideo from '../diary/UploadVideoModal';
function EditModal(props) {
  
  // popup modal learn from: https://www.newline.co/@andreeamaco/how-to-use-react-onclick-events-in-class-and-functional-components--fb63a01e
  const showModal = props.show ? "diary-modal display-block" : "modal display-none";
 const pics_init = props.entry.pics.length === 0 ? ["https://i.postimg.cc/d06GR0sH/diary-covers-2133724.jpg"]:props.entry.pics;
 const aud_init = props.entry.audio.length === 0 ? ["11"]: props.entry.audio;
 const vid_init = props.entry.video.length === 0 ? ["11"] : props.entry.video;
  const [title, setTitle] = useState(props.entry.title);
  const [content, setContent] = useState(props.entry.content);
 
  const [pics, setPics] = useState(pics_init);
  const [videos, setVideos] = useState(vid_init);
  const [audioData, setAudioData]= useState(aud_init);

  const [isImageOpen, setIsImageOpen] = useState(false);
  const [isAudioOpen, setIsAudioOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
//   const inputEl = useRef(null);
// //   useref usage reference from: https://stackoverflow.com/questions/62412963/how-to-reset-input-field-from-useref-in-react
//   const clearInput = () => {
//     setName(card.name);
//     setUrl(card.url);
//     setHouse(card.house);
//     setWand(card.wand);
//     setWandUrl(card.wandpic);
//   };
  
//   useEffect(() => {
//     console.log(props.entry.pics);
//     console.log(props.entry._id);
//     console.log(props.entry.audio);

//     console.log(props.entry.audio.length === 0);
//     console.log(aud_init);
//     console.log(vid_init);
//     console.log(pics);
//     console.log(audioData);
//     console.log(videos);
//     getDiaryById(props.entry._id)
//       .then(function(res) {
//           console.log(res.pics);
          
//             setTitle(res.title);
//             setContent(res.content);
//             setPics(res.pics);
//             setAudioData(res.audio);
//             setVideos(res.video);
//           })
//     },[]); 
  

    const newDiary = {
        // need to modify
        id: props.entry._id,
        title: title, 
        content: content,
        audio: audioData,
        pics: pics,
        video: videos};

  const cardName = props.name;

  const handleClick = (e) => {
    e.preventDefault();
    newDiary.pics[0] === "https://i.postimg.cc/d06GR0sH/diary-covers-2133724.jpg" ? newDiary.pics.shift(): console.log("good") ;
    newDiary.audio[0] === "11" ? newDiary.audio.shift() : console.log("good");
    newDiary.video[0] === "11" ? newDiary.video.shift() : console.log("good");
    editDiary(newDiary).then(function(){
        getAllDiaries(props.curUser.unique_id).then(function(res){
          window.alert("Edit successfully!");
        });
    });
  };

  return (
    <div className={showModal}>
        <button onClick={props.handleClose} className="modal-button">&times;</button>
        
        {/* <div className="modal-content">
            
        <form ref={inputEl} onSubmit={handleSubmit}>
                <h1>. </h1>
                <h1>. </h1>
                <h2>Edit the Wizard Info</h2>
                <label >Name: </label><br/>
                <div>
                <TextField type="text" id="name"  value={newName} placeholder={newName} onChange={(e)=>{setName(e.target.value)}}  ></TextField><br/>
                </div>
                <label >Profile Url: </label><br/>
                <div>
                <TextField type="text" id="url" onChange={(e)=>{setUrl(e.target.value)}} value={newUrl} placeholder={newUrl} ></TextField><br/>
                </div>
                <label >House: </label><br/>
                <div>
                <select id="house" onChange={(e)=>{setHouse(e.target.value)}} value={newHouse}> 
                    <option value="0">Select</option>
                    <option value="Gryffindor">Gryffindor</option>
                    <option value="Slytherin">Slytherin</option>
                    <option value="Hufflepuff">Hufflepuff</option>
                    <option value="Ravenclaw">Ravenclaw</option>
                    <option value="Professor">Professor</option>

                </select><br/>
                </div>
                <label >Wand Info: </label><br/>
                <div>
                <TextField type="text" id="wand" onChange={(e)=>{setWand(e.target.value)}} value={newWand} placeholder={newWand}></TextField><br/>
                </div>
                <label >Wand Pic: </label><br/>
                <div>
                <TextField type="text" id="wandurl"  onChange={(e)=>{setWandUrl(e.target.value)}} value={newWandUrl} placeholder={newWandUrl} ></TextField><br/>
                </div>
                        
            
            <div className = "button-container">
                

                <button type = "submit" className="buttons" >Confirm</button>
               


            </div>
            </form>
            <button className="buttons" onClick={clearInput} >Revert Input</button>
        </div>          */}
        <div className="info-modal-content">
        
        {/* <h2>Title:  </h2>   */}
        <textarea name="diary-title" id="diary-title" className="edit-title" rows="3" placeholder={title} value={title} onChange={(e)=>{setTitle(e.target.value)}} ></textarea><br/>
   
        {/* <input type="text" name="title" placeholder={title} className="edit-title" value={title} onChange={(e)=>{setTitle(e.target.value)}} ></input><br/>
         */}
        <h3>Date: {props.entry.date}</h3>
        <h5>Weather: {props.entry.weather}</h5>
        <h5>Emotion: {props.entry.emotion}</h5>
        <h5>Activity: {props.entry.activity}</h5>
        
        <h3 className="diary-text">Dear Diary: </h3>
        {/* <h3 className="diary-text">{props.entry.content}</h3> */}
        <textarea name="diary-content" id="diary-content" className="edit-input" rows="33" placeholder={content} value={content} onChange={(e)=>{setContent(e.target.value)}} ></textarea><br/>
   
        {/* <div className="edit-button-container"> */}
        <button className="edit-buttons" onClick={()=>setIsImageOpen(true)}>Add image</button>
                    {/* <button className="upload-button">View picture</button> */}
        <button className="edit-buttons" onClick={()=>setIsAudioOpen(true)}>Add audio</button>
                    {/* <button className="upload-button">View audio</button> */}
         <button className="edit-buttons" onClick={()=>setIsVideoOpen(true)}>Add video</button>
                    {/* <button className="upload-button">View video</button> */}
        {/* </div> */}
        
        {/* <img src={props.entry.image}></img> */}
        {/* <Slider dots className="carousel-image">
            {pics.map(ig => {
                  
                  <img src={ig} alt="diary-image"></img>
                 
                  
            })}  
               
            {
                    audioData.map(
                        audio=> {
                     
                        <ReactAudioPlayer src={audio} controls/>  
                       
                        }

                    )
            }
                
             {
                       videos.map(
                           vid=>(
                          
                            <ReactPlayer url={vid} width="30vw" height="30vh" />
                           
                           )
                       )
                   }
              
               

              </Slider>     */}
              <Slider dots className="carousel-image">
                  
                    {pics.map(ig => (
                    
                    <img src={ig} alt="diary-image"></img>
                    
                  ))}  
               </Slider>    

               <Slider dots className="carousel-image">  
                  {
                    audioData.map(
                        audio=> (
                            
                         <ReactAudioPlayer src={audio} controls/>
                         )
                        

                    )
            }
           </Slider>
          
           <Slider dots className="carousel-image">
                    {videos.map(video => (
                    
                    <video width="300" height="250" controls src={video}/> 
                    
                    
                    
                  ))}  

                </Slider>  
            

               


              {/* <div className = "button-container"> */}
              <div>
                 
                {isImageOpen && (<UploadImage url={pics} setState={setPics} show={true} handleClose={()=>setIsImageOpen(false)}/>)}
        
                </div>
                <div>
                {isAudioOpen && (<UploadAudio url={audioData} setState={setAudioData} show={true} handleClose={()=>setIsAudioOpen(false)}/>)}
                </div>
                <div>
                {isVideoOpen && (<UploadVideo url={videos} setState={setVideos} show={true} handleClose={()=>setIsVideoOpen(false)}/>)}
                </div>       

                <button className="modal-button" onClick={handleClick} >Confirm</button>
               


            {/* </div> */}
      
      </div>        
      </div>
    );

}

export default EditModal;