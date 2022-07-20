import ExamineAcceptModalCSS from './ExamineAcceptModal.module.css';
import Modal from 'react-modal';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ACCEPT_CHALLENGE_PENALTY_DATE, ACCEPT_CHALLENGE_HOST, ACCEPT_CHALLENGE_CHALLENGE_CANCEL } from '../../modules/ReportExamineModule';
import { registChallengeReportAccept } from '../../apis/ReportExamineAPICalls';
import getTime from '../../util/getTime';

function ExamineAcceptModal({modalState, setModalState}) {

  const { challengeReportAcceptInfo, checkChallengeReportAccepted } = useSelector(state => state.reportExamineReducer);
  let { challengePenalty, hostPenalty, penaltyDate } = challengeReportAcceptInfo;
  const { reportNo } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const reportAcceptHandler = async () => {

    if(!checkChallengeReportAccepted.penaltyDate||checkChallengeReportAccepted.challengeCanceldate) {
      

      let acceptInfo = {
        challengePenalty: challengePenalty,
        hostPenalty: hostPenalty,
        penaltyDate: penaltyDate,
        penaltyEndDate: getTime.getPenaltyDate(penaltyDate),
        reportNo: reportNo,
        already: false,
        date: getTime.getDateAndTime()
      }
      
      await dispatch(registChallengeReportAccept(acceptInfo));
  
      setModalState(false); 
      window.location.reload();

    } else {
      setModalState(false); 
    }
  };
  
  const modalStyle = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        zIndex: 10,
    },
    content: {
        justifyContent: "center",
        background: "white",
        overflow: "auto",
        top: "22vh",
        left: "25vw",
        right: "25vw",
        bottom: "22vh",
        WebkitOverflowScrolling: "touch",
        borderRadius: "5px",
        outline: "solid 1.5px",
        zIndex: 10,
    },
  };

  return (
    <Modal style={modalStyle} isOpen={ modalState } onRequestClose={ () => setModalState(false) }>
      <div className={ExamineAcceptModalCSS.modalarea}>
        
        {          
          !checkChallengeReportAccepted.penaltyDate||checkChallengeReportAccepted.challengeCanceldate? 
          (
            <div className={ExamineAcceptModalCSS.contentarea}>
              <div className={ExamineAcceptModalCSS.challengeCancelArea}>
                <h2>챌린지 취소</h2>
                <p>부적절한 사유를 발견하여 챌린지를 취소합니다.</p>
                <input id="challengeCancel" type="checkbox" checked={challengePenalty} onChange={ () => dispatch({type:ACCEPT_CHALLENGE_CHALLENGE_CANCEL, payload: !challengePenalty}) }/>
                <label htmlFor="challengeCancel">취소하기</label>
              </div>
              <div className={ ExamineAcceptModalCSS.penaltyArea}>
                <h2>개설자 패널티</h2>
                <p>개설자에게 패널티를 부여합니다.</p>
                <input id="penalty" type="checkbox" checked={hostPenalty} onChange={ () => dispatch({type: ACCEPT_CHALLENGE_HOST, payload: !hostPenalty})} />
                <label htmlFor="penalty">패널티 부여</label><br/>
                {
                  hostPenalty ?
                  (
                    <div className={ExamineAcceptModalCSS.penaltyDate}>
                      <label>패널티 부여일 : </label>
                      <input type="number" value={penaltyDate} onChange={ (e) => dispatch({type: ACCEPT_CHALLENGE_PENALTY_DATE, payload: e.target.value})} min='1' max='30'/>
                    </div>
                  ) :
                  console.log()
                }
              </div>
            </div>
          ): 
          <div className={ExamineAcceptModalCSS.contentarea}>
            <h2>이미 해당 챌린지에 패널티를 부여했습니다.</h2>
          </div>
        }
        <div className={ ExamineAcceptModalCSS.modalBtnArea }>
          <button onClick={ reportAcceptHandler}>확인</button> 
          <button onClick={() => setModalState(false)}>취소</button>
        </div>
      </div>
    </Modal>

  );
};

export default ExamineAcceptModal;