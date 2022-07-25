import axios from 'axios';

export function mypageInfoAPI(memberNo) {

  return new Promise(async (resolve, reject) => {
    console.log('마이페이지 API')

    await axios.get('http://3.38.13.222:8888/members', {params: {memberNo: memberNo}})
    .then((res) => {
      console.log('mypageAPI')
      resolve(res);
    });

  });
                              

}

export function mypageChallenges(memberNo) {
  return new Promise(async (resolve, reject) => {

    await axios.get('http://3.38.13.222:8888/members/challenges', {params: {memberNo: memberNo}})
    .then((res) => {
      console.log('API')
      resolve(res);
    })
  })
}