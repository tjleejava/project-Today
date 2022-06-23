import { NavLink } from 'react-router-dom';

function Navbar() {

    return (
        <div>
            <ul>
                <li><NavLink to="/">메인으로</NavLink></li>
                <li><NavLink to="/menus">메뉴 목록 보기</NavLink></li>
                <li><NavLink to="/menus2">메뉴 목록 보기2</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;