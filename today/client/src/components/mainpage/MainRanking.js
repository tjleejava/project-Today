import MainRankingCSS from './MainRanking.module.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HotChallengeList from './HotChallengeList';
import {getRankingsAPI} from '../../apis/MainpageAPICalls';

function MainRanking() {
  const {rankinglist} = useSelector(state => state.mainpageReducer);

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getRankingsAPI());
    },[]
  );
  
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