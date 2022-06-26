import SignHeader from '../components/commons/SignHeader';
import Footer from '../components/commons/Footer';
import { Outlet } from 'react-router-dom';


function SignLayout() {

  return (

    <>
      <SignHeader/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default SignLayout;