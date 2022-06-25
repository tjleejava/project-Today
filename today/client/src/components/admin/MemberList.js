import MemberListCSS from "./MemberList.module.css";

export default function MemberList() {

    return (
        <div className={ MemberListCSS.content }>
            <h3>전체 회원 내역</h3>
            <hr className={ MemberListCSS.line }/>
            <br/>
            <table className={ MemberListCSS.memberTbl}>
                <tr className={ MemberListCSS.header}>
                    <th>회원번호</th>
                    <th>이메일</th>
                    <th>닉네임</th>
                    <th>가입일</th>
                </tr>
                <tr className={ MemberListCSS.member }>
                    <td>10</td>
                    <td>test@gmail.com</td>
                    <td>tester</td>
                    <td>2022-06-25</td>
                </tr>
                <tr className={ MemberListCSS.member }>
                    <td>9</td>
                    <td>h9www@gmail.com</td>
                    <td>홍성원</td>
                    <td>2022-06-25</td>
                </tr>
                <tr className={ MemberListCSS.member }>
                    <td>8</td>
                    <td>h9www@gmail.com</td>
                    <td>홍성원</td>
                    <td>2022-06-25</td>
                </tr>
                <tr className={ MemberListCSS.member }>
                    <td>7</td>
                    <td>h9www@gmail.com</td>
                    <td>홍성원</td>
                    <td>2022-06-25</td>
                </tr>
                <tr className={ MemberListCSS.member }>
                    <td>6</td>
                    <td>h9www@gmail.com</td>
                    <td>홍성원</td>
                    <td>2022-06-25</td>
                </tr>
                <tr className={ MemberListCSS.member }>
                    <td>5</td>
                    <td>h9www@gmail.com</td>
                    <td>홍성원</td>
                    <td>2022-06-25</td>
                </tr>
                <tr className={ MemberListCSS.member }>
                    <td>4</td>
                    <td>h9www@gmail.com</td>
                    <td>홍성원</td>
                    <td>2022-06-25</td>
                </tr>
                <tr className={ MemberListCSS.member }>
                    <td>3</td>
                    <td>h9www@gmail.com</td>
                    <td>홍성원</td>
                    <td>2022-06-25</td>
                </tr>
                <tr className={ MemberListCSS.member }>
                    <td>2</td>
                    <td>h9www@gmail.com</td>
                    <td>홍성원</td>
                    <td>2022-06-25</td>
                </tr>
                <tr className={ MemberListCSS.member }>
                    <td>1</td>
                    <td>h9www@gmail.com</td>
                    <td>홍성원</td>
                    <td>2022-06-25</td>
                </tr>
            </table>
            <br/>
            <div className={ MemberListCSS.pagingArea }>
                <button className={ MemberListCSS.pagingBtn }>{ "<<" }</button>
                <button className={ MemberListCSS.pagingBtn }>{ "<" }</button>
                <button className={ MemberListCSS.pagingBtn }>1</button>
                <button className={ MemberListCSS.pagingBtn }>2</button>
                <button className={ MemberListCSS.pagingBtn }>3</button>
                <button className={ MemberListCSS.pagingBtn }>4</button>
                <button className={ MemberListCSS.pagingBtn }>5</button>
                <button className={ MemberListCSS.pagingBtn }>{ ">" }</button>
                <button className={ MemberListCSS.pagingBtn }>{ ">>" }</button>
            </div>
        </div>
    );
}