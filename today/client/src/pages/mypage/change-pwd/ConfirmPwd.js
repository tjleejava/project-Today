import ConfirmPwdCSS from './ConfirmPwdCSS.module.css';
import { useState, useEffect } from 'react';
import { confirmPwdAPI } from '../../../apis/MemberAPICalls';
import jwt_decode from "jwt-decode";
import {Cookies} from 'react-cookie'
import { useNavigate } from 'react-router-dom';

function ConfirmPwd() {

  const cookies = new Cookies();
  const navigate = useNavigate();

  const token = cookies.get('token');
  const decoded = jwt_decode(token);
  const memberNo = decoded.no;

  const [pwd, setPwd] = useState('');
  const onChangeHandler = (e) => {
    setPwd(e.target.value);
    console.log(pwd);
    
  }

  const onClickHandler = () => {
    console.log(pwd);
    confirmPwdAPI(memberNo, pwd)
    .then((res) => {
      console.log(res);
      if(res.status == 200) {
        navigate('/sign/pwd/modify');
      } else {
        alert('비밀번호를 확인해주세요');
      }
    });
  }

  return (
    <>
      <div className={ConfirmPwdCSS.container}>
        <pre className={ConfirmPwdCSS.info}>
        현재 비밀번호를 입력해주세요.<br/>
        </pre>
        <input type='password' onChange={ onChangeHandler } name="pwd" className={ConfirmPwdCSS.pwdInput} placeholder='비밀번호 입력'/><br/>
        <button onClick={ onClickHandler } className={ConfirmPwdCSS.pwdBtn}>확인</button>
      </div>
    </>
  )
}

export default ConfirmPwd;