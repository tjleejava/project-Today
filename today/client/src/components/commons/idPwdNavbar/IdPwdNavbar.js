import {NavLink} from './NavbarElements';
import IdPwdNavbarCSS from './IdPwdNavbarCSS.module.css';

function IdPwdNavbar() {

  return(
    <>
      <div className={IdPwdNavbarCSS.container}>
        <NavLink to="/sign/id" className={IdPwdNavbarCSS.idFind}>
          아이디 찾기
        </NavLink>
        <NavLink to="/sign/pwd" className={IdPwdNavbarCSS.pwdFind}>
          비밀번호 찾기
        </NavLink>
      </div>
      {/* <div className={IdPwdNavbarCSS.container}>
        <Link to="/sign/id" className={IdPwdNavbarCSS.idFind}>아이디 찾기</Link>
        <Link to="/sign/pwd" className={IdPwdNavbarCSS.pwdFind}>비밀번호 찾기</Link>
      </div> */}
    </>
  );
};

export default IdPwdNavbar;