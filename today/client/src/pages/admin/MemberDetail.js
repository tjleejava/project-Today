import AdminSidebar from "../../components/commons/AdminSidebar";
import MemberDetailCSS from './MemberDetail.module.css';
import MemberInfo from "../../components/admin/MemberInfo";
import MemberChallenges from "../../components/admin/MemberChallenges";

export default function MemberDetail() {

    return (
        <div className={ MemberDetailCSS.content }>
            <AdminSidebar/>
            <MemberInfo/>
            <MemberChallenges/>
        </div>
    );
}