import axios from 'axios';
import RegistQnaCSS from './RegistQna.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { callPostInquiryAPI } from '../../apis/PlatformInquiryAPICalls';
import { useNavigate } from 'react-router-dom';
import getTime from '../../util/getTime';

function RegistQna() {
  
  const POST_TITLE = 'platform/POST_TITLE';
  const POST_CONTENT = 'platform/POST_CONTENT';
  const POST_DATE = 'platform/POST_DATE';

  const { registInfo } = useSelector(state => state.platformQnaReducer);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cancelHandler = () => {
    navigate('/mypage/qna');
  };

  const summitHandler = async () => {
    const date = getTime.getDateAndTime();

    
    await dispatch({type: POST_DATE, payload: date});
    
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
    <div>
      <label>제목</label>
      <input value={ registInfo.title } onChange={ titleChangeHandler }/><br/>

      <label>내용</label>
      <input value={ registInfo.content } onChange={ contentChangeHandler }/><br/>

      <button onClick={ cancelHandler }>취소</button>
      <button onClick={ summitHandler }>등록</button>

    </div>
  );
}

export default RegistQna;