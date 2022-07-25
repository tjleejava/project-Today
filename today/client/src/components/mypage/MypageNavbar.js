import MypageNavbarCSS from './MypageNavbar.module.css';
import {MypageNavLink} from './mypageNavbarElements';

function MypageNavbar() {

  return (
    <div className={ MypageNavbarCSS.area }>
      <div><br/><br/><br/></div>
      <div className={ MypageNavbarCSS.tabArea }>
        <MypageNavLink 
        style={{ textDecoration: 'none' }}
        className={ MypageNavbarCSS.tab } 
        to="/mypage/profile"
        >
            프로필
        </MypageNavLink>
      </div>
      <div className={ MypageNavbarCSS.tabArea }>
          <MypageNavLink
          style={{ textDecoration: 'none' }}
          className={ MypageNavbarCSS.tab } 
          to="/mypage/challenges"
          >
            챌린지 내역
        </MypageNavLink>
      </div>
      <div className={ MypageNavbarCSS.tabArea }>
            <MypageNavLink 
            style={{ textDecoration: 'none' }} 
            className={ MypageNavbarCSS.tab } 
            to="/mypage/penalty">
                패널티 내역
            </MypageNavLink>
      </div>
      <div className={ MypageNavbarCSS.tabArea }>
          <MypageNavLink 
          style={{ textDecoration: 'none' }}
          className={ MypageNavbarCSS.tab } 
          to="qna">문의 내역
          </MypageNavLink>
      </div>
      <div className={ MypageNavbarCSS.tabArea }>
          <MypageNavLink 
          style={{ textDecoration: 'none' }}
          className={ MypageNavbarCSS.tab } 
          to="alarm">
            알림
          </MypageNavLink>
      </div>
      <div className={ MypageNavbarCSS.tabArea }>
          <MypageNavLink 
          style={{ textDecoration: 'none' }}
          className={ MypageNavbarCSS.tab } 
          to="/mypage/following">
            팔로잉 목록
          </MypageNavLink>
      </div>
      <div className={ MypageNavbarCSS.tabArea }>
          <MypageNavLink 
          style={{ textDecoration: 'none' }}
          className={ MypageNavbarCSS.tab } 
          to="/mypage/invites">
            초대 내역
          </MypageNavLink>
      </div>
      <div className={ MypageNavbarCSS.tabArea }>
          <MypageNavLink 
          style={{ textDecoration: 'none' }}
          className={ MypageNavbarCSS.tab } 
          to="/mypage/pwd">
            비밀번호 변경
          </MypageNavLink>
      </div>
      {/* <div className={ MypageNavbarCSS.tabArea }>
          <MypageNavLink 
          style={{ textDecoration: 'none' }}
          className={ MypageNavbarCSS.tab } 
          to="/members/quitaccount">
            계정탈퇴
          </MypageNavLink>
      </div> */}
    </div>
  );
}

export default MypageNavbar;



