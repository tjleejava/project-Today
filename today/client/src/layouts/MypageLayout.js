import { Outlet } from 'react-router-dom';
import MypageNavbar from '../components/mypage/MypageNavbar';
import MypageLayoutCSS from './MypageLayout.module.css';

function MypageLayout() {

    return (
        <div className={ MypageLayoutCSS.area}>
            <div className={ MypageLayoutCSS.navbar}>
                <MypageNavbar/>
            </div>
            <Outlet/>
        </div>
    );
}

export default MypageLayout;