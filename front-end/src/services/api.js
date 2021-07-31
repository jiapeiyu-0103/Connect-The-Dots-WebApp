import axios from 'axios';
const dataURL ='http://localhost:3001/dataApi';

export const getOneMonthDairies = (month, user) => {
    return axios.get(dataURL + `/getOneMonthDairies?month=${month}&user=${user}`)
        .then(res => {
            return res;
        })
};
