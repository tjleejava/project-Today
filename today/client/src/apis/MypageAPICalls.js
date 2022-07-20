import axios from 'axios';

export function mypageInfoAPI(memberNo) {

  return new Promise(async (resolve, reject) => {
    console.log('마이페이지 API')

    await axios.get('http://localhost:8888/members', {params: {memberNo: memberNo}})
                              .then((res) => {
                                resolve(res)

                              });

  });
                              

}