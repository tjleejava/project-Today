import { useDispatch, useSelector } from 'react-redux';
import InviteModalCSS from './InviteModal.module.css';
import Modal from 'react-modal';
import {CHANGE_INVITE_MODAL, SET_UESR_EMAIL} from '../../../modules/InviteModule';
import {checkUserEmailAPI} from '../../../apis/InviteAPICalls';

function InviteModal() {

  const { isInviteModalOpen, inviteEmail, isExists, inviteInfo , isCheck} = useSelector(state => state.inviteReducer);

  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(checkUserEmailAPI(inviteEmail));
  };

  const inviteHandler = () => {

  };

  const modalCloseHandler = () => {
    dispatch({type: CHANGE_INVITE_MODAL, payload: !isInviteModalOpen})
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
        top: "20vh",
        left: "25vw",
        right: "25vw",
        bottom: "20vh",
        WebkitOverflowScrolling: "touch",
        borderRadius: "5px",
        outline: "solid 1.5px",
        zIndex: 10,
    },
  };

  return (
    
    <Modal style={modalStyle} isOpen={ isInviteModalOpen } onRequestClose={ modalCloseHandler }>
      <div className={InviteModalCSS.titlearea}>
        <h1>초대하기</h1>
        <hr/>
      </div>
      <div className={InviteModalCSS.inputarea}>
        <input value={inviteEmail} onChange={(e) => dispatch({type: SET_UESR_EMAIL, payload: e.target.value})} type='text'/>
        <button onClick={ onClickHandler }>검색</button>
      </div>
      <div className={InviteModalCSS.outputarea}>
        {
          isExists ?
          <div className={ InviteModalCSS.existsbox}>
            <label>ID : </label><label>{inviteInfo.memberId}</label>
          </div>  :
          <div className={ InviteModalCSS.notExistbox}>
            <div>
              { isCheck? 
                <label>해당 회원은 존재하지 않습니다.</label>:
                <label>초대할 회원을 검색하세요.</label>
              }
            </div>
          </div>
        }
      </div>
      <div className={ InviteModalCSS.btnarea}>
        { isExists? <button onClick={ inviteHandler }>초대하기</button>: null}
        <button onClick={modalCloseHandler}>뒤로가기</button>
      </div>
    </Modal>
  );
};

export default InviteModal;