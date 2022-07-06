import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { callGetInquiriesAPI } from '../../apis/PlatformInquiryAPICalls';
import UserQnaCSS from './UserQna.module.css';

function UserQna() {

  const dispatch = useDispatch();
  const { inquiries } = useSelector(state => state.platformQnaReducer);
  useEffect(
    () => {
      const memberNo = 6;
      dispatch(callGetInquiriesAPI(memberNo));
    },
    []
  );

  const navigate = useNavigate();

  const registqaHandler = () => {
    navigate('/mypage/qna/regist')
  };

  const inquiryOnClickHandler = (no) => {
    navigate(`/mypage/qna/${no}`);
    
  };
  return (
    <div className={ UserQnaCSS.area}>
      <div className={ UserQnaCSS.header }>
        <label>문의 내역</label>
        <button onClick={ registqaHandler }>문의 작성</button>
        <hr/>
      </div>

      <div className={ UserQnaCSS.tablearea }>
        <table>
          <thead>
            <th>문의 번호</th>
            <th>문의 제목</th>
            <th>답변 상태</th>
            <th>문의 날짜</th>
          </thead>
          <tbody>
            {
              inquiries.map(inquiry =>
                <tr onClick={ () => inquiryOnClickHandler(inquiry.platformInquiryNo) }  key={inquiry.platformInquiryNo}>
                  <td>{inquiry.platformInquiryNo}</td>
                  <td>{inquiry.platformInquiryTitle}</td>
                  <td>{inquiry.replyYN}</td>
                  <td>{inquiry.platformInquiryDate}</td>
                </tr>
                )
            }
          </tbody>
        </table>
      </div>
      <div className={ UserQnaCSS.pagingarea}>
        1 2 3 4 5 
      </div>
    </div>
  );
}

export default UserQna;