import AuthListTbl from "./AuthListTbl";
import AuthContentSideInfo from "./AuthContentSideInfo";
import AuthContentCSS from "./AuthContent.module.css";

export default function AuthContent() {

    return (
        <div>
            <div className={ AuthContentCSS.titleArea }>
                <h2 className={ AuthContentCSS.title }>인증 현황</h2>
                <hr/>
            </div>
            <div className={ AuthContentCSS.content }>
                <AuthListTbl/>
                <AuthContentSideInfo/>
            </div>
        </div>
    );
}