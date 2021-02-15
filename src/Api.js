import axios from 'axios';

const api = axios.create({
    baseURL:'http://api.autosim.mangotest.com/api'
});

export default api;