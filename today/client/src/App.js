import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistChallenge from './components/challenge/regist/RegistChallenge';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Menus from './pages/Menus';
import Menus2 from './pages/Menus2';
import AdminLayout from "./layouts/AdminLayout";
import Login from './pages/login/Login';
import Members from "./pages/admin/Members";
import AdminMain from './pages/admin/AdminMain';
import SignUp from './pages/signup/SignUp';
import ChallengesList from './pages/ChallengeList';
import MypageNavbar from './components/mypage/MypageNavbar';
import SignLayout from './layouts/SignLayout';
import IdFind from './pages/idPwdFind/IdFind';
import PwdFind from './pages/idPwdFind/PwdFind';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/>} >
          <Route index element={ <Main/> } />
          <Route path="menus" element={ <Menus/>} />
          <Route path="menus2" element={ <Menus2/>} />
          <Route path="registchallenge" element={ <RegistChallenge/> } />
          <Route path="challenges" element={ <ChallengesList/> }/> 
          <Route path="mypage" element={ <MypageNavbar/> }>
            {/* <Route index element={ <Mypage/> } /> */}
            {/* <Route index element={ <Mypage/> } /> */}
            {/* <Route index element={ <Mypage/> } /> */}
          </Route>
        </Route>
        <Route path="/admin" element={ <AdminLayout/> } >
          <Route index element={ <AdminMain/> } />
          <Route path="members" element={ <Members/> } />
        </Route>
        <Route path="/sign" element={ <SignLayout/> }>
          <Route path="login" element={ <Login/> }/>
          <Route path="signup" element={<SignUp/>}/>
          <Route path="id" element={<IdFind/>}/>
          <Route path="pwd" element={<PwdFind/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
