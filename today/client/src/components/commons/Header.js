import { NavLink, useNavigate } from 'react-router-dom';
import HeaderCSS from "./Header.module.css";
import { Cookies } from 'react-cookie';
import { setCookie, getCookie, removeCookie} from '../../cookies/cookie';
import { logoutAPI } from '../../apis/MemberAPICalls';
import AlarmHeader from './AlarmHeader';

function Header() {

    const navigate = useNavigate();
    const goMainHandler = () => {
        navigate('/');
    };

    const cookies = new Cookies();

	const token = getCookie('token');


    const onClickHandler = async (e) => {
		// await logoutAPI(token);
		removeCookie('token');
        window.location.replace("/")
        const token2 = getCookie('token');
        console.log(token2)

    };  
    
    return (
        <div className={ HeaderCSS.headergroup }>
            <div className={ HeaderCSS.area}>
                <img onClick={ goMainHandler }src="/images/header/todaylogo.png" className={ HeaderCSS.logo }/>
                <div className={ HeaderCSS.body}>
                    {(getCookie('token') != undefined && getCookie('token')!= '')?
                    <div>
                        <NavLink style={{ textDecoration: 'none' }} to="/mypage/following"><img src="/images/header/heart.png" className={ HeaderCSS.header } /></NavLink>
                        <NavLink style={{ textDecoration: 'none' }} to="/mypage/alarm"><AlarmHeader/></NavLink>
                        <NavLink style={{ textDecoration: 'none' }} to="/mypage/profile"><span className={ HeaderCSS.text }>마이페이지</span></NavLink>
                        <button onClick={ onClickHandler } className={ HeaderCSS.btnText }>로그아웃</button>
                    </div>:
                    
                    <NavLink style={{ textDecoration: 'none' }} to="/sign/login"><span className={ HeaderCSS.text }>로그인</span></NavLink>}
                    {/* <NavLink to="/sign/login"><span className={ HeaderCSS.text }>로그인</span></NavLink> */}

                </div>
            </div>
        </div>
    );
}

export default Header;