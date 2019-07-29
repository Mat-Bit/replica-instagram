import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:9957',
});

export default api;