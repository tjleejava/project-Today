import HostSideCSS from './HostSide.module.css';
import { useNavigate } from 'react-router-dom';
import InviteModal from './InviteModal';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_INVITE_MODAL } from '../../../modules/InviteModule';
import ChallengeRemoveModal from '../remove/ChallengeRemoveModal';
import { SET_MODAL_STATUS } from '../../../modules/ChallengeRemoveModule';

function HostSide() {

  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const {isInviteModalOpen} = useSelector(state => state.inviteReducer);
  const { isModalOpen } = useSelector(state => state.challengeRemoveReducer);
  
  const modifyChallengeHandler = () => {
      navigate('modify');
  }

  
  const deleteModalStatusChange = () => {
    dispatch({type: SET_MODAL_STATUS, payload: !isModalOpen});
  };

  const inviteHandler = () => {
    dispatch({type: CHANGE_INVITE_MODAL, payload: !isInviteModalOpen});
  };

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
          <button onClick={ inviteHandler } className={ HostSideCSS.inviteBtn }>초대하기</button>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div className={ HostSideCSS.buttonArea }>
          <button onClick={ modifyChallengeHandler } className={ HostSideCSS.modifyBtn }>챌린지 수정</button>
          <button onClick={ deleteModalStatusChange }className={ HostSideCSS.deleteBtn }>챌린지 삭제</button>
      </div>
      <InviteModal/>
      <ChallengeRemoveModal removeCategory={ 4 }/>
    </div>
  );
};

export default HostSide;