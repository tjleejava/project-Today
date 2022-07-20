import UserSideCSS from './UserSide.module.css';
import { useSelector } from 'react-redux';
import {Cookies} from 'react-cookie'
import { useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { useParams } from 'react-router-dom';
import { participatingChallengeAPI } from '../../../apis/ChallengeAPICalls'

function UserSide({setReportModalState, isAlreadyReported}) {
  const { challengeInfo, isPartIn } = useSelector(state => state.challengesReducer);
  const cookies = new Cookies();

  const {challengeNo} = useParams();

  useEffect(() => {
    console.log(challengeNo);

  })
  const onClickHandler = async() => {

    const token = cookies.get('token');
    const decoded = jwt_decode(token);
    const memberNo = decoded.no;

    await participatingChallengeAPI(memberNo, challengeNo)
    .then((res) => {
      console.log('클라이언트')
      if(res.data.status == 202) {
        alert('참여중인 챌린지 입니다.');
      } else if(res.data.status == 201) {
        alert('참여가 완료되었습니다.');
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
          <button className={ UserSideCSS.authBtn }>챌린지 탈퇴</button>
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