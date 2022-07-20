import { Outlet } from 'react-router-dom';
import Footer from '../components/commons/Footer';
import Header from '../components/commons/Header';
import AdminHeader from '../components/commons/AdminHeader';
import jwt_decode from "jwt-decode";
import {Cookies} from 'react-cookie'


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
            <div>
                <AdminHeader/>
                <Outlet/>
                <Footer/>
            </div>
        );
    } else {

        return (
            <div>
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        );
    }
}

export default Layout;