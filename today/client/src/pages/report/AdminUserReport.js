import AdminUserReportCSS from './AdminUserReport.module.css';
function AdminUserReport() {

  return (
    <div>
      <div className={ AdminUserReportCSS.titlearea }>
        <h3>사용자 신고</h3>
        <hr/>
      </div>
    </div>
  );
};

export default AdminUserReport;