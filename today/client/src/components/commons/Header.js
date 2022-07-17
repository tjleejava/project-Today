import { NavLink } from 'react-router-dom';
import HeaderCSS from "./Header.module.css";
import { Cookies } from 'react-cookie';
import { setCookie, getCookie} from '../../cookies/cookie';
import { logoutAPI } from '../../apis/MemberAPICalls';
import { Link, useNavigate } from 'react-router-dom';

function Header() {

    const cookies = new Cookies();
		const navigate = useNavigate();

    console.log(getCookie('token'));
		const token = getCookie('token');

    const onClickHandler = async (e) => {
			await logoutAPI(token);
			// navigate('/');

    };
    

    return (
        <div className={ HeaderCSS.headergroup }>
            <div className={ HeaderCSS.area}>
                <NavLink to="/"><img src="/images/header/todaylogo.png" className={ HeaderCSS.logo }/></NavLink>
                <div className={ HeaderCSS.body}>
									<NavLink to="/menus3"><img src="/images/header/heart.png" className={ HeaderCSS.header } /></NavLink>
									<NavLink to="/menus"><img src="/images/header/bell.png" className={ HeaderCSS.header } /></NavLink>

									<NavLink to="/mypage"><span className={ HeaderCSS.text }>마이페이지</span></NavLink>
                                    {(getCookie('token') != undefined && getCookie('token')!= null)?
                                    <button onClick={ onClickHandler } className={ HeaderCSS.btnText }>로그아웃</button>:
                                    <NavLink to="/sign/login"><span className={ HeaderCSS.text }>로그인</span></NavLink>}
									{/* <NavLink to="/sign/login"><span className={ HeaderCSS.text }>로그인</span></NavLink> */}
                </div>
            </div>
            {/* <hr/> */}
            {/* <div className={ HeaderCSS.padding }></div> */}
        </div>
    );
}

export default Header;