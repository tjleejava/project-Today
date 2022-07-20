import axios from 'axios';
import RegistQnaCSS from './RegistQna.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { callPostInquiryAPI } from '../../apis/PlatformInquiryAPICalls';
import { useNavigate } from 'react-router-dom';
import getTime from '../../util/getTime';
import jwt_decode from "jwt-decode";
import {Cookies} from 'react-cookie'
import { POST_DATE, POST_TITLE, SET_MEMBER_NO, POST_CONTENT } from '../../modules/PlatformQnaModule';

function RegistQna() {
  

  const { registInfo } = useSelector(state => state.platformQnaReducer);
  
  const cookies = new Cookies();
  let memberNo = 0;
  const token = cookies.get('token');

  if(token) {
    const decoded = jwt_decode(token);
    memberNo = decoded.no;
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cancelHandler = () => {
    navigate('/mypage/qna');
  };

  const summitHandler = async () => {
    const date = getTime.getDateAndTime();

    
    await dispatch({type: POST_DATE, payload: date});
    await dispatch({type: SET_MEMBER_NO, payload: memberNo});
    
    await dispatch(callPostInquiryAPI(registInfo));
    
    alert('문의가 등록되었습니다');
    navigate('/mypage/qna');
  };

  const titleChangeHandler = (e) => {
    dispatch({type: POST_TITLE, payload: e.target.value });
  };

  const contentChangeHandler = (e) => {
    dispatch({type: POST_CONTENT, payload: e.target.value });
  };
  
  return (
    <div className={RegistQnaCSS.area}>
      <div className={RegistQnaCSS.head}>
        <h1>문의 작성</h1>
        <hr/>
      </div>
      <div className={RegistQnaCSS.body}>
        <div className={RegistQnaCSS.title}>
          <label>문의 제목</label>
          <input value={ registInfo.title } onChange={ titleChangeHandler }/><br/>
        </div>
        <div className={RegistQnaCSS.content}>
          <label>문의 내용</label>
          <textarea value={ registInfo.content } onChange={ contentChangeHandler }/><br/>
        </div>
      </div>
      <div className={RegistQnaCSS.btnarea}>
        <button onClick={ cancelHandler }>취소</button>
        <button onClick={ summitHandler }>등록</button>
      </div>

    </div>
  );
}

export default RegistQna;