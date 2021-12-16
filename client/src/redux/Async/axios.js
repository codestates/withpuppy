import axios from 'axios';

//가져온 axios 객체 커스텀
export default axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL
    ? process.env.REACT_APP_API_URL
    : 'http://localhost:80',
});

//! axios 요청을 이렇게 따로 분리하여 redux-toolkit의 비동기 액션으로 처리하는 이유
//! 만약 모든 컴포넌트 내에서 비동기 작업을 따로 진행할 경우, 엔드포인트가 수정되는 등과 같은 예기치 못한 상황에서 유지보수를 해야 할 때
//! 모든 axios 요청을 했던 컴포넌트를 다 뒤져가며 확인해야 한다
//! 그러나, 이렇게 비동기 액션객체를 따로 정리해서 비동기 작업을 진행한다면, 수정사항이 발생했을 때 이곳에서 바로 변경하면 되므로 유지보수에 편하다
//! 또한, redux-toolkit의 비동기 액션으로 작업하면 응답을 받은 직후 곧바로 redux store에 변경사항을 업데이트 할 수 있다는 장점과
//! 따로 pending state, error state의 액션을 자동으로 생성해서 관리해주기 때문에 해당 케이스에 대한 내용을 따로 처리할것이라면 바로 그곳에서 정의하면 된다

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
