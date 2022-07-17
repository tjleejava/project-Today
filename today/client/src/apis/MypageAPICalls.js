import axios from 'axios';

export async function mypageInfoAPI() {

  return axios.get('http://localhost:8888/members')
}