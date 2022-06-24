import { NavLink } from 'react-router-dom';
import UserHeader from "./UserHeader";
import HeaderCSS from "./Header.module.css";

function Header() {

    return (
        <div className={ HeaderCSS.headergroup }>
            <div className={ HeaderCSS.area}>
                <NavLink to="/"><img src="/images/header/todaylogo.png" className={ HeaderCSS.logo }/></NavLink>
                {/* <UserHeader/> */}
            </div>
            {/* <hr/> */}
            {/* <div className={ HeaderCSS.padding }></div> */}
        </div>
    );
}

export default Header;