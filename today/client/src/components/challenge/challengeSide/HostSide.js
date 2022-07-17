import HostSideCSS from './HostSide.module.css';
import { useNavigate } from 'react-router-dom';

function HostSide() {

  const MODIFY = 'modify';
  const navigate = useNavigate(); 
  
  const modifyChallengeHandler = () => {
      navigate(MODIFY);
  }

  return (
    <div>
      <div className={ HostSideCSS.content }>
          <div className={ HostSideCSS.context1 }>힘내세요!</div>
      </div>
      <div className={ HostSideCSS.content }>
          <button className={ HostSideCSS.authBtn }>챌린지 인증하기</button>
      </div>
      <div className={ HostSideCSS.content }>
          <div className={ HostSideCSS.context2 }><span>미확인된 인증이&nbsp;</span><span className={ HostSideCSS.context1 }>4</span><span>&nbsp;개 입니다!</span></div>
          <button className={ HostSideCSS.authBtn }>인증 현황</button>
      </div>
      <br/>
      <div className={ HostSideCSS.content }>
          <button className={ HostSideCSS.inviteBtn }>친구 초대하기</button>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div className={ HostSideCSS.buttonArea }>
          <button onClick={ modifyChallengeHandler } className={ HostSideCSS.modifyBtn }>챌린지 수정</button>
          <button className={ HostSideCSS.deleteBtn }>챌린지 삭제</button>
      </div>
    </div>
  );
};

export default HostSide;