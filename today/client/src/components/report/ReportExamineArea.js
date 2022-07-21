import ReportExamineAreaCSS from './ReportExamineArea.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useEffect } from 'react';
import { checkReportExamineAlreadyAcceptedAPI } from '../../apis/ReportExamineAPICalls';

function ReportExamineArea({category, setRefuseModalState, setAcceptModalState}) {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {reportNo} = useParams();
  const backToListHandler = () => {
    
    if(category === '챌린지') {
      navigate('../challenge');
    } else {
      navigate('../user');
    }
  };
  
  const appecpClickHandler = () => {
      setAcceptModalState(true)
      dispatch(checkReportExamineAlreadyAcceptedAPI(reportNo));
  };

  return (
    <div>
      <div className={ ReportExamineAreaCSS.answerbox }>
        <div className={ReportExamineAreaCSS.textarea}>
          신고 내용 확인 후 신고를 심사해주세요
        </div>
      </div>
      <div className={ ReportExamineAreaCSS.btnarea }>
        <button onClick={ appecpClickHandler }>승인</button>
        <button onClick={ () => setRefuseModalState(true) }>거절</button>
        <button onClick={ backToListHandler }>뒤로가기</button>
      </div>
    </div>
  );
};

export default ReportExamineArea;