import MemberInfoCSS from './MemberInfo.module.css';

export default function Memberinfo() {

    return (
        <div className={ MemberInfoCSS.content }>
            <div className={ MemberInfoCSS.profileArea }>
                <img src='/images/member/profileImg1.png'/>
                <div className={ MemberInfoCSS.info }>
                    <span>회원번호 : 44</span>
                    <br/>
                    <br/>
                    <span>닉네임 : 하루를사는괴라는나물</span>
                    <br/>
                    <br/>
                    <span>email : GwaeNamul@gmail.com</span>
                    <br/>
                    <br/>
                    <span>가입일 : 2022-06-26</span>
                </div>
            </div>
            <button className={ MemberInfoCSS.deleteBtn }>계정 삭제</button>
            <br/>
            <br/>
            <div className={ MemberInfoCSS.penaltyArea }>
                <div className={ MemberInfoCSS.penaltyHeader }>
                    <span className={ MemberInfoCSS.penaltyTitle }>패널티 현황</span>
                    <button className={ MemberInfoCSS.modifyBtn }>패널티 수정</button>
                </div>
                <div className={ MemberInfoCSS.penaltyInfo }>
                    <span className={ MemberInfoCSS.penaltyType }>강제퇴장 패널티</span>
                    <div className={ MemberInfoCSS.penaltyContent }>
                        <li>강제퇴장 횟수 : 3회</li>
                        <br/>
                        <li>패널티 : 챌린지 1일 참여 금지</li>
                    </div>
                </div>
                <div className={ MemberInfoCSS.penaltyInfo }>
                    <span className={ MemberInfoCSS.penaltyType }>신고 패널티</span>
                    <div className={ MemberInfoCSS.penaltyContent }>
                        <li>승인된 신고 횟수 : 2회</li>
                        <br/>
                        <li>패널티 : - </li>
                    </div>
                </div>
            </div>
        </div>
    );
}