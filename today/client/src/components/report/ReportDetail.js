import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReportDetailCSS from './ReportDetail.module.css';
import { getReportAPI } from '../../apis/ReportAPICalls';
import UserReportDetail from '../../pages/report/UserReportDetail';
import ChallengeReportDetail from '../../pages/report/ChallengeReportDetail';
import ChallengeReportExamineRefuseModal from '../../pages/report/ChallengeReportExamineRefuseModal';
import ExamineRefuse from './ExamineRefuse';
import ExamineAcceptModal from '../../pages/report/ExamineAcceptModal';
import ReportExamineArea from './ReportExamineArea';
import ExamineAccept from './ExamineAccept';

function ReportDetail() {
  
  const [acceptModalState, setAcceptModalState] = useState(false);

  const [refuseModalState, setRefuseModalState] = useState(false);

  const dispatch = useDispatch();
  const { report, examineInfo } = useSelector(state => state.reportReducer);
  const {reportNo} = useParams();


  useEffect(
    () => {
      dispatch(getReportAPI(reportNo));
    },[]
  );

  return (
    <div className={ReportDetailCSS.area}>
      <div className={ ReportDetailCSS.detailArea}>
        {
          report.categoryType === '챌린지'?
          <ChallengeReportDetail report={ report }/> :
          <UserReportDetail report={ report }/> 
        }
      </div>
      <div className={ ReportDetailCSS.answerArea}>
        {
          Object.keys(examineInfo).length === 0 ? 
          <ReportExamineArea setAcceptModalState={setAcceptModalState} setRefuseModalState={setRefuseModalState} category={ report.categoryType }/>
          : 
          (
            examineInfo.reportExamineCategory === '거절' ? 
            <ExamineRefuse category={ report.categoryType } examineInfo={examineInfo}/> : 
            <ExamineAccept category={ report.categoryType } examineInfo={examineInfo}/>
          )
        }
        
      </div>
      <ExamineAcceptModal modalState={acceptModalState} setModalState={setAcceptModalState} />
      <ChallengeReportExamineRefuseModal refuseModalState={refuseModalState} setRefuseModalState={setRefuseModalState}/>
    </div>
  );
};

export default ReportDetail;