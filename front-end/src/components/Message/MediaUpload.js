import PropTypes from 'prop-types';
// Array of media upload buttons (video, image, audio) used by both DriftBottle and TreeHole
function MediaUpload(props) {

    return (
        
        <span>
        
        {/* Audio uploads input and button*/}
        <input type="file" id="driftAudio" name="driftAudio" hidden onChange = {(e)=>{props.setAudioData(URL.createObjectURL(e.target.files[0]), e.target.files[0])}} accept="audio/*" />
                        
        <button className="throw-button" onClick={()=>{document.getElementById('driftAudio').click();}} >Add Audio</button>

        {/* Image uploads input and button}*/}
        <input type="file" id="driftImage" name="driftImage" hidden onChange = {(e)=>{props.setPics(URL.createObjectURL(e.target.files[0]), e.target.files[0])}} accept="image/*" />

        <button className="throw-button"  onClick={()=>{document.getElementById('driftImage').click();}} >Add Image</button>

        {/* Video uploads input and button*/}
        <input type="file" id="driftVideo" name="driftVideo" hidden onChange = {(e)=>{props.setVideos(URL.createObjectURL(e.target.files[0]), e.target.files[0])}} accept="video/*" />

        <button className="throw-button"  onClick={()=>{document.getElementById('driftVideo').click();}} >Add Video</button>

        </span>
    
    
    );
 
}


MediaUpload.propTypes = {
    setAudioData: PropTypes.func,
    setPics:  PropTypes.func,
    setVideos: PropTypes.func,
   
}

export default MediaUpload;
