import axios from 'axios';
let localURL = 'http://localhost:3001/diaryApi';

export const addDiary = (diary) => {
    return axios.post(localURL + "/addDiary", 
    diary
    );
  };

export const getAllDiaries = () => {
    return axios.get(localURL + '/')
        .then(response => {
          return response.data
        });
  };