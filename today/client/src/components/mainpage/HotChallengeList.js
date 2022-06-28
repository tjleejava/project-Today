import HotChallengeListCSS from './HotChallengeList.module.css';

function HotChallengeList(props) {
  const ranking = props;
  console.log(ranking);
  const { path, title, startDate, endDate, categoryName } = ranking.ranking;
  
  
  return (
    <div className={ HotChallengeListCSS.rankarea }>
      <div className={ HotChallengeListCSS.rankbox }>
        <div>
          <img src={ path } className={ HotChallengeListCSS.imgarea }/>
        </div>
        <div>
          <label>{title}</label><br/>
          <label>{startDate}</label><br/>
          <label>{endDate}</label><br/>
          <label>{categoryName}</label><br/>
        </div>
      </div>
    </div>
  );
}

export default HotChallengeList;