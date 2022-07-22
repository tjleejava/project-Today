import MyPageChallengeListCSS from'./MyPageChallengeListCSS.module.css';
import {useNavigate} from 'react-router-dom';

function MyPageChallengeList({challenge}) {
  const navigate = useNavigate();
  const { challengeNo,currentAmount, maxAmount, challengeTitle, savedPath, savedName, startDate, statusName, challengeTerm} = challenge;

  //종료일 구하는 과정
  let startDateArray = startDate.split('-');
  console.log(startDateArray);
  let changeStartDateFormat = new Date(startDateArray[0], startDateArray[1]-1, startDateArray[2]);
  console.log(changeStartDateFormat);
  let endDate = new Date(changeStartDateFormat);
  endDate.setDate(changeStartDateFormat.getDate() + parseInt(challengeTerm) * 7);
  console.log(endDate.toLocaleString());
  var year = endDate.getFullYear();
  var month = ('0' + (endDate.getMonth() + 1)).slice(-2);
  var day = ('0' + endDate.getDate()).slice(-2);
  let changeEndDateFormat = year + '-' + month  + '-' + day;

  const onClickHandler = () => {
    navigate(`/mypage/challenges/${challengeNo}`);
  };

  return (
    <div className={MyPageChallengeListCSS.challengeContainer} onClick={ onClickHandler }>
      <img src={ 'http://localhost:8888' + savedPath + '/'+ savedName + '.png'} width="300px" height="180px"/>
      <div className={MyPageChallengeListCSS.challengeTitleArea}> 
        <div className={MyPageChallengeListCSS.challengeStatus}>
          {statusName}
        </div>
        <div className={MyPageChallengeListCSS.challengeTitle}>
          &nbsp;&nbsp;{ challengeTitle } 
        </div>
      </div>
      <div className={MyPageChallengeListCSS.challengeInfoArea}>
        <label className={MyPageChallengeListCSS.duration}>
          시작 : {startDate}
        </label>
        <label className={MyPageChallengeListCSS.endDate}>
          종료 : {changeEndDateFormat}
        </label>
      </div>
    </div>
  );
}

export default MyPageChallengeList;