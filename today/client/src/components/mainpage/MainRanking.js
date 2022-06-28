import MainRankingCSS from './MainRanking.module.css';
import { useState } from 'react';
import HotChallengeList from './HotChallengeList';

function MainRanking() {
  const [rankinglist, setRankinglist] = useState([
    {
      path: '/images/header/todaylogo.png',
      title: '1번챌린지 제목',
      startDate: '2022-06-20',
      endDate: '2022-07-10',
      categoryName: '생활습관'
    },
    {
      path: '/images/header/todaylogo.png',
      title: '2번챌린지 제목',
      startDate: '2022-06-20',
      endDate: '2022-07-10',
      categoryName: '생활습관'
    },
    {
      path: '/images/header/todaylogo.png',
      title: '3번챌린지 제목',
      startDate: '2022-06-20',
      endDate: '2022-07-10',
      categoryName: '생활습관'
    },
    {
      path: '/images/header/todaylogo.png',
      title: '4번챌린지 제목',
      startDate: '2022-06-20',
      endDate: '2022-07-10',
      categoryName: '생활습관'
    }
  ]);

  
  return (
    <div className={ MainRankingCSS.area } >
      <div className={ MainRankingCSS.labelarea}>
        <label className={ MainRankingCSS.label1 }>HOT</label>
        <label className={ MainRankingCSS.label2 }>CHALLENGE</label>
      </div>
        {rankinglist.map(ranking => <HotChallengeList ranking={ ranking }/>)}
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