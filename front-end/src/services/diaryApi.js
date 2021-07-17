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

  export const deleteDiary = (diary) => {
    return axios.delete(localURL + `/${diary._id}`, 
    diary
    );
  };

  export const favDiary = (diary) => {
    return axios.put(localURL + `/addFav/${diary._id}`, 
    diary
    );
  };

  export const searchByDate = (date) => {
    return axios.get(
      localURL + `/searchDate?date=${date}`
      // {
      //   params: {
      //      name
      //   }
      // }
   ).then(response => {
    return response.data
  });
};