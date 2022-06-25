import { useState } from 'react';
import './LoginForm.css';
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
      <div className="container">
        <div className="login-header">오늘 하루</div>
        <div className="login-content">
          <div className="id-input">
            <label>이메일</label>
            <input onChange={ onChangeHandler } name="id" type="text" value={id} placeholder='아이디 입력'/>
          </div>
          <div className='pwd-input'>
            <label>비밀번호</label>
            <input onChange={ onChangeHandler } name="password" type='password' value={password} placeholder='비밀번호 입력'/>
          </div>
          <div className="login-btn">
            <button className='loginBtn'>로그인</button>
          </div>
          <div className="sign-up">
            <Link to="/signup">
              <button className="signUpBtn">회원가입</button>
            </Link>
            <button className="findIdBtn">아이디 찾기</button>
          </div> 
        </div>
        
      </div>
    </>
  );
}

export default LoginForm;