import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { callGetInquiriesAPI } from '../../apis/PlatformInquiryAPICalls';
import UserQnaCSS from './UserQna.module.css';
import UserInquiriesPageInfo from '../../components/platform-inquiry/search-form/UserInquiriesPageInfo';
import jwt_decode from "jwt-decode";
import {Cookies} from 'react-cookie'

function UserQna() {

  const cookies = new Cookies();
  let memberNo = 0;
  const token = cookies.get('token');

  if(token) {
    const decoded = jwt_decode(token);
    memberNo = decoded.no;
  }

  const dispatch = useDispatch();
  const { inquiries , pageInfo} = useSelector(state => state.platformQnaReducer);
  useEffect(
    () => {
      dispatch(callGetInquiriesAPI({memberNo: memberNo, pageInfo: pageInfo}));
    },
    [pageInfo.page]
  );

  const navigate = useNavigate();

  const registqaHandler = () => {
    navigate('/mypage/qna/regist')
  };

  const inquiryOnClickHandler = (no) => {
    navigate(`/mypage/qna/${no}`);
    
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
    <div className={ UserQnaCSS.area}>
      <div className={ UserQnaCSS.header }>
        <label>문의 내역</label>
        <button onClick={ registqaHandler }>문의 작성</button>
        <hr/>
      </div>

      <div className={ UserQnaCSS.tablearea }>
        <table>
          <colgroup>
              <col width = "15%"/>
              <col width = "45%"/>
              <col width = "15%"/>
              <col width = "25%"/>
          </colgroup>
          <thead className={ UserQnaCSS.tablehead }>
            <th>문의 번호</th>
            <th>문의 제목</th>
            <th>답변 상태</th>
            <th>문의 날짜</th>
          </thead>
          <tbody>
            {
              inquiries.map(inquiry =>
                <tr 
                  className={ UserQnaCSS.tabledata }
                  onClick={ () => inquiryOnClickHandler(inquiry.platformInquiryNo) }  
                  key={inquiry.platformInquiryNo}
                  onMouseOver={ () => onMouseOverHandler(inquiry.platformInquiryNo)}
                  onMouseOut={ () => onMouseOutHandler(inquiry.platformInquiryNo)}
                  id={inquiry.platformInquiryNo}
                >
                  <td>{inquiry.platformInquiryNo}</td>
                  <td>{inquiry.platformInquiryTitle}</td>
                  <td>{inquiry.replyYN == 'Y'? '답변완료': '대기중'}</td>
                  <td>{inquiry.platformInquiryDate}</td>
                </tr>
                )
            }
          </tbody>
        </table>
      </div>
      <UserInquiriesPageInfo/>
    </div>
  );
}

export default UserQna;