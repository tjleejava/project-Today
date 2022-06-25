import MainRankingCSS from './MainRanking.module.css';

function MainRanking() {
  return (
    <div className={ MainRankingCSS.area } >
      <div className={ MainRankingCSS.labelarea}>
        <label className={ MainRankingCSS.label1 }>HOT</label>
        <label className={ MainRankingCSS.label2 }>CHALLENGE</label>
      </div>
      <div className={ MainRankingCSS.rankarea }>
      </div>
      <div className={ MainRankingCSS.rankarea }>
      </div>
      <div className={ MainRankingCSS.rankarea }>
      </div>
      <div className={ MainRankingCSS.rankarea }>
      </div>
    </div>
  );
}

export default MainRanking;