import axios from 'axios';
export const baseURL = 'http://10.0.0.103:8080/';

const api = axios.create({
    baseURL,
    responseType: 'json'
});

export default api;
