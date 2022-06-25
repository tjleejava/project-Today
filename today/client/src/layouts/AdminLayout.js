import { Outlet } from 'react-router-dom';
import Footer from '../components/commons/Footer';
import Header from '../components/commons/Header';
import AdminNavbar from '../components/commons/AdminNavbar';


function AdminLayout() {

    return (
        <div>
            <Header/>
            <AdminNavbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default AdminLayout;