import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ReportDetailCSS from './ReportDetail.module.css';
import { getReportAPI } from '../../apis/ReportAPICalls';
import UserReportDetail from '../../pages/report/UserReportDetail';
import ChallengeReportDetail from '../../pages/report/ChallengeReportDetail';

function ReportDetail() {

  const dispatch = useDispatch();
  const { report } = useSelector(state => state.reportReducer);
  const navigate = useNavigate();
  const {reportNo} = useParams();

  const backToListHandler = () => {
    
    if(report.categoryType === '챌린지') {
      navigate('../challenge');
    } else {
      navigate('../user');
    }
  };

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
        <div className={ ReportDetailCSS.answerbox }>
        </div>
        <div className={ ReportDetailCSS.btnarea }>
          <button>승인</button>
          <button>거절</button>
          <button onClick={ backToListHandler }>뒤로가기</button>
        </div>
      </div>
    </div>
  );
};

export default ReportDetail;