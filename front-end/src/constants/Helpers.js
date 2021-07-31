// File to store helper functions
import * as YourInfo from './YourInfo';

export const constructYourObj = (value) => {
    const returnObj = {};
    returnObj.content = value;
    returnObj.name = YourInfo.YOUR_NAME;
    returnObj.location = YourInfo.YOUR_LOCATION;
    returnObj.imageSrc = YourInfo.YOUR_IMG_SRC;
    returnObj.userId = YourInfo.YOUR_USER_ID;
    returnObj.replies = [];
    return returnObj;
}

// Construct an user object for message functionalities
export const constructMessageObj = (value, curUser) => {   
    const returnObj = {};
    returnObj.content = value;
    returnObj.name = curUser.username;
    returnObj.location = null;
    returnObj.imageSrc = curUser.photo;
    returnObj.userId = curUser.message_id;
    returnObj.replies = [];
    return returnObj;
}
// Check if an image URL is valid
export const checkImage = (name) => {
    const image = new Image();
    image.src = name;

    image.onload = () =>
    {
        return true;
    }
    image.onerror = () =>
    {
        return false;
    }
}     

