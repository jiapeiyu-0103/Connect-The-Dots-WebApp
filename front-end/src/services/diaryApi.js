import axios from 'axios';
let localURL = 'http://localhost:3001/diaryApi';

export const addDiary = (diary) => {
    return axios.post(localURL + "/addDiary", 
    diary
    );
  };

export const getAllDiaries = (user) => {
    return axios.get(localURL + `/getDiary?user=${user}`)
        .then(response => {
          console.log(user);
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

  export const searchByDate = (date,user) => {
    return axios.get(
      localURL + `/searchDate?date=${date}&user=${user}`
      // {
      //   params: {
      //      name
      //   }
      // }
   ).then(response => {
    return response.data
  });
};