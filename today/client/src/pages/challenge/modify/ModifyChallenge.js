import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { callGetChallengeInfoAPI, modifyChallengeAPI, registChallengeImagesAPI } from '../../../apis/ChallengeAPICalls';
import ModifyAttachments from '../../../components/challenge/modify/ModifyAttachments';
import JoinAmount from '../../../components/challenge/regist/JoinAmount';
import { PUT_END_TIME, PUT_START_TIME, PUT_CHALLENGE_DESCRIPTION, PUT_CHALLENGE_INFO, PUT_CHALLENGE_CATEGORY_NO, SET_MODIFY_ATTACHMENT } from '../../../modules/ChallengesModule';
import AuthDay from './AuthDay';
import ModifyChallengeCSS from './ModifyChallenge.module.css';

function ModifyChallenge() {
    
  const { challengeNo } = useParams();
    
  const { challengeInfo, authDayInfo, attachmentInfo, modifyAttachment } =  useSelector(state => state.challengesReducer);
  const navigate = useNavigate(); 

  const dispatch = useDispatch();
  
  const imageInput1 = useRef();
  const imageInput2 = useRef();
  const imageInput3 = useRef();
  const imageInput4 = useRef();

  const modifyHandler = async () => {

    for(let i = 0; i < modifyAttachment.length; i++) {

      if(modifyAttachment[i].path) {
      const result = await registChallengeImagesAPI({inputFile: modifyAttachment[i].formData, index: i});

      dispatch({type: SET_MODIFY_ATTACHMENT, payload: {data: result, index: i}});
      }
    }


    await modifyChallengeAPI({challenge: challengeInfo, attachments: modifyAttachment});

     await alert('챌린지 수정 완료!');
     await window.location.replace(`/challenges/${challengeNo}`);
  };

  
  
  useEffect(
    () => {
      dispatch(callGetChallengeInfoAPI(challengeNo));
    },
    []
  );

  const categoryOnClickHandler = (e) => {
    dispatch({type: PUT_CHALLENGE_CATEGORY_NO, payload: e.target.value});
  };

  const descriptionOnChangeHandler = (e) => {
    dispatch({type: PUT_CHALLENGE_DESCRIPTION, payload: e.target.value});
  };

  const startTimeChangeHandler = (e) => {
    dispatch({type: PUT_START_TIME, payload: e.target.value});
  };
  
  const endTimeChangeHandler = (e) => {
    dispatch({type: PUT_END_TIME, payload: e.target.value});
  };
  
  const infoChangeHandler = (e) => {
    dispatch({type: PUT_CHALLENGE_INFO, payload: e.target.value});
  };

  const scopeOnChangeHandler = (e) => { };
  return (
    <div className={ ModifyChallengeCSS.area }>
      <div className={ ModifyChallengeCSS.head }>
        <h1>챌린지 수정</h1>
        <label>
          챌린지 정보를 수정합니다. 개설한 챌린지는 인증방법 설명, 인증가능시간, 챌린지소개 및 챌린지 소개사진을 수정 가능합니다.
        </label>
        <hr/>
      </div>
      <br/>
      <br/>
      <div className={ ModifyChallengeCSS.btnarea }>
        <button onClick={ categoryOnClickHandler } value='1' className={ challengeInfo.challengeCategoryNo == '1'? ModifyChallengeCSS.choosenbtn: ModifyChallengeCSS.defaultbtn }>생활</button>
        <button onClick={ categoryOnClickHandler } value='2' className={ challengeInfo.challengeCategoryNo == '2'? ModifyChallengeCSS.choosenbtn: ModifyChallengeCSS.defaultbtn }>운동</button>
        <button onClick={ categoryOnClickHandler } value='3' className={ challengeInfo.challengeCategoryNo == '3'? ModifyChallengeCSS.choosenbtn: ModifyChallengeCSS.defaultbtn }>식습관</button>
        <button onClick={ categoryOnClickHandler } value='4' className={ challengeInfo.challengeCategoryNo == '4'? ModifyChallengeCSS.choosenbtn: ModifyChallengeCSS.defaultbtn }>환경</button>
        <button onClick={ categoryOnClickHandler } value='5' className={ challengeInfo.challengeCategoryNo == '5'? ModifyChallengeCSS.choosenbtn: ModifyChallengeCSS.defaultbtn }>마음챙김</button>
      </div>
      <div >
        <label className={ ModifyChallengeCSS.subtitle }>챌린지 제목</label><br/>
        <label className={ ModifyChallengeCSS.description }>타인에게 불괘감을 주는 제목을 작성할 경우 계정 패널티를 받을 수 있습니다.</label><br/>
        <input className={ ModifyChallengeCSS.textinput} value={ challengeInfo.challengeName } readOnly/><br/>
      </div>
      <div>
        <label className={ ModifyChallengeCSS.subtitle }>인증방법 입력</label><br/>
        <label className={ ModifyChallengeCSS.description }>실천여부를 알 수 있도록 구체적으로 적어주세요.</label><br/>
        <textarea className={ ModifyChallengeCSS.authDescription} value={ challengeInfo.challengeAuthExplan } 
          onChange={ descriptionOnChangeHandler }/><br/> 
      </div>
      <div className={ ModifyChallengeCSS.checkinput}>
        <label className={ ModifyChallengeCSS.subtitle }>참여 인원수</label><br/>
        <JoinAmount amount={ challengeInfo.challengeMaxAmount }/>
      </div>
      
      
      <div className={ ModifyChallengeCSS.checkinput}>
        <label className={ ModifyChallengeCSS.subtitle }>인증 빈도</label><br/>
        <div>
          <input readOnly id="freq-1" type="radio" value='1' checked={challengeInfo.challengeFrequency == '1'}/><label htmlFor='freq-1'>매일 인증</label>
          <input readOnly id="freq-2" type="radio" value='2' checked={challengeInfo.challengeFrequency == '2'}/><label htmlFor='freq-2'>주 3일 인증</label>
          <input readOnly id="freq-3" type="radio" value='3' checked={challengeInfo.challengeFrequency == '3'}/><label htmlFor='freq-3'>주 1일 인증</label>
        </div>
        <div>
          <AuthDay freq={challengeInfo.challengeFrequency} authDays={authDayInfo} />
        </div> 
      </div>


      <div className={ ModifyChallengeCSS.timeinput}>
        <label className={ ModifyChallengeCSS.subtitle }>인증 가능 시간</label><br/>
        <div>
          <label>시작 시간<input type="time" onChange={ startTimeChangeHandler } value={ challengeInfo.startTime}/></label>
          <br/><br/>
          <label>종료 시간<input type="time" onChange={ endTimeChangeHandler } value={ challengeInfo.endTime}/></label>
        </div>
      </div>


        <div className={ ModifyChallengeCSS.timeinput}>
          <label className={ ModifyChallengeCSS.subtitle }>챌린지 시작일</label><br/>
          <div>
            <input readOnly value={ challengeInfo.challengeStartDate } type="date"/>
          </div>
        </div>
        <div className={ ModifyChallengeCSS.checkinput}>
          <label className={ ModifyChallengeCSS.subtitle }>챌린지 기간</label><br/>
          <div>
            <input readOnly type="radio" id='term-1' value='1' checked={ challengeInfo.challengeTerm == '1' }/><label htmlFor='term-0'>1주</label>
            <input readOnly type="radio" id='term-2' value='2' checked={ challengeInfo.challengeTerm == '2' }/><label htmlFor='term-1'>2주</label>
            <input readOnly type="radio" id='term-3' value='3' checked={ challengeInfo.challengeTerm == '3' }/><label htmlFor='term-2'>3주</label>
            <input readOnly type="radio" id='term-4' value='4' checked={ challengeInfo.challengeTerm == '4' }/><label htmlFor='term-3'>4주</label>
          </div>
        </div>
        <div className={ ModifyChallengeCSS.checkinput}>
          <label className={ ModifyChallengeCSS.subtitle }>모집 방식</label><br/>
          <div>
            <input id='public' type="radio" value='public' checked={ challengeInfo.challengeScope === 'public' } onChange={ scopeOnChangeHandler }/><label htmlFor='public'>공개</label>
            <input id='private' type="radio" value='private' checked={ challengeInfo.challengeScope === 'private' } onChange={ scopeOnChangeHandler }/><label htmlFor='private'>비공개</label>
          </div>
        </div>
        <div className={ ModifyChallengeCSS.descriptarea}>
          <label className={ ModifyChallengeCSS.subtitle }>챌린지 소개</label><br/>
          <textarea className={ ModifyChallengeCSS.authDescription}
           value={ challengeInfo.challengeInfo } onChange={ infoChangeHandler }/>
        </div>
        
        <ModifyAttachments index={ 1 } inputFile={imageInput1} pathInfo={ attachmentInfo[0] } modifyFile={modifyAttachment} title='챌린지 배너 업로드1'/>
        <ModifyAttachments index={ 2 } inputFile={imageInput2} pathInfo={ attachmentInfo[1] } modifyFile={modifyAttachment} title='챌린지 배너 업로드2'/>
        <ModifyAttachments index={ 3 } inputFile={imageInput3} pathInfo={ attachmentInfo[2] } modifyFile={modifyAttachment} title='챌린지 배너 업로드3'/>
        <ModifyAttachments index={ 4 } inputFile={imageInput4} pathInfo={ attachmentInfo[3] } modifyFile={modifyAttachment} title='챌린지 배너 업로드4'/>

        <div className={ ModifyChallengeCSS.modifybtnarea }>
          <button onClick={ modifyHandler }>수정하기</button>
          <button>취소</button>
        </div>
    </div>
  );
}

export default ModifyChallenge;