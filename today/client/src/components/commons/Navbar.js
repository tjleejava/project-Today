import { NavLink } from 'react-router-dom';
import NavbarCSS from './Navbar.module.css';

function Navbar() {

    return (
        <div>
            <div className={ NavbarCSS.body}>
                <NavLink to="/menus3"><img src="/images/header/heart.png" className={ NavbarCSS.header } /></NavLink>
                <NavLink to="/menus"><img src="/images/header/bell.png" className={ NavbarCSS.header } /></NavLink>
                <NavLink to="/menus2"><span className={ NavbarCSS.text }>마이페이지</span></NavLink>
                <NavLink to="/menus2"><span className={ NavbarCSS.text }>로그아웃</span></NavLink>
            </div>
            <hr/>
        </div>
    );
}

export default Navbar;