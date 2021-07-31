import axios from 'axios';
const dataURL ='https://connect-the-dots-backend.herokuapp.com/dataApi'||'https://localhost:3001/dataApi';

export const getOneMonthDairies = (month, user) => {
    return axios.get(dataURL + `/getOneMonthDairies?month=${month}&user=${user}`)
        .then(res => {
            return res;
        })
};
