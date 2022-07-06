import { NavLink } from 'react-router-dom';
import HeaderCSS from "./Header.module.css";

function Header() {

    return (
        <div className={ HeaderCSS.headergroup }>
            <div className={ HeaderCSS.area}>
                <NavLink to="/"><img src="/images/header/todaylogo.png" className={ HeaderCSS.logo }/></NavLink>
                <div className={ HeaderCSS.body}>
									<NavLink to="/menus3"><img src="/images/header/heart.png" className={ HeaderCSS.header } /></NavLink>
									<NavLink to="/mypage/alarm"><img src="/images/header/bell.png" className={ HeaderCSS.header } /></NavLink>
									<NavLink to="/mypage"><span className={ HeaderCSS.text }>마이페이지</span></NavLink>
									<NavLink to="/sign/login"><span className={ HeaderCSS.text }>로그인</span></NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;