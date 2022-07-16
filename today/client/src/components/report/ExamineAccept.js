import ExamineAcceptCSS from './ExamineAccept.module.css';
import { useNavigate, useParams } from 'react-router-dom';

function ExamineAccept({category, examineInfo}) {

  const navigate = useNavigate();

  const backToListHandler = () => {
    
    if(category === '챌린지') {
      navigate('../challenge');
    } else {
      navigate('../user');
    }
  };

  return (
    <div>
      <div className={ ExamineAcceptCSS.answerbox }>
        <div className={ ExamineAcceptCSS.answerarea}>
          <label>심사결과</label>
          <label>{examineInfo.reportExamineCategory}</label><br/><br/><br/>
          <label>승인일</label>
          <label>{examineInfo.reportExamineDate}</label><br/><br/><br/>
          {
            examineInfo.penaltyDate? 
            <div>  
              <label>개설자 패널티부여일</label>
              <label>{examineInfo.penaltyDate}일</label><br/><br/><br/>
            </div>
          : null
          }
          {
            examineInfo.challengeCancelDate? 
            <div>  
              <label>챌린지 취소일</label>
              <label>{examineInfo.challengeCancelDate}</label><br/><br/><br/>
            </div>
          : null
          }
        </div>

      </div>
      <div className={ ExamineAcceptCSS.btnarea }>
        {/* <button>승인</button> */}
        <button onClick={ backToListHandler }>뒤로가기</button>
      </div>
    </div>
  );
};

export default ExamineAccept;