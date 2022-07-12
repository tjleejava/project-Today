import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PageArea from '../../components/report/PageArea';
import AdminChallengeReportCSS from './AdminChallengeReport.module.css';

function AdminChallengeReport() {

  const navigate = useNavigate();
  const { reports, challengeReports } = useSelector(state => state.reportReducer);
  const onClickHandler = (no) => {
    navigate('/admin/reports/' + no);
  };
  const onMouseOverHandler = (no) => {
    const tr = document.getElementById(no);
    tr.style.backgroundColor='black';
    tr.style.color='white';
    tr.style.cursor='pointer';
  };
  const onMouseOutHandler = (no) => {
    const tr = document.getElementById(no);
    tr.style.backgroundColor='white';
    tr.style.color='black';
  };

  return (
    <div>
      <div className={ AdminChallengeReportCSS.titlearea }>
        <h3>챌린지 신고</h3>
        <hr/>
      </div>
      <div className={ AdminChallengeReportCSS.dataarea}>
        <table className={ AdminChallengeReportCSS.datatable}>
          <colgroup>
              <col width = "6%"/>
              <col width = "10%"/>
              <col width = "14%"/>
              <col width = "26%"/>
              <col width = "10%"/>
              <col width = "24%"/>
          </colgroup>
          <thead className={ AdminChallengeReportCSS.tablehead }>
            <th>신고 번호</th>
            <th>신고인</th>
            <th>신고종류</th>
            <th>챌린지명</th>
            <th>상태</th>
            <th>신고일</th>
          </thead>
          <tbody>
            {
              reports.map( report => 
                <tr 
                  className={ AdminChallengeReportCSS.tabledata }
                  onClick={ () => onClickHandler(report.reportNo) }
                  id={report.reportNo}
                  onMouseOver={ () => onMouseOverHandler(report.reportNo)}
                  onMouseOut={ () => onMouseOutHandler(report.reportNo)}
                  key={ report.reportNo }
                >
                  <td>{report.reportNo}</td>
                  <td>{report.nickname}</td>
                  <td>{report.categoryName}</td>
                  <td>{report.challengeName}</td>
                  <td>{report.reportStatusName}</td>
                  <td>{report.reportDate}</td>
                </tr>
              )
            }
        </tbody>
        </table>
      </div>
      <div>
        <PageArea/>
      </div>
    </div>
  );
};

export default AdminChallengeReport;