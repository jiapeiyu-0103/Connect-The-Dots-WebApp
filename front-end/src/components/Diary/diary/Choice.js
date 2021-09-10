import React from 'react';
import './Diary.css';
import { useState, useEffect} from 'react';


function Choice(props){

//   const showModal = props.show ? "modal display-block" : "modal display-none";
//   const [file, setFile] = useState(null);
//   const [error, setError] = useState(null);
//   const { url } = useStorage(file);

//   useEffect(() => {
//     if (url) {
//       props.setState([...props.url,url]);
//     }
//   }, [url]);

//   const handleChange = async (e) => {
//     let selected = e.target.files[0];

//     if (selected) {
//       setFile(selected);
//       setError('');
//     } else {
//       setFile(null);
//       setError('Please select an image file (png or jpg)');
//     }
//   };

    return (
        <div className="item-container">
        <input type="radio" name={props.item.type} id={props.item.name} class="input-hidden" onClick={()=>{props.setChoice(props.item.name);props.setChoEmoji(props.item.pic);}}/>

        <label for={props.item.name}>
          <img src={props.item.pic} alt={props.item.name} />
        </label>
        <p>{props.item.name}</p>
       </div>
      );
}

export default Choice;