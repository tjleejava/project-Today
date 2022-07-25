import SignUpFormCSS from'./SignUpFormCSS.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { signUpDB, checkEmail, sendEmailAPI } from '../../apis/MemberAPICalls';
import { useSelector, useDispatch } from 'react-redux';
import memberReducer, { GET_ISDISABLED } from '../../modules/MemberModule';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {

  const members = useSelector(state => state.memberReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registBtnTag = document.getElementById('registBtn');

  useEffect(() => {

    if(members.isDuplicate === false && members.isSendEmailSuccess == false) {
      alert('사용 가능합니다')
    }
    if(members.isDuplicate === true && members.authNumber != 0) {
      alert('중복되는 이메일입니다.')
    }

    if(members.isSendEmailSuccess === true && members.isDisabled === true) {
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

  const checkPassword = (pwd) => {
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/
    return regExp.test(pwd);
  }

  const onChangeHandler = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  //닉네임 채워져있기, 비밀번호 둘이 맞아야됨, 둘다 채워져있어야됨
  const onClickHandler = async (e) => {

    const id = form.id;
    const pwd = form.password;
    const nickname = form.nickname;
    const passwordConfirm = form.passwordConfirm;
    
    const pwdRegResult = checkPassword(pwd);

    console.log(pwdRegResult);

    if(pwdRegResult === true && pwd === passwordConfirm && nickname != '') {
      console.log('일치합니다.')

      await signUpDB(id, pwd, nickname);

      if(window.confirm('회원가입이 완료되었습니다.')) {
        navigate('/sign/login');
      }
    } else {
      alert('내용을 확인해주세요');
    }
  
  }

  const onClickDuplicate = async (e) => {
    const email = form.id;
    console.log(email);
    var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    const emailRegResult =  regExp.test(email);
    console.log('이메일 유효성 검증 결과 : ', regExp.test(email));

    if(emailRegResult) {
      await dispatch(checkEmail(email));
    } else {
      alert('올바르지 않은 이메일 양식입니다.');
    }

  }

  const sendEmail = async () => {
    const email = form.id;

    const emailInputTag = document.getElementById('email');

    emailInputTag.disabled = true;

    dispatch(sendEmailAPI(email));
    

  }
  const compareAuthNum = async () => {

    const authNum = members.authNumber;
    console.log(authNum);

    const inputAuthNum = form.inputAuthNum;
    console.log(inputAuthNum);

  
    if(authNum == inputAuthNum) {
      console.log('인증되었습니다.');

      const changeRegistBtnStatus = () => {

        dispatch({ type: GET_ISDISABLED, payload: false });
        if(members.isDisabled === false){
          registBtnTag.disabled = false;
  
          console.log(members.isDisabled);
        }
      };

      await changeRegistBtnStatus();
      
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
            <input onChange={ onChangeHandler } id='email' name="id" type="text" value={id} placeholder='아이디 입력'/>
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
            <input id='registBtn' type="button" onClick={ onClickHandler } className={SignUpFormCSS.signUpBtn} disabled={members.isDisabled} value='회원가입'/>
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