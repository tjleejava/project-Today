import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { getAlarmExistAPI, getAlarmsAPI, putAlarmCheckYNAPI } from '../../../apis/AlarmAPICAll';
import { CHANGE_MODAL_STATE } from '../../../modules/AlarmModule';
import AlarmModalCSS from './AlarmModal.module.css';
import jwt_decode from "jwt-decode";
import {Cookies} from 'react-cookie'


function AlarmModal() {

  const cookies = new Cookies();
  const token = cookies.get('token');
  let memberNo = 1;
  if(token) {
    const decoded = jwt_decode(token);
    memberNo = decoded.no;
  }

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
        top: "27vh",
        left: "25vw",
        right: "25vw",
        bottom: "27vh",
        WebkitOverflowScrolling: "touch",
        borderRadius: "5px",
        outline: "solid 1.5px",
        zIndex: 10,
    },
  };

  const dispatch = useDispatch();
  const {modalState, modalInfo, readPageInfo, unreadPageInfo} = useSelector(state => state.alarmReducer);

  const getAlarms = () => {
    dispatch(getAlarmsAPI({ memberNo: memberNo, readPageInfo: readPageInfo, unreadPageInfo: unreadPageInfo }));
  };
  
  const moveHandler = () => {
    modalInfo.checkYn == 'N' && putAlarmCheckYNAPI(modalInfo.alarmNo);
    dispatch({type: CHANGE_MODAL_STATE, payload: !modalState});
    
    dispatch(getAlarmExistAPI(memberNo));
  };  
  
  const closeHandler = () => {
    console.log('modalInfo.checkYn : ', modalInfo.checkYn)
    modalInfo.checkYn == 'N' && putAlarmCheckYNAPI(modalInfo.alarmNo);
    dispatch({type: CHANGE_MODAL_STATE, payload: !modalState});
    getAlarms();
    
    dispatch(getAlarmExistAPI(memberNo));
  };
  
  return (
    <Modal 
      style={modalStyle} 
      isOpen={ modalState } 
      onRequestClose={ () => dispatch({type: CHANGE_MODAL_STATE, payload: !modalState}) }
    >
      <div className={AlarmModalCSS.body}>
        <div className={AlarmModalCSS.contentarea}>
          <label className={AlarmModalCSS.title}>수신일 : </label>
          <label className={AlarmModalCSS.date}>{modalInfo.alarmDate}</label><br/><br/><br/>
          <label className={AlarmModalCSS.title}>알림 내용 : </label>
          <label className={AlarmModalCSS.textarea}>{modalInfo.alarmContent}</label>
        </div>
        
        <div className={AlarmModalCSS.btnarea}>
          <button onClick={ moveHandler}>이동</button>
          <button onClick={ closeHandler}>확인</button>
        </div>
      </div>
    </Modal>
  );
};

export default AlarmModal;