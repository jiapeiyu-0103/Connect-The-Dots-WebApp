import './TreeHole.css'; 
import {useState} from 'react';
import treeHoleImage from '../img/treeHole.png';
import * as YourInfo from '../../../constants/YourInfo';
import {constructYourObj} from '../../../constants/Helpers';
import Thread from '../Thread/Thread';
function TreeHole() {
    

const yourName = YourInfo.YOUR_NAME;
const yourLocation = YourInfo.YOUR_LOCATION;
const yourImageSrc = YourInfo.YOUR_IMG_SRC;

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

    
const handleSubmit = (index, replyValue) => {
    const newThreads = [...threads];
    
    const replyToAdd = constructYourObj(replyValue)
    
    newThreads[index].replies.push(replyToAdd);
    
    setThreads(newThreads);
}


const addThread = (value) => {
    const newThreads = [...threads];
    
    const threadToAdd = constructYourObj(value);
    
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


const handleSend = () => {
    const value = document.getElementById("treeHoleFormInput").value;
    if (value) {
        addThread(value);
    } 
    document.getElementById("treeHoleFormInput").value = '';
}
            return (
                <div id="treeHoleOuter">
                    <div id="treeHoleImageFormWrapper">
                        <img id="treeHoleImage" src={treeHoleImage} />
                        <div id="treeHoleForm">
                            <input type='text' id="treeHoleFormInput" placeholder="Tell me your concerns"/>
                            <button onClick={handleSend}>SEND</button>
                        </div>

                    </div>
                    <br/>
                    <hr/>
                
                    <ul className="threadList"> 
                        {threadList}
                        
                    </ul>
                    
                </div>
            );
 
 
}

export default TreeHole;
