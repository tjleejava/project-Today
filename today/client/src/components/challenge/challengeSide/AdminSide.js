import AdminSideCSS from './AdminSide.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { SET_MODAL_STATUS } from '../../../modules/ChallengeRemoveModule';
import ChallengeRemoveModal from '../remove/ChallengeRemoveModal';

function AdminSide() {
  
  const { isModalOpen } = useSelector(state => state.challengeRemoveReducer);
  const { challengeInfo } = useSelector(state => state.challengesReducer);

  const dispatch = useDispatch();

  return (
    <div className={ AdminSideCSS.content }>
      {
        challengeInfo.challengeStatusNo < 3 ?
        <button className={ AdminSideCSS.authBtn } onClick={ dispatch({type: SET_MODAL_STATUS, payload: !isModalOpen}) }>챌린지 삭제</button>:
        null
      }
      <ChallengeRemoveModal removeCategory={ 5 }/>
    </div>
  );
};

export default AdminSide;