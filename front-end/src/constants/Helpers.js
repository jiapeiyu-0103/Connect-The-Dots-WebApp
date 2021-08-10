/* File to store helper functions */

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

