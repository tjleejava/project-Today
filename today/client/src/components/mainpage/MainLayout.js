import MainLayoutCSS from './MainLayout.module.css';

function MainLayout() {
  return (
    <div className={ MainLayoutCSS.area }>
      <div className={ MainLayoutCSS.labelarea }>
        <label>오늘하루</label>
        <label>CHALLENGE</label>
      </div>
      <br/>
      <div className={ MainLayoutCSS.btnarea }>
        <button>생활</button>
        <button>운동</button>
        <button>식습관</button>
        <button>마음챙김</button>
        <button>환경</button>
      </div>
      <div className={ MainLayoutCSS.boxarea }>
        <div className={ MainLayoutCSS.challengebox }>d</div>
        <div className={ MainLayoutCSS.challengebox }>d</div>
        <div className={ MainLayoutCSS.challengebox }>d</div>
      </div>
    </div>
  );
}

export default MainLayout;