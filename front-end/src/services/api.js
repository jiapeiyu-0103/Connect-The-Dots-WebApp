import axios from 'axios';
const dataURL =process.env.NODE_ENV === 'production' ? 'https://connect-the-dots-backend.herokuapp.com/dataApi' : 'http://localhost:3001/dataApi';

export const getOneMonthDairies = (month, user) => {
    return axios.get(dataURL + `/getOneMonthDairies?month=${month}&user=${user}`)
        .then(res => {
            return res;
        })
        .catch((err) => {
            console.log(err)
        })
};
