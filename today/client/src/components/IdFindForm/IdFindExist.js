import IdFindExistCSS from './IdFindExistCSS.module.css';
import { Link } from 'react-router-dom';

function IdFindExist(id) {
  console.log(id)
  return(
    <>
      <div className={IdFindExistCSS.container}>
        <h3 className={IdFindExistCSS.email}>{id.props}</h3>
        <pre className={IdFindExistCSS.info}>  
        오늘하루에 등록되어 있는 계정입니다.<br/>
        </pre>
        <Link to="/sign/login">
          <button className={IdFindExistCSS.signupBtn}>로그인</button>
        </Link>
      </div>
    </>
  );
}; 

export default IdFindExist;