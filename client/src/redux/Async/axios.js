import axios from 'axios';

//가져온 axios 객체 커스텀
export default axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL
    ? process.env.REACT_APP_API_URL
    : 'http://localhost:80',
});
