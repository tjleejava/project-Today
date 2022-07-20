import IdFindNonExistCSS from './IdFindNonExistCSS.module.css';
import { Link } from 'react-router-dom';

function IdFindNonExist(id) {
  return(
    <>
      <div className={IdFindNonExistCSS.container}>
        <h3 className={IdFindNonExistCSS.email}>{id.props}</h3>
        <pre className={IdFindNonExistCSS.info}>  
        오늘하루에 등록되어 있지 않은 계정입니다.<br/>
      </pre>
      <Link to="/sign/signup">
        <button className={IdFindNonExistCSS.signupBtn}>회원가입</button>
      </Link><br/>
      <Link to="/sign/id">
        <button className={IdFindNonExistCSS.idFindBtn}>다시 확인</button>
      </Link>
      </div>
    </>
  );
};

export default IdFindNonExist;