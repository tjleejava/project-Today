import { Link } from 'react-router-dom';
import IdFindFormCSS from './IdFindFormCSS.module.css';

function IdFindForm() {

  return(
    <div className={IdFindFormCSS.container}>
      <pre className={IdFindFormCSS.info}>  
        오늘 하루는 이메일을 아이디로 사용합니다.<br/>
        소유하고 계신 계정을 입력해보세요.<br/>
        가입여부를 확인해드립니다.<br/>
      </pre>
      <input className={IdFindFormCSS.idFindEmailInput} placeholder="이메일 입력"/><br/>
      <Link to="/sign/result">
        <button className={IdFindFormCSS.idFindBtn}>확인</button>
      </Link>
    </div>
  );
};

export default IdFindForm;