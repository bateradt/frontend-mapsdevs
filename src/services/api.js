import axios from 'axios';

const api = axios.create({
    baseURL: 'http://backend-mapsdevs.herokuapp.com'//'http://localhost:3004'
});

export default api;