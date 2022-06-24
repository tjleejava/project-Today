import UserHeaderCSS from './UserHeader.module.css';

function UserHeader() {

  return (
    <div className={ UserHeaderCSS.headergroup }>
      <img src="/images/header/heart.png" className={ UserHeaderCSS.header } />
      <img src="/images/header/bell.png" className={ UserHeaderCSS.header } />
      <span className={ UserHeaderCSS.text }>마이페이지</span>
      <span className={ UserHeaderCSS.text }>로그아웃</span>
    </div>
  );
}

export default UserHeader;