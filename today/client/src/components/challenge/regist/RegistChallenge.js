import RegistChallengeCSS from './RegistChallenge.module.css';
import RegistImage from './RegistImage';
import JoinAmount from './JoinAmount';
import AuthDay from './AuthDay';
import jwt_decode from "jwt-decode";
import {Cookies} from 'react-cookie'
import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registChallengeAPI, registChallengeImagesAPI } from '../../../apis/ChallengeAPICalls';
import { SET_PAGE,SET_TITLE, SET_CATEGORY, SET_FREQ, SET_TERM, SET_SCOPE, SET_START_DATE, SET_START_TIME
, SET_END_TIME, SET_INFO, SET_DESCRIPTION, SET_MEMBER_NO, SET_FILE_INFO, SET_REGIST_TIME} from '../../../modules/ChallengeRegistModule';
import getTime from '../../../util/getTime';

function RegistChallenge() {
  
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const { registInfo, isRegistSucceses } = useSelector(state => state.challengeRegistReducer);
  const { category, title, amount, description, term, scope, info, fileCheck
    , startDate, startTime, endTime, path, inputFiles, authDay, freq, registTime } = registInfo;
  const navigate = useNavigate();


  const imageInput1 = useRef();
  const imageInput2 = useRef();
  const imageInput3 = useRef();
  const imageInput4 = useRef();

  const index0 = useRef(0);
  const index1 = useRef(1);
  const index2 = useRef(2);
  const index3 = useRef(3);

  const checkInputValue = () => {
    let result = false;

    fileCheck[0] && fileCheck[1] && fileCheck[2] && fileCheck[3] && (description) && (freq !== 0) && (term) && (startDate) && 
    (startDate > getTime.getDateAndTime()) && (startTime < endTime) &&
    (scope) && (startTime) && (endTime) && (info) && checkAuthDay() && (title) && (category !== 0) && ( result = true ) 

    return result;
  }

  const checkAuthDay = () => {

    switch(freq) {
      case '1': return (countAuthDay() === 7? true: false );
      case '2': return (countAuthDay() === 3? true: false );
      case '3': return (countAuthDay() === 1? true: false );
    }
  };

  const countAuthDay = () => {
    let count = 0;

    for(let i = 0; i < 7; i++) {
      if(authDay['day' + i]) {
        count++;
      }
    }
    return count;
  }

  const onClickHandler = async () => {
      const checkResult = checkInputValue();
      
      if(checkResult) {
        await dispatch({type: SET_REGIST_TIME, payload: getTime.getDateAndTime()});
        for(let i = 0; i < inputFiles.length; i++) {

         const result = await registChallengeImagesAPI({inputFile: inputFiles[i], index: i});
         await dispatch({type: SET_FILE_INFO, payload: {data: result.data, index: i}});
        }

        await dispatch(registChallengeAPI(registInfo));
        
      } else {
        alert('?????? ????????? ???????????????');
      }
  };      

  useEffect(
    () => {
      const token = cookies.get('token');
      if(token) {
      const decoded = jwt_decode(token);
      dispatch({type: SET_MEMBER_NO, payload: decoded.no});

      if(isRegistSucceses != 0) {
      
      }
    }
    },[]
  );

  useEffect(
    () => {
      if(isRegistSucceses != 0) {
        alert('????????? ????????? ??????????????????');
        window.location.replace(`/challenges/${isRegistSucceses}`); 

      }
      
    },[isRegistSucceses]
  );

  return (
    <>
      <br/>
      <div className={ RegistChallengeCSS.area }>
        <br/>
        <label className={ RegistChallengeCSS.title }>????????? ??????</label>
        <hr/>
        <div className={ RegistChallengeCSS.btnarea }>
          <button onClick={ e => dispatch({type: SET_CATEGORY, payload: e.target.value}) } value='1' className={ category === '1'? RegistChallengeCSS.choosenbtn: RegistChallengeCSS.defaultbtn }>??????</button>
          <button onClick={ e => dispatch({type: SET_CATEGORY, payload: e.target.value}) } value='2' className={ category === '2'? RegistChallengeCSS.choosenbtn: RegistChallengeCSS.defaultbtn }>??????</button>
          <button onClick={ e => dispatch({type: SET_CATEGORY, payload: e.target.value}) } value='3' className={ category === '3'? RegistChallengeCSS.choosenbtn: RegistChallengeCSS.defaultbtn }>?????????</button>
          <button onClick={ e => dispatch({type: SET_CATEGORY, payload: e.target.value}) } value='4' className={ category === '4'? RegistChallengeCSS.choosenbtn: RegistChallengeCSS.defaultbtn }>??????</button>
          <button onClick={ e => dispatch({type: SET_CATEGORY, payload: e.target.value}) } value='5' className={ category === '5'? RegistChallengeCSS.choosenbtn: RegistChallengeCSS.defaultbtn }>????????????</button>
        </div>
        <div >
          <label className={ RegistChallengeCSS.subtitle }>????????? ??????</label><br/>
          <label className={ RegistChallengeCSS.description }>???????????? ???????????? ?????? ????????? ????????? ?????? ?????? ???????????? ?????? ??? ????????????.</label><br/>
          <input className={ RegistChallengeCSS.textinput} value={ title } 
            onChange={ e => dispatch({type: SET_TITLE, payload: e.target.value}) } /><br/>
        </div>
        <div>
          <label className={ RegistChallengeCSS.subtitle }>???????????? ??????</label><br/>
          <label className={ RegistChallengeCSS.description }>??????????????? ??? ??? ????????? ??????????????? ???????????????.</label><br/>
          <textarea className={ RegistChallengeCSS.textAreaInput} value={ description } 
            onChange={ e => dispatch({type: SET_DESCRIPTION, payload: e.target.value }) }/><br/>
        </div>
        <div className={ RegistChallengeCSS.checkinput}>
          <label className={ RegistChallengeCSS.subtitle }>?????? ?????????</label><br/>
          <JoinAmount amount={ amount }/>
        </div>

        <div className={ RegistChallengeCSS.checkinput}>
          <label className={ RegistChallengeCSS.subtitle }>?????? ??????</label><br/>
          <div>
            <input id="freq-1" type="radio" value='1' checked={freq === '1'} onChange={ (e) => dispatch({type: SET_FREQ, payload: e.target.value}) } /><label htmlFor='freq-1'>?????? ??????</label>
            <input id="freq-2" type="radio" value='2' checked={freq === '2'} onChange={ (e) => dispatch({type: SET_FREQ, payload: e.target.value}) } /><label htmlFor='freq-2'>??? 3??? ??????</label>
            <input id="freq-3" type="radio" value='3' checked={freq === '3'} onChange={ (e) => dispatch({type: SET_FREQ, payload: e.target.value}) } /><label htmlFor='freq-3'>??? 1??? ??????</label>
          </div>
          <div>
            <AuthDay freq={freq}/>
          </div> 
        </div>
        <div className={ RegistChallengeCSS.timeinput}>
          <label className={ RegistChallengeCSS.subtitle }>?????? ?????? ??????</label><br/>
          <div>
            <label className={RegistChallengeCSS.timeLabel}>?????? ??????<input className={ RegistChallengeCSS.timeInputBox} type="time" onChange={ e => dispatch({type:SET_START_TIME, payload: e.target.value}) } value={ startTime }/></label><br/><br/>
            <label className={RegistChallengeCSS.timeLabel}>?????? ??????<input className={ RegistChallengeCSS.timeInputBox} type="time" onChange={ e => dispatch({type:SET_END_TIME, payload: e.target.value}) } value={ endTime }/></label>
          </div>
        </div>
        <div className={ RegistChallengeCSS.timeinput}>
          <label className={ RegistChallengeCSS.subtitle }>????????? ?????????</label><br/>
          <div>
            <input 
              className={ RegistChallengeCSS.dateInputBox}
              onChange={  e => dispatch({type:SET_START_DATE, payload: e.target.value}) } 
              value={ startDate } type="date"
            />
          </div>
        </div>
        <div className={ RegistChallengeCSS.checkinput}>
          <label className={ RegistChallengeCSS.subtitle }>????????? ??????</label><br/>
          <div>
            <input type="radio" id='term-1' value='1' checked={ term === '1' } onChange={ e => dispatch({type: SET_TERM, payload: e.target.value }) }/><label htmlFor='term-1'>1???</label>
            <input type="radio" id='term-2' value='2' checked={ term === '2' } onChange={ e => dispatch({type: SET_TERM, payload: e.target.value }) }/><label htmlFor='term-2'>2???</label>
            <input type="radio" id='term-3' value='3' checked={ term === '3' } onChange={ e => dispatch({type: SET_TERM, payload: e.target.value }) }/><label htmlFor='term-3'>3???</label>
            <input type="radio" id='term-4' value='4' checked={ term === '4' } onChange={ e => dispatch({type: SET_TERM, payload: e.target.value }) }/><label htmlFor='term-4'>4???</label>
          </div>
        </div>
        <div className={ RegistChallengeCSS.checkinput}>
          <label className={ RegistChallengeCSS.subtitle }>?????? ??????</label><br/>
          <div>
            <input id='public' type="radio" value='public' checked={ scope === 'public' } onChange={ e => dispatch({type: SET_SCOPE, payload: e.target.value}) }/><label htmlFor='public'>??????</label>
            <input id='private' type="radio" value='private' checked={ scope === 'private' } onChange={ e => dispatch({type: SET_SCOPE, payload: e.target.value}) }/><label htmlFor='private'>?????????</label>
          </div>
        </div>

        <RegistImage title='????????? ?????? ?????????' imageInput={ imageInput1 } index={index0}/>
        <RegistImage title='????????? ????????? ?????????' imageInput={ imageInput2 } index={index1}/>
        <RegistImage title='??????????????? ?????? ??????' imageInput={ imageInput3 } index={index2}/>
        <RegistImage title='??????????????? ?????? ??????' imageInput={ imageInput4 } index={index3}/>

        <br/>
        <div className={ RegistChallengeCSS.challengeDescriptarea}>
          <label>????????? ??????</label><br/>
          <textarea value={info} onChange={ (e) => dispatch({type: SET_INFO, payload: e.target.value})}/>
        </div>
        <div className={ RegistChallengeCSS.registbtnarea }>
          <button onClick={ onClickHandler }>????????????</button>
          <button>??????</button>
        </div>
      </div>
    </>
  );
}

export default RegistChallenge;