import './SignUpForm.css';
import { useState } from 'react';

function SignUpForm() {

  const [form, setForm] = useState({
    id: '',
    nickname: '',
    password: '',
    passwordConfirm: ''
  });

  const { id, nickname, password, passwordConfirm } = form;

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
        <div className="signUp-header">회원가입</div>
        <div className="signUp-content">
          <div className="id-input">
            <label>이메일</label>
            <input onChange={ onChangeHandler } name="id" type="text" value={id} placeholder='아이디 입력'/>
            <button className='authBtn'>인증하기</button>
            <button className='duplicateBtn'>중복확인</button>
          </div>
          <div className="nickname-input">
            <label>닉네임</label>
            <input onChange={ onChangeHandler } name="nickname" type="text" value={nickname} placeholder='닉네임 입력'/>
            <button className='duplicateBtn'>중복확인</button>
          </div>
          <div className='pwd-input'>
            <label>비밀번호</label>
            <input onChange={ onChangeHandler } name="password" type='password' value={password} placeholder='비밀번호 입력'/>
          </div>
          <div className='pwd-input'>
            <label>비밀번호 확인</label>
            <input onChange={ onChangeHandler } name="passwordConfirm" type='password' value={passwordConfirm} placeholder='비밀번호 확인 입력'/>
          </div>
          <div className="signUp-btn">
            <button className='signUpBtn'>회원가입</button>
            <button className='backBtn'>뒤로가기</button>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default SignUpForm;