import { Navigate, useNavigate } from 'react-router-dom';
import AdminReportCSS from './AdminReport.module.css';

function AdminReport() {

  const navigate = useNavigate();

  const userReportOnClickHandler = () => {
    navigate('user');
  };
  
  const challengeReportOnClickHandler = () => {
    navigate('challenge');
  };
  return (
    <div>
      <div className={AdminReportCSS.titlearea}>
        <h3>신고 관리</h3>
        <hr/>
      </div>
      <div className={AdminReportCSS.selectarea}>
        
        <div onClick={ userReportOnClickHandler } className={AdminReportCSS.selectbox}>
          <label>사용자 신고</label>
        </div>
        <div onClick={ challengeReportOnClickHandler } className={AdminReportCSS.selectbox}>
          <label>챌린지 신고</label>
        </div>
      </div>
    </div>
  );
};

export default AdminReport;