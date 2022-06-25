import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistChallenge from './components/challenge/regist/RegistChallenge';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Menus from './pages/Menus';
import Menus2 from './pages/Menus2';
import AdminLayout from "./layouts/AdminLayout";
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/>} >
          <Route index element={ <Main/> } />
          <Route path="menus" element={ <Menus/>} />
          <Route path="menus2" element={ <Menus2/>} />
          <Route path="registchallenge" element={ <RegistChallenge/> } />
        </Route>
        <Route path="/admin" element={ <AdminLayout/> } >
        </Route>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
