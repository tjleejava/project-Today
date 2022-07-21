import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MypageCSS from './MyPageCSS.module.css';
import jwt_decode from "jwt-decode";
import { mypageChallenges } from '../../apis/MypageAPICalls'
import {Cookies} from 'react-cookie'
import { useNavigate } from 'react-router-dom';
import { ALL_CHALLENGE_INFO } from '../../modules/MypageModule'
import ChallengeList from '../../components/challenge/challengelist/ChallengeList'

function MypageChallenges() {

  const dispatch = useDispatch();
  const cookies = new Cookies();
  const mypage = useSelector(state => state.mypageReducer);
  const {allChallengeInfo} = mypage;
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log(mypage)
    const token = cookies.get('token');
    console.log(token);
    if(token) {
      const decoded = jwt_decode(token);
      console.log(decoded);
      const memberNo = decoded.no;
      console.log(memberNo);
      mypageChallenges(memberNo)
      .then((res) => {
        console.log('프론트')
        console.log(res.data.response)
        const challengeInfo = res.data.response;
        const payload = {allChallengeInfo: challengeInfo, memberNo: memberNo}
        dispatch({type: ALL_CHALLENGE_INFO, payload: payload});
        console.log(mypage.allChallengeInfo)
      });
    }
  }, [])

  return(
    <div className={MypageCSS.container}>
      {allChallengeInfo.map( challenge => <ChallengeList challenge={challenge} key={challenge.challengeNo}/> )}
    </div>
  )
}
export default MypageChallenges;