import axios from 'axios';

//가져온 axios 객체 커스텀
export default axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL
    ? process.env.REACT_APP_API_URL
    : 'http://localhost:80',
});

//만약 redux-toolkit의 비동기 작업으로 하지 않을 경우

// @ 요청 템플릿
// import axios from "redux/Async/axios"

// async()=>{
//   try{
//     const response = await axios.get("wnasf/awef");

//      console.log(response);
//   }catch(err){
//        console.log(err);
//   }
// }
