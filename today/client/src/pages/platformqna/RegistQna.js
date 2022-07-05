import axios from 'axios';
import RegistQnaCSS from './RegistQna.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function RegistQna() {
  
  const POST_TITLE = 'platform/POST_TITLE';
  const POST_CONTENT = 'platform/POST_CONTENT';

  const { registInfo } = useSelector(state => state.platformQnaReducer);
  console.log(registInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cancelHandler = () => {
    navigate('/mypage/qna');
  };

  const summitHandler = () => {
    axios.post('http://localhost:8888/inquiries')
        .then(res => console.log(res))
        .catch(err => console.log(err));
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