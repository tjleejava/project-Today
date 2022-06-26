import MemberListCSS from "./MemberList.module.css";
import MemberListTbl from "./MemberListTbl";

export default function MemberList() {

    return (
        <div className={ MemberListCSS.content }>
            <h3>전체 회원 내역</h3>
            <hr className={ MemberListCSS.line }/>
            <br/>
            <MemberListTbl/>
        </div>
    );
}