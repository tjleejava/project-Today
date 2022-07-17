import { NavLink, useNavigate } from 'react-router-dom';
import HeaderCSS from "./Header.module.css";

function Header() {

    const navigate = useNavigate();
    const goMainHandler = () => {
        navigate('/');
    };
    return (
        <div className={ HeaderCSS.headergroup }>
            <div className={ HeaderCSS.area}>
                <img onClick={ goMainHandler }src="/images/header/todaylogo.png" className={ HeaderCSS.logo }/>
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