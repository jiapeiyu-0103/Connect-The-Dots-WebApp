import axios from 'axios';
const localURL = process.env.NODE_ENV === 'production' ? 'https://connect-the-dots-backend.herokuapp.com/diaryApi' : 'http://localhost:3001/diaryApi';

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
   ).then(response => {
    return response.data
  });
};

export const searchByWeather = (weather, user) => {
  return axios.get(
    localURL + `/searchWea?weather=${weather}&user=${user}`
 ).then(response => {
  return response.data
});
};

export const searchByEmotion = (emotion,user) => {
  return axios.get(
    localURL + `/searchEmo?emotion=${emotion}&user=${user}`
 ).then(response => {
  return response.data
});
};

export const searchByActivity = (activity,user) => {
  return axios.get(
    localURL + `/searchAct?activity=${activity}&user=${user}`
 ).then(response => {
  return response.data
});
};

export const searchByKeyword = (keyword, user) => {
  return axios.get(
    localURL + `/searchWord?keyword=${keyword}&user=${user}`
 ).then(response => {
  return response.data
});
};

export const getDiaryById = (diary) => {
  return axios.get(localURL +`/${diary.id}`)
              .then(resp => resp.data);
};

export const editDiary = (diary) => {
  return axios.put(localURL + `/${diary.id}`, 
  diary
  );
};
