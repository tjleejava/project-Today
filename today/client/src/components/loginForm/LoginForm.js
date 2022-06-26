import { useState } from 'react';
import LoginFormCSS from'./LoginFormCSS.module.css';
import { Link } from 'react-router-dom';

function LoginForm() {

  const [form, setForm] = useState({
    id: '',
    password: ''
  });
  const { id, password } = form;

  const onChangeHandler = e => {
    const changedForm = {
      ...form,
      [e.target.name]: e.target.value
    }

    setForm(changedForm);
  }
  

  return (
    <>
      <div className={LoginFormCSS.container}>
        <div className={LoginFormCSS.header}>오늘 하루</div>
        <div className={LoginFormCSS.content}>
          <div className={LoginFormCSS.idInput}>
            <label>이메일</label>
            <input onChange={ onChangeHandler } name="id" type="text" value={id} placeholder='아이디 입력'/>
          </div>
          <div className={LoginFormCSS.pwdInput}>
            <label>비밀번호</label>
            <input onChange={ onChangeHandler } name="password" type='password' value={password} placeholder='비밀번호 입력'/>
          </div>
          <div className={LoginFormCSS.loginBtnArea}>
            <button className={LoginFormCSS.loginBtn}>로그인</button>
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