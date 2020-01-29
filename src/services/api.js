import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-mapsdevs.herokuapp.com'//'http://localhost:3004'
});

export default api;