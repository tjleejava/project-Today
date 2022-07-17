import MainChallengeListCSS from './MainChallengeList.module.css';
import { useNavigate } from 'react-router-dom';

function MainChallengeList({challenge}) {

  const { challengeNo, savedPath, savedName, challengeTitle, startDate, categoryName } = challenge;

  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`challenges/${challengeNo}`);
  };
  return (
    <div className={ MainChallengeListCSS.challengebox } onClick={onClickHandler}>
      <img src={ 'http://localhost:8888' + savedPath + '/'+ savedName + '.png' } className={ MainChallengeListCSS.imgbox}/>
      <div className={ MainChallengeListCSS.titlebox }>
        <label>{challengeTitle}</label>
      </div>
    </div>
  );
}

export default MainChallengeList;