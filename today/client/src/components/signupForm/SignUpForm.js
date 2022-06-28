import SignUpFormCSS from'./SignUpFormCSS.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { signUpDB, checkEmail } from '../../apis/MemberAPICalls';
import { useSelector, useDispatch } from 'react-redux';


function SignUpForm() {

  const menbers = useSelector(state => state.memberReducer);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    id: '',
    nickname: '',
    password: '',
    passwordConfirm: ''
  });

  const { id, nickname, password, passwordConfirm } = form;

  const onChangeHandler = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const onClickHandler = (e) => {

    const id = form.id;
    const pwd = form.password;
    const nickname = form.nickname;

    console.log(`id : ${id}`)
    console.log(`pwd : ${pwd}`)
    console.log(`nickname : ${nickname}`)

    signUpDB(id, pwd, nickname);
    
  }

  const onClickDuplicate = (e) => {

    
    const email = form.id;
    console.log(email);
    
    checkEmail(email);
  }

  return (
    <>
      <div className={SignUpFormCSS.container}>
        <div className={SignUpFormCSS.header}>회원가입</div>
        <div className={SignUpFormCSS.content}>
          <div className={SignUpFormCSS.idInput}>
            <label>이메일</label>
            <input onChange={ onChangeHandler } name="id" type="text" value={id} placeholder='아이디 입력'/>
            <button onClick={ onClickDuplicate } className={SignUpFormCSS.duplicateBtn}>중복확인</button>
            <button className={SignUpFormCSS.authBtn}>인증하기</button>
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
            <button onClick={ onClickHandler } className={SignUpFormCSS.signUpBtn}>회원가입</button>
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