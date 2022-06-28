import { useState } from 'react';
import LoginFormCSS from'./LoginFormCSS.module.css';
import { Link } from 'react-router-dom';

function LoginForm() {

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

  const onClickHandler = (e) => {
    fetch('http://localhost:8000/member/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(json => {
      sessionStorage.setItem('accessToken', json.accessToken);
      localStorage.setItem('accessToken', json.accessToken);
      window.cookieStore.get('accessToken')
      .then(obj => obj.value)
      .then(token => console.log('cookieStore accessToken: ' + token));
    });
  };

  return (
    <>
      <div className={LoginFormCSS.container}>
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
    </>
  );
}

export default LoginForm;