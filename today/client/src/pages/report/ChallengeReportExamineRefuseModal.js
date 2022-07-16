import ChallengeReportExamineRefuseModalCSS from './ChallengeReportExamineRefuseModal.module.css';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {callReportRefuseAPI} from '../../apis/ReportAPICalls';
import getTime from '../../util/getTime';

function ChallengeReportExamineRefuseModal({refuseModalState, setRefuseModalState}) {

  const {reportNo} = useParams();
  const dispatch = useDispatch();
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

  const refuseHandler = () => {
    const refuseReason = document.getElementById('refuse').value;
    const date  = getTime.getDateAndTime();
    console.log(date);
    dispatch(callReportRefuseAPI({
      reportNo: reportNo,
      content: refuseReason,
      date: date
    }))
    
    setRefuseModalState(false); 
    window.location.reload();
  };
  
  return (
    <Modal style={modalStyle} isOpen={ refuseModalState } onRequestClose={ () => setRefuseModalState(false) }>
      <div className={ChallengeReportExamineRefuseModalCSS.modalarea}>
        <h2>챌린지 신고 거절</h2>
        <hr/><br/>
        <label>접수된 신고를 거절합니다. 거절 사유를 입력해주세요.</label>
        <div className={ChallengeReportExamineRefuseModalCSS.contentArea}>
          <textarea id='refuse'></textarea>
        </div>
        <div className={ ChallengeReportExamineRefuseModalCSS.modalBtnArea }>
          <button onClick={() => refuseHandler()}>거절</button>
          <button onClick={() => setRefuseModalState(false)}>취소</button>
        </div>
      </div>
    </Modal>
  );
};

export default ChallengeReportExamineRefuseModal;