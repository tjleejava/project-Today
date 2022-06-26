import PwdFindFormCSS from './PwdFindFormCSS.module.css';

function PwdFindForm() {

  return(
    <>
      <div className={PwdFindFormCSS.container}>
        <pre className={PwdFindFormCSS.info}>
        가입하셨던 이메일 계정을 입력하시면 어쩌고 저쩌고<br/>
        </pre>
        <input className={PwdFindFormCSS.pwdFindEmailInput} placeholder='이메일 입력'/><br/>
        <button className={PwdFindFormCSS.pwdFindBtn}>확인</button>
      </div>
    </>
  );
};

export default PwdFindForm;