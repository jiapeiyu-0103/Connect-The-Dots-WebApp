import axios from 'axios';
const dataURL ='http://localhost:3001/dataApi';

export const getOneMonthDairies = (month) => {
    return axios.get(dataURL + `/getOneMonthDairies?month=${month}`)
        .then(res => {
            return res;
        })
};
