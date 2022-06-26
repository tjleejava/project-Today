import SignUpFormCSS from'./SignUpFormCSS.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <div className={SignUpFormCSS.container}>
        <div className={SignUpFormCSS.header}>회원가입</div>
        <div className={SignUpFormCSS.content}>
          <div className={SignUpFormCSS.idInput}>
            <label>이메일</label>
            <input onChange={ onChangeHandler } name="id" type="text" value={id} placeholder='아이디 입력'/>
            <button className={SignUpFormCSS.authBtn}>인증하기</button>
            <button className={SignUpFormCSS.duplicateBtn}>중복확인</button>
          </div>
          <div className={SignUpFormCSS.nicknameInput}>
            <label>닉네임</label>
            <input onChange={ onChangeHandler } name="nickname" type="text" value={nickname} placeholder='닉네임 입력'/>
            <button className={SignUpFormCSS.duplicateBtn}>중복확인</button>
          </div>
          <div className={SignUpFormCSS.pwdInput}>
            <label>비밀번호</label>
            <input onChange={ onChangeHandler } name="password" type='password' value={password} placeholder='비밀번호 입력'/>
          </div>
          <div className={SignUpFormCSS.repwdInput}>
            <label>비밀번호 확인</label>
            <input onChange={ onChangeHandler } name="passwordConfirm" type='password' value={passwordConfirm} placeholder='비밀번호 확인 입력'/>
          </div>
          <div className={SignUpFormCSS.signUpBtnArea}>
            <button className={SignUpFormCSS.signUpBtn}>회원가입</button>
            <Link to="/sign/login">
              <button className={SignUpFormCSS.backBtn}>뒤로가기</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpForm;