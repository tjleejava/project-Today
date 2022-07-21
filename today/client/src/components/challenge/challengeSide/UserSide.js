import UserSideCSS from './UserSide.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {Cookies} from 'react-cookie'
import { useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { useParams } from 'react-router-dom';
import { participatingChallengeAPI, secessionChallengeAPI } from '../../../apis/ChallengeAPICalls'
import { getDateAndTime } from '../../../util/getTime';

function UserSide({setReportModalState, isAlreadyReported}) {

  const cookies = new Cookies();
  const { challengeInfo, isPartIn } = useSelector(state => state.challengesReducer);
  const token = cookies.get('token');
  let memberNo = 1;
  if(token) {
    const decoded = jwt_decode(token);
    memberNo = decoded.no;
  }
  const {challengeNo} = useParams();

  useEffect(() => {
    console.log(challengeNo);

  })

  const challengeSecessionHandler = () => {
    
    const result = secessionChallengeAPI({memberNo: memberNo, challengeNo: challengeNo, date: getDateAndTime()});
    alert('챌린지를 탈퇴했습니다');
    window.location.reload();
  };
  
  const onClickHandler = async() => {


    await participatingChallengeAPI(memberNo, challengeNo)
    .then((res) => {
      console.log('클라이언트')
      if(res.data.status == 202) {
        alert('참여중인 챌린지 입니다.');
      } else if(res.data.status == 201) {
        alert('참여가 완료되었습니다.');
        window.location.reload();
      };
    });
  }
  
  return (
    <div>
      <div className={ UserSideCSS.content }>
          <div className={ UserSideCSS.context1 }>힘내세요!</div>
      </div>
      { isPartIn?
      <div className={ UserSideCSS.content }>
          <button className={ UserSideCSS.authBtn }>챌린지 인증</button><br/><br/>
          <button onClick={ challengeSecessionHandler } className={ UserSideCSS.authBtn }>챌린지 탈퇴</button>
      </div>
      :
      
      <div className={ UserSideCSS.content }>
          <button onClick= { onClickHandler }className={ UserSideCSS.authBtn }>챌린지 참여</button>
      </div>
      }
      
      <div className={ UserSideCSS.content }>
          <button className={ UserSideCSS.authBtn }>챌린지 팔로우</button>
      </div>
      { 
        isAlreadyReported ?
        '이미 신고가 접수되었습니다' :
        <div onClick={ () => setReportModalState(true)} className={ UserSideCSS.reportArea}>
          <img src='/images/siren.png'/>
          신고하기
        </div>
      }
      
    </div>
  );
};

export default UserSide;