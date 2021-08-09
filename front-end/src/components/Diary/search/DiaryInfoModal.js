import React, { useState} from "react";
import './DiaryInfoModal.css';
import Slider from 'infinite-react-carousel';
import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from 'react-player'

function DiaryInfoModal(props){
    const showModal = props.show ? "diary-modal display-block" : "diary-modal display-none";
    
    return (
        <div className={showModal}>
        <button onClick={props.handleClose} className="modal-button">&times;</button>
        
        <div className="info-modal-content">
        
          <h2>Title: {props.entry.title} </h2>  
          <h3>Date: {props.entry.date}</h3>
          <h5>Weather: {props.entry.weather}</h5>
          <h5>Emotion: {props.entry.emotion}</h5>
          <h5>Activity: {props.entry.activity}</h5>
          
          <h3 className="diary-text">Dear Diary: </h3>
          <h3 className="diary-text">{props.entry.content}</h3>
          
          {/* <img src={props.entry.image}></img> */}
          {props.entry.pics.length !==0 && (<Slider dots className="carousel-image">
                  
                    {props.entry.pics.map(ig => (
                    
                    <img src={ig} alt="diary-image"></img>
                    
                  ))}  
               </Slider>  )}  
         {props.entry.audio.length !==0  &&  (<Slider dots className="carousel-image">  
                  {
                    props.entry.audio.map(
                        aud=> (
                            
                         <ReactAudioPlayer src={aud} controls/>
                         )
                        

                    )
            }
            {/* <div> <ReactAudioPlayer src={"11"} controls/></div> */}
           </Slider>)}
          
           {props.entry.video.length !==0 && (<Slider dots className="carousel-image">
                    {props.entry.video.map(vid => (
                    
                    <video width="300" height="250" controls src={vid}/> 
                    
                    
                    
                  ))}  
                  {/* <div><video width="300" height="250" controls src={"11"}/> </div> */}

                </Slider> )
                 }
        
        </div>          
      </div>
    );

}

export default DiaryInfoModal;