import { Outlet } from 'react-router-dom';
import Footer from '../components/commons/Footer';
import Header from '../components/commons/Header';
import AdminHeader from '../components/commons/AdminHeader';
import jwt_decode from "jwt-decode";
import {Cookies} from 'react-cookie'
import LayoutCSS from './LayoutCSS.module.css';


function Layout() {

    const cookies = new Cookies();
    let isAdmin = false;
    const token = cookies.get('token');
    console.log(token);
    if(token) {
      const decoded = jwt_decode(token);
      const role = decoded.memberRole;
      isAdmin = (role == 'ROLE_ADMIN');
    }

    if(isAdmin) {

        return (
            <div className={LayoutCSS.wrapper}>
                <AdminHeader/>
                <Outlet/>
                <Footer className={LayoutCSS.footer}/>
            </div>
        );
    } else {

        return (
            <div>
                <div className={LayoutCSS.wrapper}>
                    <Header/>
                    <Outlet/>
                    <Footer className={LayoutCSS.footer}/>
                </div>
            </div>
        );
    }
}

export default Layout;