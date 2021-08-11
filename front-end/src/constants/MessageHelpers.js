/* File to store helper functions for Message*/

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

