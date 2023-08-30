import axios from "axios";
const api = axios.create({
    baseURL: 'https://64ee1b751f87218271425136.mockapi.io/api/v1/'
});
export default api;