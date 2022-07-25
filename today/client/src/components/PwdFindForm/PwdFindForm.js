import PwdFindFormCSS from './PwdFindFormCSS.module.css';
import { useState, useEffect } from 'react';
import { resetPwdAPI } from '../../apis/MemberAPICalls';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useNavigate, Navigate } from 'react-router-dom';

function PwdFindForm() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const members = useSelector(state => state.memberReducer);
  const [user, setUser] = useState({
    id: ''
  });

  useEffect(() => {
    console.log(members.isResetSuccess)
    if(members.isResetSuccess == true) {
      if(window.confirm('비밀번호 초기화가 완료되었습니다.')) {
        navigate(`/sign/login`);
      };
    } else if(members.isIdExist == false) {
      if(window.confirm('아이디가 존재하지 않습니다.')) {
        window.location.replace("/sign/pwd")
      };
    }
  },[members.isResetSuccess, members.isIdExist])

  const onChangeHandler = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  function confirmPwd() {
    console.log(members.isResetSuccess)
    if(members.isResetSuccess == true) {
      if(window.confirm('비밀번호 초기화가 완료되었습니다.')) {
        navigate(`/sign/login`);
      };
    } else {
      alert('등록된 계정이 없습니다.');
    }
  }

  async function resetPwd(email) {
    return new Promise((resolve, reject) => {
      dispatch(resetPwdAPI(email));
      
    })
  }

  const onClickHandler = async(e) => {
    const email = user.id;
    const result = await resetPwd(email);

    
      
    
    //처음 전송시에 false -> 2번째 클릭 시 true
    
  };

  return(
    <>
      <div className={PwdFindFormCSS.container}>
        <pre className={PwdFindFormCSS.info}>
        가입하셨던 이메일 계정을 입력하시면<br/>
        입력하신 메일로 임시 비밀번호를 전송해드립니다.<br/>
        </pre>
        <input onChange={ onChangeHandler } name="id" type="text" value={user.id} className={PwdFindFormCSS.pwdFindEmailInput} placeholder='이메일 입력'/><br/>
        <button onClick={ onClickHandler } className={PwdFindFormCSS.pwdFindBtn}>확인</button>
        <br></br>
        <button onClick={ () => {navigate('/sign/login')} } className={PwdFindFormCSS.pwdFindBtn}>뒤로가기</button>
      </div>
    </>
  );
}; 

export default PwdFindForm;