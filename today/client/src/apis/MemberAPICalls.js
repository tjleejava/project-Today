import axios from 'axios';
import { POST_MEMBER } from '../modules/MemberModule';


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

  const data = {
    email: email
  }

  axios.get("http://localhost:8888/members/idcheck", data)
  .then((res) => {
    console.log(res.data.result);
  })
  .catch((error) => {
    console.log(error);
  });
}