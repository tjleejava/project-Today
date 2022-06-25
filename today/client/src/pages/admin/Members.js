import MemberList from "../../components/admin/MemberList";
import AdminSidebar from "../../components/commons/AdminSidebar";
import MembersCSS from "./Members.module.css";

export default function Members() {

    return (
        <div className={ MembersCSS.content }>
            <AdminSidebar/>
            <MemberList/>
        </div>
    );
}