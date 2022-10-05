import axios from 'axios';
import { POST_MEMBER, GET_EMAIL, CHECK_AUTH_NUMBER, CHECK_ID, RESET_PWD, RESET_PWD_ID_EXIST } from '../modules/MemberModule';

export function signUpDB(id, password, nickname) {

  const data = {
    email: id,
    password: password,
    nickname: nickname
  }

  console.log(data);

  axios.post("/members", data)
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

    axios.get("/members/idcheck", {params: {email: email}})
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

    axios.get("/members/email", {params: {email: email}})
    .then((res) => {
      console.log(res);
      const authNumber = parseInt(res.data.response.number);
      console.log(`authNumber : ${authNumber}`);
      // return authNumber;
  
      if(authNumber != 0) {
        console.log('동작되니')
        dispatch({type: CHECK_AUTH_NUMBER, payload: authNumber });
      }
    })

  }

};

export function resetPwdAPI(email) {

  return async function resetPwdEmail(dispatch, getState) {

    console.log(`API param 확인 : ${email}`);
    const data = {
      email: email
    }

    axios.post('/members/reset-pwd', data)
    .then((result) => {
      console.log(`resetPwd api Result ${JSON.stringify(result)}`)
      const status = parseInt(result.status);
      console.log(status);
      if(status === 200) {
        dispatch({type: RESET_PWD, payload: true})
      } else if(status === 204) {
        dispatch({type: RESET_PWD_ID_EXIST, payload: false})
      }
      // console.log(`resetPwd api Result ${JSON.stringify(result)}`)
    })
  }
}

export function findId(id) {

  console.log(id);
  return async function checkId(dispatch, getState) {
    axios.get('/members/idcheck', {params: {email: id}})
    .then((res) => {
      console.log(res.data.results);
      const resultNo = res.data.results;
      const ID_EXIST = 1;
      const ID_NONEXIST = 0;
      if(res.data.results == ID_EXIST) {
        dispatch({type: CHECK_ID, payload: resultNo });
      } else {
        dispatch({type: CHECK_ID, payload: ID_NONEXIST });
      }
      
    })
    .catch((err) => {console.log(err);})
  }
}

export function confirmPwdAPI(memberNo, pwd) {

  const data = {
    memberNo: memberNo,
    pwd: pwd
  }
  return new Promise((resolve, reject) => {
    axios.post('/members/pwd', data)
    .then((res) => {
      resolve(res.data);
    })

  })
}

export function changePwdAPI(memberNo, pwd) {

  const data = {
    memberNo: memberNo,
    pwd: pwd
  }

  return new Promise((resolve, reject) => {
    axios.put('/members/pwd', data)
    .then((res) => {
      resolve(res.data);
    })
  })

}