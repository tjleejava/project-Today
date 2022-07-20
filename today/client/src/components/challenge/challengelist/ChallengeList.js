import ChallengeListCSS from './ChallengeList.module.css';
import {useNavigate} from 'react-router-dom';

function ChallengeList({challenge}) {

  const navigate = useNavigate();
  const { challengeNo,currentAmount, maxAmount, challengeTitle, savedPath, savedName, startDate, statusName} = challenge;
  
  const onClickHandler = () => {
    navigate(`/challenges/${challengeNo}`);
  };

  return (
    <div className={ChallengeListCSS.challengeContainer} onClick={ onClickHandler }>
      <img src={ 'http://localhost:8888' + savedPath + '/'+ savedName + '.png'} width="300px" height="180px"/>
      <div className={ChallengeListCSS.challengeTitleArea}> 
        <div className={ChallengeListCSS.challengeStatus}>
          {statusName}
        </div>
        <div className={ChallengeListCSS.challengeTitle}>
          &nbsp;&nbsp;{ challengeTitle } 
        </div>
      </div>
      <div className={ChallengeListCSS.challengeInfoArea}>
        <label className={ChallengeListCSS.duration}>
          시작일 : {startDate}
        </label>
        <div className={ChallengeListCSS.participant}>
        참여인원 : {currentAmount} / {maxAmount}
        </div>
      </div>
    </div>
  );
};

export default ChallengeList;