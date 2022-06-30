import moment from "moment";
import AuthContentSideInfoCSS from "./AuthContentSideInfo.module.css";

export default function AuthContentSideInfo() {

    const today = moment(new Date()).format("YYYY년 MM월 DD일");

    return (
        <div className={ AuthContentSideInfoCSS.sideArea }>
            <div className={ AuthContentSideInfoCSS.date }>{ today }</div>
            <div className={ AuthContentSideInfoCSS.authStatusText }><span className={ AuthContentSideInfoCSS.text }>미확인된 인증이 </span><span className={ AuthContentSideInfoCSS.count }>4</span><span className={ AuthContentSideInfoCSS.text }> 개 입니다!</span></div>
            <div className={ AuthContentSideInfoCSS.authStatus }><label className={ AuthContentSideInfoCSS.text }>승인 : </label><span className={ AuthContentSideInfoCSS.count }>1</span><span className={ AuthContentSideInfoCSS.text }> 개</span></div>
            <div><label className={ AuthContentSideInfoCSS.text }>거절 : </label><span className={ AuthContentSideInfoCSS.count }>1</span><span className={ AuthContentSideInfoCSS.text }> 개</span></div>
        </div>
    );
}