import {Cookies} from 'react-cookie'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { changePwdAPI } from '../../apis/MemberAPICalls';
import PwdModifyCSS from './PwdModifyCSS.module.css';
import { setCookie, getCookie, removeCookie} from '../../cookies/cookie';

function PwdModifyForm() {

  const cookies = new Cookies();
  const navigate = useNavigate();

  const token = cookies.get('token');
  const decoded = jwt_decode(token);
  const memberNo = decoded.no;

  const checkPassword = (pwd) => {
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/
    return regExp.test(pwd);
  }
  
  const [form, setForm] = useState({
    password: '',
    passwordConfirm: ''
  });
  const { password, passwordConfirm } = form;

  const onChangeHandler = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const onClickHandler = () => {

    const pwdRegResult = checkPassword(password);

    if((password == passwordConfirm) && (password !== null) && (pwdRegResult == true)) {
      changePwdAPI(memberNo, password)
      .then((res) => {
        console.log(res);
        if(res.status ==200) {
          alert('비밀번호가 변경되었습니다. 다시 로그인 해주세요.');
          removeCookie('token');
          const token2 = getCookie('token');
          console.log(token2)
          window.location.replace("/")

        }
      })
    } else if(password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
    } else if(pwdRegResult == false) {
      alert('영문자, 숫자를 조합하여 8~10자 이내의 비밀번호를 작성해주세요.');
    }
  }


  return(
    <div className={PwdModifyCSS.container}>
        <div className={PwdModifyCSS.header}>비밀번호 변경</div>
        <div className={PwdModifyCSS.content}>
          <div className={PwdModifyCSS.pwdInput}>
            <label>비밀번호</label>
            <input onChange={ onChangeHandler } name="password" type='password' value={password} placeholder='비밀번호 입력'/>
          </div>
          <div className={PwdModifyCSS.repwdInput}>
            <label>비밀번호 확인</label>
            <input onChange={ onChangeHandler } name="passwordConfirm" type='password' value={passwordConfirm} placeholder='비밀번호 확인 입력'/>
          </div>
          <div className={PwdModifyCSS.signUpBtnArea}>
            <input id='registBtn' type="button" onClick={ onClickHandler } className={PwdModifyCSS.signUpBtn} value='확인'/>
            <button onClick={() => { navigate(-1)}} className={PwdModifyCSS.backBtn}>뒤로가기</button>
            
          </div>
        </div>
      </div>
  )
}

export default PwdModifyForm;