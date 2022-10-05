import HotChallengeListCSS from './HotChallengeList.module.css';
import { useNavigate } from 'react-router-dom';
function HotChallengeList({ranking}) {

  const { challengeNo, savedPath, savedName, challengeTitle, startDate, categoryName } = ranking;
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`challenges/${challengeNo}`)
  };
  return (
    <div className={ HotChallengeListCSS.rankarea } onClick={ onClickHandler}>
      <div className={ HotChallengeListCSS.rankbox }>
        <div>
          <img src={ 'http://localhost:8888' + savedPath + '/'+ savedName + '.png' } className={ HotChallengeListCSS.imgarea }/>
        </div>
        <div className={ HotChallengeListCSS.contentarea}>
          <label className={HotChallengeListCSS.title}>{challengeTitle}</label><br/><br/>
          <label>시작일 : {startDate}</label><br/>
          <label>카테고리 : {categoryName}</label><br/>
        </div>
      </div>
    </div>
  );
}

export default HotChallengeList;