import { NavLink } from 'react-router-dom';
import NavbarCSS from './AdminNavbar.module.css';

function AdminNavbar() {

    return (
        <div className={ NavbarCSS.area }>
            <div className={ NavbarCSS.body}>
                <NavLink to="/admin/reports"><span className={ NavbarCSS.text }>신고 관리</span></NavLink>
                <NavLink to="/admin/inquiries"><span className={ NavbarCSS.text }>문의 관리</span></NavLink>
                <NavLink to="/admin/challenges"><span className={ NavbarCSS.text }>챌린지 관리</span></NavLink>
                <NavLink to="/admin/members"><span className={ NavbarCSS.text }>회원 관리</span></NavLink>
                <NavLink to="/logout"><span className={ NavbarCSS.text }>로그아웃</span></NavLink>
            </div>
            <hr/>
        </div>
    );
}

export default AdminNavbar;