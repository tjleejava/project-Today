import axios from 'axios';
import { POST_MEMBER, GET_EMAIL, CHECK_AUTH_NUMBER } from '../modules/MemberModule';


export function signUpDB(id, password, nickname) {

  const data = {
    email: id,
    password: password,
    nickname: nickname
  }

  // return async function () {
    
  //   const result = await axios({
  //     method: "post",
  //     url: "http://localhost:8888/members",
  //     data: {
  //       email: id,
  //       password: password,
  //       nickname: nickname,
  //     },
  //   })
  //   .then((res) => {
  //     alert(res.data.result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
    
  // };

  console.log(data);

  axios.post("http://localhost:8888/members", data)
  .then((res) => {
    console.log(res.data.result);
  })
  .catch((error) => {
    console.log(error);
  });
  
};

export function checkEmail(email) {

  //초기값 중복된다고 설정
  let isDuplicate = true;
  
  //중복확인을 위한 email data에 담음
  const data = {
    email: email
  }

  return async function getDuplicateResult(dispatch, getState) {

    ("http://localhost:8888/members/idcheck", {params: {email: email}})
    .then((res) => {
    console.log(res);

    let duplicateCount = res.data.results;

    //이메일이 중복되지 않는 경우
    if(duplicateCount === 0){
      isDuplicate = false;
      dispatch({ type: GET_EMAIL, payload: isDuplicate })
    }
    //이메일이 중복되는 경우
    if(duplicateCount !== 0) {
      isDuplicate = true;
      dispatch({ type: GET_EMAIL, payload: isDuplicate })
    }

  })
  .catch((error) => {
    console.log(error);
  });
    
  };
};

export function sendEmailAPI(email) {

  console.log(`API param 확인 : ${email}`)

  return async function checkAuthNumber(dispatch, getState) {

    axios.get("http://localhost:8888/members/email", {params: {email: email}})
    .then((res) => {
      console.log(res);
      const authNumber = parseInt(res.data.response.number);
      console.log(`authNumber : ${authNumber}`);
      // return authNumber;
  
      if(authNumber > 0) {
        console.log('동작되니')
        dispatch({type: CHECK_AUTH_NUMBER, payload: authNumber });
      }
    })

  }


  

};