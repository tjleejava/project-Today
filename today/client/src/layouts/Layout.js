import { Outlet } from 'react-router-dom';
import Footer from '../components/commons/Footer';
import Header from '../components/commons/Header';
import Navbar from '../components/commons/Navbar';


function Layout() {

    return (
        <div>
            <Header/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Layout;