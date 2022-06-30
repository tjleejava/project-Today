import SignUpFormCSS from'./SignUpFormCSS.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { signUpDB, checkEmail, sendEmailAPI } from '../../apis/MemberAPICalls';
import { useSelector, useDispatch } from 'react-redux';
import memberReducer, { CHECK_DUPLICATE } from '../../modules/MemberModule';



function SignUpForm() {

  const members = useSelector(state => state.memberReducer);
  const dispatch = useDispatch();

  useEffect(() => {

    if(members.isDuplicate === false && members.isSendEmailSuccess == false) {
      alert('사용 가능합니다')
    }
    if(members.isDuplicate === true && members.authNumber != 0) {
      alert('중복되는 이메일입니다.')
    }

    if(members.isSendEmailSuccess === true) {
      alert('인증번호가 전송되었습니다.');
    }

    console.log(members.isDuplicate);

  }, [members])

  const [form, setForm] = useState({
    id: '',
    nickname: '',
    password: '',
    passwordConfirm: '',
    inputAuthNum: ''
  });

  const { id, nickname, password, passwordConfirm, inputAuthNum } = form;

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
    const passwordConfirm = form.passwordConfirm;

    console.log(`id : ${id}`)
    console.log(`pwd : ${pwd}`)
    console.log(`nickname : ${nickname}`)

    if(pwd === passwordConfirm) {
      console.log('일치합니다.')
      signUpDB(id, pwd, nickname);
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }

    
  }

  const onClickDuplicate = async (e) => {
    const email = form.id;
    console.log(email);
    
    await dispatch(checkEmail(email))
    

  }

  const sendEmail = async () => {
    const email = form.id;
    dispatch(sendEmailAPI(email));
    

  }
  const compareAuthNum = async () => {

    const authNum = members.authNumber;
    console.log(authNum);

    const inputAuthNum = form.inputAuthNum;
    console.log(inputAuthNum);

    if(authNum == inputAuthNum) {
      console.log('인증되었습니다.');
    } else {
      console.log('인증번호가 다릅니다.');
    }


  }



  return (
    <>
      <div className={SignUpFormCSS.container}>
        <div className={SignUpFormCSS.header}>회원가입</div>
        <div className={SignUpFormCSS.content}>
          <div id="emailInputArea" className={SignUpFormCSS.idInput}>
            <label>이메일</label>
            <input onChange={ onChangeHandler } name="id" type="text" value={id} placeholder='아이디 입력'/>
            <button id="emailDuplicateBtn" onClick={ onClickDuplicate } className={SignUpFormCSS.duplicateBtn}>중복확인</button>
            <button style={members.isDuplicate ? {display: 'none'} : {display:'inline-block'}} id="authenticationBtn" onClick={ sendEmail }  className={SignUpFormCSS.emailAuthBtn}>인증하기</button>
          </div>
          <div style={ members.isSendEmailSuccess ? {display: 'grid'} : {display:'none'}} id="authInputArea" className={SignUpFormCSS.authInput}>
            <label>인증번호</label>
            <input onChange={ onChangeHandler } name="inputAuthNum" type="number" value={inputAuthNum} placeholder='인증번호 입력'/>
            <button id="authenticationBtn" onClick={ compareAuthNum }  className={SignUpFormCSS.authBtn}>인증하기</button>
          </div>
          <div className={SignUpFormCSS.nicknameInput}>
            <label>닉네임</label>
            <input onChange={ onChangeHandler } name="nickname" type="text" value={nickname} placeholder='닉네임 입력'/>
            {/* <button className={SignUpFormCSS.duplicateBtn}>중복확인</button> */}
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