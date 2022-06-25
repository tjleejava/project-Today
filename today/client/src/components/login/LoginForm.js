import './LoginForm.css';
import { Link } from 'react-router-dom';

function LoginForm() {

  return (
    <>
      <div className="container">
        <div className="login-header">오늘하루 시작하기</div>
        <div className="login-content">
          <div className="id-input">
            <label>아이디</label>
            <input type="text" placeholder='아이디 입력'/>
          </div>
          <div className='pwd-input'>
            <label>비밀번호</label>
            <input type="text" placeholder='비밀번호 입력'/>
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