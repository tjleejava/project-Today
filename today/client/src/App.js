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
import MemberDetail from './pages/admin/MemberDetail';
import ChallengeDetail from './pages/challenge/open/ChallengeDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/>} >
          <Route index element={ <Main/> } />
          <Route path="menus" element={ <Menus/>} />
          <Route path="menus2" element={ <Menus2/>} />
          <Route path="registchallenge" element={ <RegistChallenge/> } />
          <Route path="challenges">
            <Route index element={ <ChallengesList/> } />
            <Route path=":challengeNo" element={ <ChallengeDetail/> } />
          </Route> 
          <Route path="mypage" element={ <MypageNavbar/> }>
            {/* <Route index element={ <Mypage/> } /> */}
            {/* <Route index element={ <Mypage/> } /> */}
            {/* <Route index element={ <Mypage/> } /> */}
          </Route>
        </Route>
        <Route path="/admin" element={ <AdminLayout/> } >
          <Route index element={ <AdminMain/> } />
          <Route path="members">
            <Route index element={ <Members/> } />
            <Route path=":memberNo" element={ <MemberDetail/> } />
          </Route>
        </Route>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
