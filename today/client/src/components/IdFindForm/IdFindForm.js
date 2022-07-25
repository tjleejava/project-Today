import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import IdFindFormCSS from './IdFindFormCSS.module.css';
import { findId } from '../../apis/MemberAPICalls';
import { useSelector, useDispatch } from 'react-redux';

function IdFindForm() {
  
  const members = useSelector(state => state.memberReducer);
  const dispatch = useDispatch();
  const { responseResult } = useParams();
  const [user, setUser] = useState({
    id: ''
  });
  // const [resultNo, setResultNo] = useState(0)
  const navigate = useNavigate();

  useEffect(() => {
    const resultNo = members.resultNo;
    const id = user.id;

    if(resultNo == 0 || resultNo == 1) {
      navigate(`/sign/result/${members.resultNo}=${id}`);
    }
  },[members.resultNo])
  const onChangeHandler = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  // const setResultNoHandler = (result) => {
  //   console.log(result);
  //   setResultNo((prevResultNo) => {
  //     return [...prevResultNo, result]
  //   });
  // }

  const onClickHandler = async(e) => {
    const id = user.id;

    const response = await dispatch(findId(id));
    const resultNo = members.resultNo;
    console.log(members.resultNo);
    // await setResultNoHandler(response.data.results);
    
    
    const EXIST_ID = 1;
    const NON_EXIST_ID = 0;
    

    
  };

  return(
    <div className={IdFindFormCSS.container}>
      <pre className={IdFindFormCSS.info}>  
        오늘 하루는 이메일을 아이디로 사용합니다.<br/>
        소유하고 계신 계정을 입력해보세요.<br/>
        가입여부를 확인해드립니다.<br/>
      </pre>
      <input onChange={ onChangeHandler } name="id" type="text" value={user.id} className={IdFindFormCSS.idFindEmailInput} placeholder="이메일 입력"/><br/>
      {/* <Link to={`/sign/result/${resultNo.resultNo}`}> */}
        <button onClick={ onClickHandler } className={IdFindFormCSS.idFindBtn}>확인</button>
      {/* </Link> */}
      <br></br>
      <button onClick={ () => {navigate('/sign/login')} } className={IdFindFormCSS.idFindBtn}>뒤로가기</button>
    </div>
  );
};

export default IdFindForm;