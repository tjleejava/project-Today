import MypageNavbarCSS from './MypageNavbar.module.css';
import {NavLink} from './NavbarElements';

function MypageNavbar() {

  return (
    <div className={ MypageNavbarCSS.area }>
      <div><br/><br/><br/></div>
      <div className={ MypageNavbarCSS.tabArea }>
          <NavLink className={ MypageNavbarCSS.tab } to="/mypage/challenges">챌린지 내역</NavLink>
      </div>
      <div className={ MypageNavbarCSS.tabArea }>
          <NavLink className={ MypageNavbarCSS.tab } to="">패널티 내역</NavLink>
      </div>
      <div className={ MypageNavbarCSS.tabArea }>
          <NavLink className={ MypageNavbarCSS.tab } to="qna">문의 내역</NavLink>
      </div>
      <div className={ MypageNavbarCSS.tabArea }>
          <NavLink className={ MypageNavbarCSS.tab } to="/mypage/alarm">알림</NavLink>
      </div>
      <div className={ MypageNavbarCSS.tabArea }>
          <NavLink className={ MypageNavbarCSS.tab } to="/mypage/following">팔로잉 목록</NavLink>
      </div>
      <div className={ MypageNavbarCSS.tabArea }>
          <NavLink className={ MypageNavbarCSS.tab } to="/mypage/invites">초대 내역</NavLink>
      </div>
      <div className={ MypageNavbarCSS.tabArea }>
          <NavLink className={ MypageNavbarCSS.tab } to="">비밀번호 변경</NavLink>
      </div>
      <div className={ MypageNavbarCSS.tabArea }>
          <NavLink className={ MypageNavbarCSS.tab } to="">계정탈퇴</NavLink>
      </div>
    </div>
  );
}

export default MypageNavbar;



