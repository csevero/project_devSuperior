import axios from 'axios';

const api = axios.create({
   baseURL: "https://backend-dsdeliver-devsuperior.herokuapp.com"
})

export default api;