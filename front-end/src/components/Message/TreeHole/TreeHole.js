import './TreeHole.css'; 
import {useState, useEffect, useRef} from 'react';
import treeHoleImage from '../img/treeHole.png';
import * as YourInfo from '../../../constants/YourInfo';
import {constructYourObj} from '../../../constants/Helpers';
import Thread from '../Thread/Thread';
import MessageUploadAudioModal from '../MessageUploadAudioModal';
import MessageUploadVideoModal from '../MessageUploadVideoModal';
import MessageUploadImageModal from '../MessageUploadImageModal';
function TreeHole() {

const isMounted = useRef(false);

const yourName = YourInfo.YOUR_NAME;
const yourLocation = YourInfo.YOUR_LOCATION;
    
const [pics, setPics] = useState(null);
const [videos, setVideos] = useState(null);

const [audioData, setAudioData]=useState(null);
const [isImageOpen, setIsImageOpen] = useState(false);
const [isAudioOpen, setIsAudioOpen] = useState(false);
const [isVideoOpen, setIsVideoOpen] = useState(false);

const [threads, setThreads] = useState(
[
    
    {
        name: "Stranger",
        location: "Somewhere",
        content: "To someone, you are awesome!",
        imageSrc: null,
        replies: [
            {
                name: yourName,
                location: yourLocation,
                content: 'Hey, thank you, you too!',
                imageSrc: null
            },
            {
                name: 'Stranger2',
                location: 'Someplace',
                content: "Have a great day!",
                imageSrc: null
            },
            
            
            {
                name: 'Stranger',
                location: 'Somewhere',
                content: "Deez nuts!",
                imageSrc: null
            },
            
            
        ]
    },
    
    {
        name: "Stranger2",
        location: "Someplace",
        content: "You know about the up dog?",
        imageSrc: null,
        replies: [
            {
                name: "Stranger",
                location: "Somewhere",
                content: "What's up dog?",
                imageSrc: null
            },
            {
                name: yourName,
                location: yourLocation,
                content: "Ahh you got him/her!",
                imageSrc: null
            }, 
            
            {
                name: "Stranger",
                location: "Somewhere",
                content: "Sed :<",
                imageSrc: null
            },
            
             {
                name: "Stranger2",
                location: "Someplace",
                content: "muhahahahahaha",
                imageSrc: null
            },
            
        ]
    },
]
);

    useEffect(() => {
        if (isMounted.current) {
            const threadListDiv = document.getElementById("treeHoleOuter");
            if (threadListDiv) {
                threadListDiv.scrollIntoView({
                    block: "end",
                    inline: "center",
                    behavior: "smooth",
                    alignToTop: false
                });

            }

        } else {
            isMounted.current = true;
        }



    }, [threads.length]);
    
    
    useEffect(() => {
        if (isMounted.current) {
                const messageAudioModal = document.getElementById("messageAudioModal");
            if (messageAudioModal) {
                messageAudioModal.scrollIntoView({
                    block: "end",
                    inline: "center",
                    behavior: "smooth",
                    alignToTop: false
                });

    }

        } else {
            isMounted.current = true;
        }



    }, [isAudioOpen]);
    
    
       useEffect(() => {
        if (isMounted.current) {
                const messageVideoModal = document.getElementById("messageVideoModal");
            if (messageVideoModal) {
                messageVideoModal.scrollIntoView({
                    block: "end",
                    inline: "center",
                    behavior: "smooth",
                    alignToTop: false
                });

    }

        } else {
            isMounted.current = true;
        }



    }, [isVideoOpen]);
    
    
    
       useEffect(() => {
        if (isMounted.current) {
                const messageImageModal = document.getElementById("messageImageModal");
            if (messageImageModal) {
                messageImageModal.scrollIntoView({
                    block: "end",
                    inline: "center",
                    behavior: "smooth",
                    alignToTop: false
                });

    }

        } else {
            isMounted.current = true;
        }



    }, [isImageOpen]);
    
    

    
const handleSubmit = (index, replyValue) => {
    const newThreads = [...threads];
    
    const replyToAdd = constructYourObj(replyValue)
    
    newThreads[index].replies.push(replyToAdd);
    
    setThreads(newThreads);
}


const addThread = (value, audio, img, vid) => {
    const newThreads = [...threads];
    
    const threadToAdd = constructYourObj(value);
    
    threadToAdd.audioUrl = audio;
    threadToAdd.imageUrl = img;
    threadToAdd.videoUrl = vid;
    
    newThreads.push(threadToAdd);
    
    setThreads(newThreads);
}
    
let threadList;
    
    // Collected bottles
if (threads && threads.length !== 0) {

   threadList = threads.map((thread, index) =>    
        <li key={index}>
            <Thread handleReplySubmit={(replyValue) => handleSubmit(index, replyValue)} thread={thread} />
        </li>  
    );
}

const openAudioModal = () => {
    setIsAudioOpen(true);
    

    
}


const openImageModal = () => {
    setIsImageOpen(true);
    

    
}


const openVideoModal = () => {
    setIsVideoOpen(true);
    

    
}


const handleSend = () => {
    const value = document.getElementById("treeHoleFormInput").value;
    
    if (value || audioData || pics || videos) {
         addThread(value, audioData, pics, videos);
    }
   
    
    document.getElementById("treeHoleFormInput").value = '';
    setAudioData(null);
    setPics(null);
    setVideos(null);
    
    setIsAudioOpen(false);
    setIsImageOpen(false);
    setIsVideoOpen(false);
}
            return (
                <div id="treeHoleOuter">
              
                
                
                
                    <div id="treeHoleImageFormWrapper">
                        <img alt="stuff" id="treeHoleImage" src="https://i.postimg.cc/XqZ1Mmw4/tree-hole.jpg" />
                        <div id="treeHoleForm">
                            <textarea id="treeHoleFormInput" placeholder="Tell me your concerns" className="treeHoleInput"></textarea>
                            <button className="send-button"onClick={handleSend}>SEND</button>
                            <button className="send-button" onClick={()=>openAudioModal()}>ADD AUDIO</button>
                            <button className="send-button" onClick={()=>openImageModal()}>ADD IMAGE</button>
                            <button className="send-button" onClick={()=>openVideoModal()}>ADD VIDEO</button>
                        </div>

  

            

                    </div>
                    <br/>
                    <hr/>
       
                
                    <ul className="threadList"> 
                        {threadList}
                        
                    </ul>

                {isAudioOpen && (<MessageUploadAudioModal url={audioData} setState={setAudioData} show={true} handleClose={()=>setIsAudioOpen(false)}/>)}
             
         
                {isImageOpen && (<MessageUploadImageModal url={pics} setState={setPics} show={true} handleClose={()=>setIsImageOpen(false)}/>)}


                {isVideoOpen && (<MessageUploadVideoModal url={videos} setState={setVideos} show={true} handleClose={()=>setIsVideoOpen(false)}/>)}


            
                    
                </div>
            );
 
 
}

export default TreeHole;
