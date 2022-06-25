import { NavLink } from 'react-router-dom';
import NavbarCSS from './Navbar.module.css';

function AdminNavbar() {

    return (
        <div>
            <div className={ NavbarCSS.body}>
                <NavLink to="/reports"><span className={ NavbarCSS.text }>신고 관리</span></NavLink>
                <NavLink to="/inquiries"><span className={ NavbarCSS.text }>문의 관리</span></NavLink>
                <NavLink to="/challenges"><span className={ NavbarCSS.text }>챌린지 관리</span></NavLink>
                <NavLink to="/members"><span className={ NavbarCSS.text }>회원 관리</span></NavLink>
                <NavLink to="/logout"><span className={ NavbarCSS.text }>로그아웃</span></NavLink>
            </div>
            <hr/>
        </div>
    );
}

export default AdminNavbar;