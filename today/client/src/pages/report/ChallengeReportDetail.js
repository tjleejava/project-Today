import { useNavigate } from 'react-router-dom';
import ChallengeReportDetailCSS from './ChallengeReportDetail.module.css';

function ChallengeReportDetail({report}) {

  const navigate = useNavigate();
  const challengeInfoHandler = () => {
    navigate('/challenges/' + report.challengeNo);
  };
  return (
    <div className={ChallengeReportDetailCSS.area}>
      <div className={ChallengeReportDetailCSS.title}>
        # {report.reportNo}
        <hr/>
      </div>
      <div className={ChallengeReportDetailCSS.contentarea }>
        <div className={ ChallengeReportDetailCSS.subtitlearea}>
          <label className={ ChallengeReportDetailCSS.subtitle}>신고인</label> 
        </div>
        <div className={ ChallengeReportDetailCSS.databox}>
          {report.nickname}<br/>
        </div>
        <div className={ ChallengeReportDetailCSS.subtitlearea}>
          <label className={ ChallengeReportDetailCSS.subtitle}>신고일</label> 
        </div>
        <div className={ ChallengeReportDetailCSS.databox}>
          {report.reportDate}<br/> 
        </div>
        <div className={ ChallengeReportDetailCSS.subtitlearea}>
          <label className={ ChallengeReportDetailCSS.subtitle}>처리상태</label> 
        </div>
        <div className={ ChallengeReportDetailCSS.databox}>
          {report.reportStatusName}<br/>
        </div>
        <div className={ ChallengeReportDetailCSS.subtitlearea}>
          <label className={ ChallengeReportDetailCSS.subtitle}>신고사유</label> 
        </div>
        <div className={ ChallengeReportDetailCSS.databox}>
          {report.categoryName}<br/>
        </div>
        <div className={ ChallengeReportDetailCSS.subtitlearea}>
          <label className={ ChallengeReportDetailCSS.subtitle}>신고메세지</label> 
        </div>
        <div className={ ChallengeReportDetailCSS.databox}>
          {report.reportContent}<br/>
        </div>
      </div>
      <div className={ ChallengeReportDetailCSS.areabtn}>
        <button onClick={ challengeInfoHandler}>챌린지 정보 확인</button> 
      </div>
    </div>
  );
};

export default ChallengeReportDetail;