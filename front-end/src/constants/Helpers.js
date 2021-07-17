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