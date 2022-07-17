import { Link, Outlet } from 'react-router-dom';
import Footer from '../components/commons/Footer';
import Header from '../components/commons/Header';
import AdminHeader from '../components/commons/AdminHeader';
import Navbar from '../components/commons/Navbar';


function Layout() {

    if(true) {

        return (
            <div>
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        );
    } else {
        return (
            <div>
                <AdminHeader/>
                <Outlet/>
                <Footer/>
            </div>
        );
    }
}

export default Layout;