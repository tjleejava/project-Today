import axios from 'axios';

export function mypageInfoAPI(memberNo) {

  return async function myPageInfo(dispatch, getState) {

    const result = await axios.get('http://localhost:8888/members', {params: {memberNo: memberNo}})
                              .then((res) => console.log(res));
                              
};
}