import ExamineRefuseCSS from './ExamineRefuse.module.css';
import { useNavigate, useParams } from 'react-router-dom';

function ExamineRefuse({category, setRefuseModalState, examineInfo}) {

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
      <div className={ ExamineRefuseCSS.answerbox }>
        <div className={ ExamineRefuseCSS.answerarea}>
          <label>심사결과</label>
          <label>{examineInfo.reportExamineCategory}</label><br/><br/><br/>
          <label>거절일</label>
          <label>{examineInfo.reportExamineDate}</label><br/><br/><br/>
          <label>거절사유</label>
          <label>{examineInfo.refuseReason}</label><br/><br/>
        </div>

      </div>
      <div className={ ExamineRefuseCSS.btnarea }>
        {/* <button>승인</button> */}
        <button onClick={ backToListHandler }>뒤로가기</button>
      </div>
    </div>
  );
};

export default ExamineRefuse;