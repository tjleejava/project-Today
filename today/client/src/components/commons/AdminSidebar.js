import SidebarCSS from "./AdminSidebar.module.css";
import { NavLink } from 'react-router-dom';

export default function AdminSidebar() {

    return (
        <div className={ SidebarCSS.area }>
            <div className={ SidebarCSS.tabArea }>
                <NavLink className={ SidebarCSS.tab } to="/admin/members">회원 관리</NavLink>
            </div>
            <div className={ SidebarCSS.tabArea }>
                <NavLink className={ SidebarCSS.tab } to="/admin/challenges">챌린지 관리</NavLink>
            </div>
            <div className={ SidebarCSS.tabArea }>
                <NavLink className={ SidebarCSS.tab } to="/admin/inquiries">문의 관리</NavLink>
            </div>
            <div className={ SidebarCSS.tabArea }>
                <NavLink className={ SidebarCSS.tab } to="/admin/reports">신고 관리</NavLink>
            </div>
        </div>
    );
}