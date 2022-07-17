import axios from 'axios';

export async function mypageInfoAPI(memberNo) {

  return axios.get('http://localhost:8888/members', {params: {memberNo: memberNo}})
  .then((res) => console.log(res))
}