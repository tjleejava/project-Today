import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import ChallengeReportModalCSS from './ChallengeReportModal.module.css';
import { useSelector, useDispatch } from 'react-redux';
import getTime from '../../util/getTime';
import { callPostChallengeReportATI, checkChallengeReportAPI } from '../../apis/ReportAPICalls';
import jwt_decode from "jwt-decode";
import {Cookies} from 'react-cookie'
import { SET_REPORT_REGIST_INFO } from '../../modules/ReportModuls';

function ChallengeReportModal({reportModalState, setReportModalState}) {

  const cookies = new Cookies();
  const token = cookies.get('token');
  let reporterNo = 0;
  if(token) {
      const decoded = jwt_decode(token);
      reporterNo = decoded.no;
  }
  const CHECK_REPORT_CATEGORY = 'report/CHECK_REPORT_CATEGORY';
  const CHANGE_REPORT_CONTENT = 'report/CHANGE_REPORT_CONTENT';
  //보류

  const { registInfo, isAlreadyReported } = useSelector(state => state.reportReducer)
  const { challengeNo } = useParams();
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(checkChallengeReportAPI({
        memberNo: reporterNo,
        challengeNo: challengeNo
      }));
    },[]
  );

  const reportHandler = () => {
    const date = getTime.getDateAndTime();
    dispatch(callPostChallengeReportATI({
      reportCategory: registInfo.reportCategory,
      reportContent: registInfo.reportContent,
      reportDate: date,
      reportChallengeNo: challengeNo,
      reporterNo: reporterNo
    }));

    alert('신고가 접수되었습니다');
    setReportModalState(false);
    dispatch({type: SET_REPORT_REGIST_INFO, payload:{}});
  };

  const reportCategoryChangeHandler = (e) => {
    dispatch({type: CHECK_REPORT_CATEGORY, payload:e.target.value});
  };

  const reportContentChangeHandler = (e) => {
    dispatch({type: CHANGE_REPORT_CONTENT, payload:e.target.value});
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
    <Modal style={modalStyle} isOpen={ reportModalState } onRequestClose={ () => setReportModalState(false) }>
      <div className={ChallengeReportModalCSS.modalarea}>
        <h1>신고하기</h1>
        <hr/>
        <br/><br/><br/>
        <label>신고사유</label>
        <select value={ registInfo.reportCategory } onChange={ reportCategoryChangeHandler }>
          <option value='7'>실행 불가능</option>
          <option value='8'>개인정보 침해</option>
          <option value='9'>욕설</option>
          <option value='10'>음란물</option>
          <option value='11'>기타</option>
        </select>
        <br/><br/><br/><br/>
        <label>신고 메세지</label>
        <textarea value={ registInfo.reportContent } onChange={ reportContentChangeHandler }></textarea>
        <br/><br/><br/>
        <div className={ ChallengeReportModalCSS.modalBtnArea }>
          <button onClick={ reportHandler }>신고하기</button>
          <button onClick={() => setReportModalState(false)}>취소</button>
        </div>
      </div>
    </Modal>
  );
};

export default ChallengeReportModal;