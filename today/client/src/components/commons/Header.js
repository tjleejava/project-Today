import { NavLink, useNavigate } from 'react-router-dom';
import HeaderCSS from "./Header.module.css";
import  Cookies  from 'universal-cookie';
import { setCookie, getCookie, removeCookie} from '../../cookies/cookie';
import AlarmHeader from './AlarmHeader';
import { checkAPI, logoutAPI } from '../../apis/AuthAPICalls';
import { useEffect, useState } from 'react'

function Header() {
  let user;
  const [loginStatus, setLoginStatus] = useState(false);

useEffect(() => {
    async function loginCheck() {
      await checkAPI()
      .then((res) => {
        console.log(res)
        if(res.status == 200) {
          setLoginStatus(true);
          console.log(res.data.user);
          user = res.data.user;
        }
      })
    }
    loginCheck();
},[loginStatus])

    const navigate = useNavigate();
    const goMainHandler = () => {
      navigate('/');
    };

    const onClickHandler = async (e) => {
		await logoutAPI()
    .then((res) => {
      console.log(res);
      if(res.status == 204) {
        console.log('동작')
        setLoginStatus(false);
        navigate('/');
      }
    })
    
		// removeCookie('token');
    //     window.location.replace("/")
    //     const token2 = getCookie('token');
    //     console.log(token2)

    };  
    
    return (
        <div className={ HeaderCSS.headergroup }>
            <div className={ HeaderCSS.area}>
                <img onClick={ goMainHandler }src="/images/header/todaylogo.png" className={ HeaderCSS.logo }/>
                <div className={ HeaderCSS.body}>
                    {(loginStatus == true)?
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