import {Link} from 'react-router-dom';

function IdPwdNavbar() {

  return(
    <>
      <div>
        <Link to="/sign/id">아이디 찾기</Link>
        <Link to="/sign/pwd">비밀번호 찾기</Link>
      </div>
    </>
  );
};

export default IdPwdNavbar;