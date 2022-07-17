import UserSideCSS from './UserSide.module.css';
import { useSelector } from 'react-redux';
function UserSide({setReportModalState, isAlreadyReported}) {
  const { challengeInfo, isPartIn } = useSelector(state => state.challengesReducer);

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
          <button className={ UserSideCSS.authBtn }>챌린지 참여</button>
      </div>
      }
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