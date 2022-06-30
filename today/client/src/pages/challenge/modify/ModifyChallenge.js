import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { callGetChallengeInfoAPI } from '../../../apis/ChallengeAPICalls';
import JoinAmount from '../../../components/challenge/regist/JoinAmount';
import AuthDay from './AuthDay';
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
    axios.get('http://localhost:8888/challenges/test', {params : {time: time}});
  };
  
  const [time, setTime] = useState('');

  const testHDL = (e) => {
    console.log(e.target.value);
    setTime(e.target.value);
  };
  return (
    <div>
      <button onClick={test}>test</button>
      <input type='time' onChange={testHDL} value={time}/>
      <br/>
      <br/>
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
          <JoinAmount amount={ challengeInfo.challengeMaxAmount }/>
        </div>

        <div className={ ModifyChallengeCSS.checkinput}>
          <label className={ ModifyChallengeCSS.subtitle }>인증 빈도</label><br/>
          <div>
            <input readOnly id="freq-1" type="radio" value='1' checked={challengeInfo.challengeFrequency === '1'}/><label for='freq-1'>매일 인증</label>
            <input readOnly id="freq-2" type="radio" value='2' checked={challengeInfo.challengeFrequency === '2'}/><label for='freq-2'>주 3일 인증</label>
            <input readOnly id="freq-3" type="radio" value='3' checked={challengeInfo.challengeFrequency === '3'}/><label for='freq-3'>주 1일 인증</label>
          </div>
          <div>
            <AuthDay freq={challengeInfo.challengeFrequency} authDays={ authDayInfo }/>
          </div> 
        </div>
        <div className={ ModifyChallengeCSS.timeinput}>
          <label className={ ModifyChallengeCSS.subtitle }>인증 가능 시간</label><br/>
          <div>
            <label>시작 시간<input type="time" value={ challengeInfo.startTime}/></label>
            <label>종료 시간<input type="time" value={ challengeInfo.endTime}/></label>
          </div>
        </div>
        





        <div className={ RegistChallengeCSS.timeinput}>
          <label className={ RegistChallengeCSS.subtitle }>챌린지 시작일</label><br/>
          <div>
            <input onChange={ startDateChange} valur={ startDate } type="date"/>
          </div>
        </div>
        <div className={ RegistChallengeCSS.checkinput}>
          <label className={ RegistChallengeCSS.subtitle }>챌린지 기간</label><br/>
          <div>
            <input type="radio" id='term-0' value='0' checked={ term === '0' } onChange={ termOnChangeHandler }/><label for='term-0'>1주</label>
            <input type="radio" id='term-1' value='1' checked={ term === '1' } onChange={ termOnChangeHandler }/><label for='term-1'>2주</label>
            <input type="radio" id='term-2' value='2' checked={ term === '2' } onChange={ termOnChangeHandler }/><label for='term-2'>3주</label>
            <input type="radio" id='term-3' value='3' checked={ term === '3' } onChange={ termOnChangeHandler }/><label for='term-3'>4주</label>
          </div>
        </div>
        <div className={ RegistChallengeCSS.checkinput}>
          <label className={ RegistChallengeCSS.subtitle }>모집 방식</label><br/>
          <div>
            <input id='public' type="radio" value='public' checked={ scope === 'public' } onChange={ scopeOnChangeHandler }/><label for='public'>공개</label>
            <input id='prvate' type="radio" value='prvate' checked={ scope === 'prvate' } onChange={ scopeOnChangeHandler }/><label for='prvate'>비공개</label>
          </div>
        </div>




        
    </div>
  );
}

export default ModifyChallenge;