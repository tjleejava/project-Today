import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { callGetInquiriesAPI } from '../../apis/PlatformInquiryAPICalls';
import UserQnaCSS from './UserQna.module.css';

function UserQna() {

  const dispatch = useDispatch();
  const { inquiries } = useSelector(state => state.platformQnaReducer);
  useEffect(
    () => {dispatch(callGetInquiriesAPI())},
    []
  );

  const navigate = useNavigate();

  const registqaHandler = () => {
    navigate('/mypage/qna/regist')
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
            <th>문의 상태</th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
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