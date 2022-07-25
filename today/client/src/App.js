import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistChallenge from './components/challenge/regist/RegistChallenge';
import Layout from './layouts/Layout';
import Main from './pages/Main';
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
import ModifyChallenge from './pages/challenge/modify/ModifyChallenge';
import UserQna from './pages/platformqna/UserQna';
import RegistQna from './pages/platformqna/RegistQna';
import UserQnaDetail from './pages/platformqna/UserQnaDetail';
import AdminInquiry from './pages/platformqna/AdminInquiry';
import AdminInquiryDetail from './pages/platformqna/AdminInquiryDetail';
import AdminReport from './pages/report/AdminReport';
import AdminUserReport from './pages/report/AdminUserReport';
import AdminChallengeReport from './pages/report/AdminChallengeReport';
import ReportDetail from './components/report/ReportDetail';
import Following from './pages/mypage/Following';
import Invite from './pages/mypage/Invite';
import Profile from './pages/mypage/Profile';
import MypageChallenges from './pages/mypage/MypageChallenges';
import ChallengeHistory from './pages/mypage/challenge-history/ChallengeHistory';
import PenaltyHistory from './pages/mypage/penalty/PenaltyHistory';
import ChallengeInquiry from './pages/challenge/challengeInquiry/ChallengeInquiry';
import InquiryRegistForm from './pages/challenge/challengeInquiry/InquiryRegistForm';
import ChallengeInquiryDetail from './pages/challenge/challengeInquiry/ChallengeInquiryDetail';
import ChallengeInquiryModify from './pages/challenge/challengeInquiry/ChallengeInquiryModify';
import ConfirmPwd from './pages/mypage/change-pwd/ConfirmPwd';
import PwdModify from './pages/mypage/change-pwd/PwdModify';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/>} >
          <Route index element={ <Main/> } />
          <Route path="registchallenge" element={ <RegistChallenge/> } />
          <Route path="challenges">
            <Route index element={ <ChallengesList/> } />
            <Route path=":challengeNo" >
              <Route index  element={ <ChallengeDetail/> } />
              <Route path="modify" element={ <ModifyChallenge/>}/>
              <Route path="auth">
                <Route index element={ <AuthList/> } />
                <Route path=":authNo" element={ <AuthDetail/> } />
              </Route>
              <Route path="inquiry" element={<ChallengeInquiry/>}></Route>
              <Route path="inquiry/:inquiryNo" element={<ChallengeInquiryDetail/>}/>
              <Route path="inquiry/:inquiryNo/modify" element={<ChallengeInquiryModify/>}/>
              <Route path="inquiry/regist" element={<InquiryRegistForm/>}/>
            </Route>
          </Route> 
          <Route path="/mypage" element={ <MypageLayout/> }>
            <Route index element={ <Mypage/>}/>
            <Route path="profile" element={ <Profile/> } />
            <Route path="challenges" element={<MypageChallenges/>}/>
            <Route path="challenges/:challengeNo" element={<ChallengeHistory/>}/>
            <Route path="alarm" element={ <Alarm/> } />
            <Route path="following" element={ <Following/> } />
            <Route path="invites" element={ <Invite/> } />
            <Route path="qna">
              <Route index element={ <UserQna/> } />
              <Route path="regist" element={ <RegistQna/>}/>
              <Route path=":inquiryNo" element={ <UserQnaDetail/>}/>
            </Route>
            <Route path="pwd" element={ <ConfirmPwd/> }/>
            <Route path="penalty" element={<PenaltyHistory/>}></Route>
          </Route>
        </Route>
        <Route path="/admin" element={ <Layout/> } >
          <Route index element={ <Main/> } />
          <Route path="members">
            <Route index element={ <Members/> } />
            <Route path=":memberNo" element={ <MemberDetail/> } />
          </Route>
          <Route path="inquiries">
            <Route index  element={ <AdminInquiry/> }/>
            <Route path=":inquiryNo" element={ <AdminInquiryDetail/> }/>
          </Route>
          <Route path="reports">
            <Route index element={ <AdminReport/>}/>
            <Route path='user' element={ <AdminUserReport/>}/>
            <Route path='challenge' element={ <AdminChallengeReport/>}/>
            <Route path=':reportNo' element={ <ReportDetail/>}/>
          </Route>
        </Route>
        <Route path="/sign" element={ <SignLayout/> }>
          <Route path="login" element={ <Login/> }/>
          <Route path="signup" element={<SignUp/>}/>
          <Route path="id" element={<IdFind/>}/>
          <Route path="result/:resultNo" element={<IdFindResult/>}/>
          <Route path="pwd" element={<PwdFind/>}/>
          <Route path="pwd/modify" element={<PwdModify/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
