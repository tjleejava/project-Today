import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { callGetChallengeInfoAPI } from '../../../apis/ChallengeAPICalls';
import ModifyChallengeCSS from './ModifyChallenge.module.css';

function ModifyChallenge() {
    
  const { challengeNo } = useParams();
    
  const { challengeInfo, authDayInfo, attachmentInfo } =  useSelector(state => state.challengesReducer);
  const navigate = useNavigate(); 

  const dispatch = useDispatch();
  const PUT_CHALLENGE_CATEGORY_NO = 'challenges/PUT_CHALLENGE_CATEGORY_NO';
  
  useEffect(
    () => {
      dispatch(callGetChallengeInfoAPI(challengeNo));
    },
    []
  );

  const categoryOnClickHandler = (e) => {
    dispatch({type: PUT_CHALLENGE_CATEGORY_NO, payload: e.target.value});
  };

  const descriptionOnChangeHandler = () => {
    
  };

  const test = () => {
    console.log(challengeInfo.challengeCategoryNo);
    console.log(typeof challengeInfo.challengeCategoryNo);
  };
  return (
    <div>
      <button onClick={test}>dsaf</button>
      <div className={ ModifyChallengeCSS.btnarea }>
        <button onClick={ categoryOnClickHandler } value='1' className={ challengeInfo.challengeCategoryNo === '1'? ModifyChallengeCSS.choosenbtn: ModifyChallengeCSS.defaultbtn }>생활</button>
        <button onClick={ categoryOnClickHandler } value='2' className={ challengeInfo.challengeCategoryNo === '2'? ModifyChallengeCSS.choosenbtn: ModifyChallengeCSS.defaultbtn }>운동</button>
        <button onClick={ categoryOnClickHandler } value='3' className={ challengeInfo.challengeCategoryNo === '3'? ModifyChallengeCSS.choosenbtn: ModifyChallengeCSS.defaultbtn }>식습관</button>
        <button onClick={ categoryOnClickHandler } value='4' className={ challengeInfo.challengeCategoryNo === '4'? ModifyChallengeCSS.choosenbtn: ModifyChallengeCSS.defaultbtn }>환경</button>
        <button onClick={ categoryOnClickHandler } value='5' className={ challengeInfo.challengeCategoryNo === '5'? ModifyChallengeCSS.choosenbtn: ModifyChallengeCSS.defaultbtn }>마음챙김</button>
      </div>
      <div >
        <label className={ ModifyChallengeCSS.subtitle }>챌린지 제목</label><br/>
        <label className={ ModifyChallengeCSS.description }>타인에게 불괘감을 주는 제목을 작성할 경우 계정 패널티를 받을 수 있습니다.</label><br/>
        <input className={ ModifyChallengeCSS.textinput} value={ challengeInfo.challengeName } 
          readOnly/><br/>
      </div>
      <div>
        <label className={ ModifyChallengeCSS.subtitle }>인증방법 입력</label><br/>
        <label className={ ModifyChallengeCSS.description }>실천여부를 알 수 있도록 구체적으로 적어주세요.</label><br/>
        <input className={ ModifyChallengeCSS.textinput} value={ challengeInfo.challengeAuthExplan } 
          onChange={ descriptionOnChangeHandler }/><br/> 
      </div>
      <div className={ ModifyChallengeCSS.checkinput}>
          <label className={ ModifyChallengeCSS.subtitle }>참여 인원수</label><br/>
          <JoinAmount amount={ amount } setAmount={ setAmount }/>
        </div>

        <div className={ ModifyChallengeCSS.checkinput}>
          <label className={ ModifyChallengeCSS.subtitle }>인증 빈도</label><br/>
          <div>
            <input id="freq-1" type="radio" value='1' checked={freq === '1'}/><label for='freq-1'>매일 인증</label>
            <input id="freq-2" type="radio" value='2' checked={freq === '2'}/><label for='freq-2'>주 3일 인증</label>
            <input id="freq-3" type="radio" value='3' checked={freq === '3'}/><label for='freq-3'>주 1일 인증</label>
          </div>
          <div>
            <AuthDay freq={freq} authDay={ authDay } setAuthDay={ setAuthDay }/>
          </div> 
        </div>
    </div>
  );
}

export default ModifyChallenge;