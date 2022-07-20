import { useState } from 'react';
import AdminSideCSS from './AdminSide.module.css';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { SET_DELETE_NAME, SET_DELETE_REASON, SET_MODAL_STATUS } from '../../../modules/ChallengeRemoveModule';
import { removeChallengeAPI } from '../../../apis/ChallengeAPICalls';
import { getDateAndTime } from '../../../util/getTime';
import { useNavigate } from 'react-router-dom';

function AdminSide() {
  
  const { isModalOpen, deleteInfo } = useSelector(state => state.challengeRemoveReducer);
  const { challengeInfo } = useSelector(state => state.challengesReducer);

  const {challengeName, deleteReason} = deleteInfo;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalStatusChange = () => {
    dispatch({type: SET_MODAL_STATUS, payload: !isModalOpen});
  };

  const deleteHandler = async () => {
    
    if(challengeInfo.challengeName === challengeName) {
      await removeChallengeAPI({challengeNo: challengeInfo.challengeNo, date: getDateAndTime()});
      await alert('챌린지를 삭제했습니다');

      window.location.replace('/');
    } else {
      alert('챌린지명을 정확하게 입력하세요.');
      dispatch({type: SET_DELETE_NAME, payload: '' });
    }
    
  };

  return (
    <div className={ AdminSideCSS.content }>
      {
        challengeInfo.challengeStatusNo < 3 ?
        <button className={ AdminSideCSS.authBtn } onClick={ modalStatusChange }>챌린지 삭제</button>:
        null
      }
      <Modal style={modalStyle} isOpen={ isModalOpen } onRequestClose={ modalStatusChange }>
        <div className={AdminSideCSS.modalarea}>
          <h1>챌린지 삭제</h1>
          <hr/>
          <div className={AdminSideCSS.description}>
            챌린지를 삭제합니다. 참여중인 회원에게 챌린지 삭제 알림 메세지를 전송합니다.
          </div>
          <div className={AdminSideCSS.inputarea}>
            <label>삭제 사유</label>
            <input value={deleteReason} type='text' onChange={ (e) => dispatch({type: SET_DELETE_REASON, payload: e.target.value }) }/>
          </div>
          <div className={AdminSideCSS.description}>
            확인을 위해 챌린지명을 입력해주세요.<br/>
          </div>
          <div className={AdminSideCSS.inputarea}>
            <label>챌린지명</label>
            <input value={challengeName} type='text' onChange={ (e) => dispatch({type: SET_DELETE_NAME, payload: e.target.value }) }/>
          </div>
          <div className={AdminSideCSS.btnarea}>
            <button onClick={ deleteHandler }>확인</button>
            <button onClick={ modalStatusChange }>취소</button>
          </div>
        </div>
      </Modal>

    </div>
  );
};
const modalStyle = {
  overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255, 255, 255, 0.45)",
      zIndex: 10,
  },
  content: {
      justifyContent: "center",
      background: "white",
      overflow: "auto",
      top: "25vh",
      left: "30vw",
      right: "30vw",
      bottom: "25vh",
      WebkitOverflowScrolling: "touch",
      borderRadius: "5px",
      outline: "solid 1.5px",
      zIndex: 10,
  },
};

export default AdminSide;