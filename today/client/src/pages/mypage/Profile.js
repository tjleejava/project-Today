import ProfileCSS from './Profile.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import { mypageInfoAPI } from '../../apis/MypageAPICalls'
import {Cookies} from 'react-cookie'
import { CHALLENGE_INFO } from '../../modules/MypageModule'
import ChallengeTable from '../../components/challenge/challenge-table/ChallengeTable'
import { checkAPI } from '../../apis/AuthAPICalls';

function Profile() {
  const dispatch = useDispatch();
  const mypage = useSelector(state => state.mypageReducer);
  const {participatedChallenges} = mypage;
  const navigate = useNavigate();

  const [loginStatus, setLoginStatus] = useState(false);

  console.log('11', participatedChallenges);
  let participatedChallengeList = 
  participatedChallenges.map(challenge => 
    <ChallengeTable key={challenge.challengeNo} challengeInfo={challenge}/>
    
  );
  let user;
  useEffect(() => {
    async function loginCheck() {
      await checkAPI().then((res) => {
        console.log(res)
        if(res.status == 200) {
          setLoginStatus(true);
          console.log(res.data.user);
          user = res.data.user;
          console.log(loginStatus);
        if(loginStatus == true) {
          const memberNo = user.no;
          console.log(memberNo);
          mypageInfoAPI(memberNo)
          .then((res) => {
            console.log('프론트')
            console.log(res)
            const challengeInfo = res.data.response;
            console.log(challengeInfo)
            const payload = {challengeInfo: challengeInfo, memberNo: memberNo}
            dispatch({type: CHALLENGE_INFO, payload: payload});
            console.log(mypage.participatedChallenges);
            
          });
        }
        else {
          alert('로그인 후 이용 가능합니다');
          // navigate('/sign/login');
        }
        }
      })
    }
    loginCheck();
    
    
  }
  );

  return (
    <>
    <div className={ProfileCSS.container}>
      <div className={ProfileCSS.header}>
        <h3>마이페이지</h3>
        <hr className={ProfileCSS.line}/>
      </div>
      <div className={ProfileCSS.contentContainer}>
        <h4>프로필</h4>
        <img className={ProfileCSS.img} src={'/images/mypage/profile.jpg'} width="150" height="150"/>
        <div>
          <h4>챌린지 현황</h4>
          <div className={ProfileCSS.challengeNumBox}>
            <div className={ProfileCSS.engagingBox}>
              <h4>참가중</h4>
              <h4>{mypage.participatingChallengeNum}</h4>
            </div>
            <div className={ProfileCSS.completeBox}>
              <h4>완료</h4>
              <h4>{mypage.completedChallengeNum}</h4>
            </div>
            <div className={ProfileCSS.openBox}>
              <h4>개설</h4>
              <h4>{mypage.openChallengeNum}</h4>
            </div>
          </div>
        </div>
        <h4>참가 챌린지 목록</h4>
        <div className={ProfileCSS.challengeListBox}>
          <table>
            <thead>
            <tr>
              <th>No</th>
              <th>챌린지명</th>
              <th>시작일자</th>
              <th>개설자</th>
            </tr>
            </thead>
            <tbody>
              {participatedChallengeList}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>

  );
}

export default Profile;