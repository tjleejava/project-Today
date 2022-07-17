import { useDispatch, useSelector } from 'react-redux';
import InviteModalCSS from './InviteModal.module.css';
import Modal from 'react-modal';
import {CHANGE_INVITE_MODAL, SET_UESR_EMAIL} from '../../../modules/InviteModule';
import {checkUserEmailAPI} from '../../../apis/InviteAPICalls';

function InviteModal() {

  const { isInviteModalOpen, inviteEmail, isExists, inviteInfo } = useSelector(state => state.inviteReducer);

  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(checkUserEmailAPI(inviteEmail));
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
          '존재':
          <div className={ InviteModalCSS.outputbox}>
            안존재
          </div>

        }
      </div>
      <div className={ InviteModalCSS.btnarea}>
        <button>뒤로가기</button>
      </div>
    </Modal>
  );
};

export default InviteModal;