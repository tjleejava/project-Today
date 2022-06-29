import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistChallenge from './components/challenge/regist/RegistChallenge';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Menus from './pages/Menus';
import Menus2 from './pages/Menus2';
import Login from './pages/login/Login';
import Members from "./pages/admin/Members";
import SignUp from './pages/signup/SignUp';
import ChallengesList from './pages/challenge/list/ChallengeList';
import MemberDetail from './pages/admin/MemberDetail';
import ChallengeDetail from './pages/challenge/open/ChallengeDetail';
import MypageLayout from './layouts/MypageLayout';
import Mypage from './pages/mypage/Mypage';
import Alarm  from './pages/mypage/Alarm';
import SignLayout from './layouts/SignLayout';
import IdFind from './pages/idPwdFind/IdFind';
import PwdFind from './pages/idPwdFind/PwdFind';
import IdFindResult from './pages/idPwdFind/IdFindResult';
import AuthList from './pages/auth/AuthList';
import AuthDetail from './pages/auth/AuthDetail';

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
            <Route path=":challengeNo" >
              <Route index  element={ <ChallengeDetail/> } />
              <Route path="auth">
                <Route index element={ <AuthList/> } />
                <Route path=":authNo" element={ <AuthDetail/> } />
              </Route>
            </Route>
          </Route> 
          <Route path="mypage" element={ <MypageLayout/> }>
            <Route index element={ <Mypage/> } />
            <Route path="alarm" element={ <Alarm/> } />
          </Route>
        </Route>
        <Route path="/admin" element={ <Layout/> } >
          <Route index element={ <Main/> } />
          <Route path="members">
            <Route index element={ <Members/> } />
            <Route path=":memberNo" element={ <MemberDetail/> } />
          </Route>
        </Route>
        <Route path="/sign" element={ <SignLayout/> }>
          <Route path="login" element={ <Login/> }/>
          <Route path="signup" element={<SignUp/>}/>
          <Route path="id" element={<IdFind/>}/>
          <Route path="result" element={<IdFindResult/>}/>
          <Route path="pwd" element={<PwdFind/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
