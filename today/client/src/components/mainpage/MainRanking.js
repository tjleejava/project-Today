import MainRankingCSS from './MainRanking.module.css';
import { useState } from 'react';
import HotChallengeList from './HotChallengeList';

function MainRanking() {
  const [rankinglist, setRankinglist] = useState([
    {
      path: '/'
    }
  ]);

  
  return (
    <div className={ MainRankingCSS.area } >
      <div className={ MainRankingCSS.labelarea}>
        <label className={ MainRankingCSS.label1 }>HOT</label>
        <label className={ MainRankingCSS.label2 }>CHALLENGE</label>
      </div>
        {rankinglist.map(ranking => <HotChallengeList/>)}
      {/* <div className={ MainRankingCSS.rankarea }>
      </div>
      <div className={ MainRankingCSS.rankarea }>
      </div>
      <div className={ MainRankingCSS.rankarea }>
      </div>
      <div className={ MainRankingCSS.rankarea }>
      </div> */}
    </div>
  );
}

export default MainRanking;