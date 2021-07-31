import axios from 'axios';
const dataURL ='https://connect-the-dots-backend.herokuapp.com/dataApi'||'https://localhost:3001/dataApi';

export const getOneMonthDairies = (month) => {
    return axios.get(dataURL + `/getOneMonthDairies?month=${month}`)
        .then(res => {
            return res;
        })
};
