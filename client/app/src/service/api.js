  
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://18.188.79.246/api/',
});


export default api;