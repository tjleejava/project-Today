import InquiryTableCSS from './InquiryTableCSS.module.css';
import {useNavigate, useParams} from 'react-router-dom';

function InquiryTable() {

  const navigate = useNavigate();
  const params = useParams();

  console.log(params);
  const challengeNo = params.challengeNo;
  const registURL = '/challenges/' + challengeNo + '/inquiry/regist'

  const onClickHandler = () => {
    navigate(registURL);

  }
  return(
    <div className={InquiryTableCSS.container}>
      <div>
        <div className={InquiryTableCSS.tableHeader}>
          <span>문의게시판</span>
          <button onClick={ onClickHandler } className={InquiryTableCSS.registBtn}>작성하기</button>
        </div>
        <hr></hr>
      </div>
      <div>
        <table>
            <thead>
            <tr>
              <th>문의번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>답변상태</th>
              <th>작성일</th>
            </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default InquiryTable;