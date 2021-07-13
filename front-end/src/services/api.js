import axios from 'axios';
let localURL = 'http://localhost:3001';

export const addDiary = (diary) => {
    return axios.post(localURL + "/diary/addDiary", 
    diary
    );
  };