import MainUserCSS from './MainUser.module.css';

function MainUser() {
  return (
    <div className={ MainUserCSS.area }>
      <div className={ MainUserCSS.greeting}>
        <label>어서오세요</label>
      </div>
      <div className={ MainUserCSS.name }>
        <label>홍성원 님</label>
      </div>
      <div className={ MainUserCSS.openchl }>
        <button>챌린지 개설하기</button>
      </div>
      
    </div>
  );
}

export default MainUser;