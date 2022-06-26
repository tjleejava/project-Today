import MainChallengeList from './MainChallengeList';
import MainLayoutCSS from './MainLayout.module.css';
import { useState } from 'react';
function MainLayout() {

  const [mainChallenges, setMainChallenges] = useState([
    {},{},{}
  ]);
  
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
        { mainChallenges.map(challenge => <MainChallengeList challenge={ challenge }/>) }
      </div>
    </div>
  );
}

export default MainLayout;