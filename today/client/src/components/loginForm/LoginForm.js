import { useState } from 'react';
import LoginFormCSS from'./LoginFormCSS.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI } from '../../apis/MemberAPICalls';
import { setCookie, getCookie} from '../../cookies/cookie';

function LoginForm() {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: '',
    password: ''
  });

  const onChangeHandler = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onClickHandler = async(e) => {
    const id = user.id;
    const password = user.password;

    await loginAPI(id, password)
    .then((res) => {
      console.log(res);
      const generatedToken = res.data.token
      if(generatedToken != undefined && generatedToken != null) {
        setCookie('token', generatedToken, {
          path:"/",
            secure:true,
            sameSite:'none',
        })
        navigate('/');
      } else {
        alert('이메일과 비밀번호를 확인해 주세요.')
      }
    })
    
  };

  return (
    <>
      <div className={LoginFormCSS.container}>
        <div>
          <div className={LoginFormCSS.header}>오늘 하루</div>
          <div className={LoginFormCSS.content}>
            <div className={LoginFormCSS.idInput}>
              <label>이메일</label>
              <input onChange={ onChangeHandler } name="id" type="text" value={user.id} placeholder='아이디 입력'/>
            </div>
            <div className={LoginFormCSS.pwdInput}>
              <label>비밀번호</label>
              <input onChange={ onChangeHandler } name="password" type='password' value={user.password} placeholder='비밀번호 입력'/>
            </div>
            <div className={LoginFormCSS.loginBtnArea}>
              <button onClick={ onClickHandler } className={LoginFormCSS.loginBtn}>로그인</button>
            </div>
            <div className={LoginFormCSS.signUpArea}>
              <Link to="/sign/signup">
                <button className={LoginFormCSS.signUpBtn}>회원가입</button>
              </Link>
              <Link to="/sign/id">
                <button className={LoginFormCSS.findIdBtn}>아이디 찾기</button>
              </Link>
            </div> 
          </div>
        </div>
        <div className={LoginFormCSS.homeBtnBox}>
          <button onClick={ () => { navigate('/')}} className={LoginFormCSS.homeBtn}>홈으로</button>
        </div>
      </div>
    </>
  );
}

export default LoginForm;