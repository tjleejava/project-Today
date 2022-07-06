import { NavLink } from 'react-router-dom';
import AdminHeaderCSS from "./AdminHeader.module.css";

function Header() {

    return (
        <div className={ AdminHeaderCSS.headergroup }>
            <div className={ AdminHeaderCSS.area}>
                <NavLink to="/"><img src="/images/header/todaylogo.png" className={ AdminHeaderCSS.logo }/></NavLink>
                <div className={ AdminHeaderCSS.body}>
                    <NavLink to="/admin/reports"><span className={ AdminHeaderCSS.text }>신고 관리</span></NavLink>
                    <NavLink to="/admin/inquiries"><span className={ AdminHeaderCSS.text }>문의 관리</span></NavLink>
                    <NavLink to="/admin/challenges"><span className={ AdminHeaderCSS.text }>챌린지 관리</span></NavLink>
                    <NavLink to="/admin/members"><span className={ AdminHeaderCSS.text }>회원 관리</span></NavLink>
                    <NavLink to="/logout"><span className={ AdminHeaderCSS.text }>로그아웃</span></NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;