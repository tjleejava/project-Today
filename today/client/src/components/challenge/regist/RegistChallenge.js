import RegistChallengeCSS from './RegistChallenge.module.css';
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import RegistImage from './RegistImage';
import axios from 'axios';
import JoinAmount from './JoinAmount';
import AuthDay from './AuthDay';

function RegistChallenge() {

  const navigate = useNavigate();

  let url = '';
  const imageInput1 = useRef();
  const imageInput2 = useRef();
  const imageInput3 = useRef();
  const imageInput4 = useRef();

  const [category, setCategory] = useState(1);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [freq, setFreq] = useState('0');
  const [term, setTerm] = useState('');
  const [scope, setScope] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [info, setInfo] = useState('');
  const [amount, setAmount] = useState(2);
  const [authDay, setAuthDay] = useState({
    day0: false,
    day1: false,
    day2: false,
    day3: false,
    day4: false,
    day5: false,
    day6: false
  });

  
  const [path1, setPath1] = useState('/images/registchallenge/download.png');
  const [path2, setPath2] = useState('/images/registchallenge/download.png');
  const [path3, setPath3] = useState('/images/registchallenge/download.png');
  const [path4, setPath4] = useState('/images/registchallenge/download.png');

  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [file3, setFile3] = useState();
  const [file4, setFile4] = useState();

  const [inputFile1, setInputFile1] = useState({});
  const [inputFile2, setInputFile2] = useState({});
  const [inputFile3, setInputFile3] = useState({});
  const [inputFile4, setInputFile4] = useState({});

  const categoryOnClickHandler = (e) => {
    console.log('e : ', e);
    console.log('e.target : ', e.target);
    console.log('e.target.value', e.target.value);
    setCategory(e.target.value);
  };

  const titleOnChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const descriptionOnChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const freqOnChangeHandler = (e) => {
    setFreq(e.target.value);
    if(e.target.value == '1') {
      for(let i = 0; i < 7; i++) {
        authDay['day' + i] = true;
        console.log('authDay : ', authDay);
      }
    }
  };

  const termOnChangeHandler = (e) => {
    setTerm(e.target.value);
  };

  const startTimeChange = (e) => {
    setStartTime(e.target.value);
  };
  
  const endTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const startDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const scopeOnChangeHandler = (e) => {
    setScope(e.target.value);
  };

  const infoChangeHandler = (e) => {
    setInfo(e.target.value);
  };

  const checkInputValue = () => {
    
    let result = false;
    (category !== 1) 
    && (title) 
    && (description) 
    && (freq !== 0) 
    && (term) 
    && (scope) 
    && (startDate) 
    && (startTime) 
    && (endTime) 
    && (info)
    && checkAuthDay()
    && ( result = true)

    return result;
  }

  const checkAuthDay = () => {

    switch(freq) {
      case '1':
        return (countAuthDay() === 7? true: false );
      case '2':
        return (countAuthDay() === 3? true: false );
      case '3':
        return (countAuthDay() === 1? true: false );
    }

    
  }

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

      const checkResult = await checkInputValue();

      if(checkResult) {

        await axios.post('http://localhost:8888/challenges/upload', inputFile1)
        .then(res => setFile1(res))
          .catch(err => console.log(err));
        await axios.post('http://localhost:8888/challenges/upload', inputFile2)
          .then(res => setFile2(res)) 
          .catch(err => console.log(err));
        await axios.post('http://localhost:8888/challenges/upload', inputFile3)
          .then(res => setFile3(res))  
          .catch(err => console.log(err));
        await axios.post('http://localhost:8888/challenges/upload', inputFile4)
          .then(res => setFile4(res))
          .catch(err => console.log(err));

        let data = {
          category: category,
          title: title,
          description: description,
          freq: freq,
          term: term,
          scope: scope,
          startTime: startTime,
          endTime: endTime,
          startDate: startDate,
          info: info,
          file : [
            file1.data, file2.data, file3.data, file4.data
          ],
          amount : amount,
          authDay: authDay,
          
        }

        await axios.post('http://localhost:8888/challenges', data)
          .then(res => {
            url = res.data.url;
          }).catch( err => console.log(err)); 
        alert('챌린지를 등록했습니다!');
        navigate('/');
      } else {
        alert('모든 정보를 입력하세요');
      }

  };      
  
  return (
    <>
      <br/>
      <div className={ RegistChallengeCSS.area }>
        <br/>
        <label className={ RegistChallengeCSS.title }>챌린지 개설</label>
        <hr/>
        <div className={ RegistChallengeCSS.btnarea }>
          <button onClick={ categoryOnClickHandler } value='1' className={ category === '1'? RegistChallengeCSS.choosenbtn: RegistChallengeCSS.defaultbtn }>생활</button>
          <button onClick={ categoryOnClickHandler } value='2' className={ category === '2'? RegistChallengeCSS.choosenbtn: RegistChallengeCSS.defaultbtn }>운동</button>
          <button onClick={ categoryOnClickHandler } value='3' className={ category === '3'? RegistChallengeCSS.choosenbtn: RegistChallengeCSS.defaultbtn }>식습관</button>
          <button onClick={ categoryOnClickHandler } value='4' className={ category === '4'? RegistChallengeCSS.choosenbtn: RegistChallengeCSS.defaultbtn }>환경</button>
          <button onClick={ categoryOnClickHandler } value='5' className={ category === '5'? RegistChallengeCSS.choosenbtn: RegistChallengeCSS.defaultbtn }>마음챙김</button>
        </div>
        <div >
          <label className={ RegistChallengeCSS.subtitle }>챌린지 제목</label><br/>
          <label className={ RegistChallengeCSS.description }>타인에게 불괘감을 주는 제목을 작성할 경우 계정 패널티를 받을 수 있습니다.</label><br/>
          <input className={ RegistChallengeCSS.textinput} value={ title } 
            onChange={ titleOnChangeHandler } /><br/>
        </div>
        <div>
          <label className={ RegistChallengeCSS.subtitle }>인증방법 입력</label><br/>
          <label className={ RegistChallengeCSS.description }>실천여부를 알 수 있도록 구체적으로 적어주세요.</label><br/>
          <input className={ RegistChallengeCSS.textinput} value={ description } 
            onChange={ descriptionOnChangeHandler }/><br/>
        </div>
        <div className={ RegistChallengeCSS.checkinput}>
          <label className={ RegistChallengeCSS.subtitle }>참여 인원수</label><br/>
          <JoinAmount amount={ amount } setAmount={ setAmount }/>
        </div>

        <div className={ RegistChallengeCSS.checkinput}>
          <label className={ RegistChallengeCSS.subtitle }>인증 빈도</label><br/>
          <div>
            <input id="freq-1" type="radio" value='1' checked={freq === '1'} onChange={ freqOnChangeHandler } /><label for='freq-1'>매일 인증</label>
            <input id="freq-2" type="radio" value='2' checked={freq === '2'} onChange={ freqOnChangeHandler } /><label for='freq-2'>주 3일 인증</label>
            <input id="freq-3" type="radio" value='3' checked={freq === '3'} onChange={ freqOnChangeHandler } /><label for='freq-3'>주 1일 인증</label>
          </div>
          <div>
            <AuthDay freq={freq} authDay={ authDay } setAuthDay={ setAuthDay }/>
          </div> 
        </div>
        <div className={ RegistChallengeCSS.timeinput}>
          <label className={ RegistChallengeCSS.subtitle }>인증 가능 시간</label><br/>
          <div>
            <label>시작 시간<input type="time" onChange={ startTimeChange } value={ startTime }/></label>
            <label>종료 시간<input type="time" onChange={ endTimeChange } value={ endTime }/></label>
          </div>
        </div>
        <div className={ RegistChallengeCSS.timeinput}>
          <label className={ RegistChallengeCSS.subtitle }>챌린지 시작일</label><br/>
          <div>
            <input onChange={ startDateChange} value={ startDate } type="date"/>
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
            <input id='private' type="radio" value='private' checked={ scope === 'private' } onChange={ scopeOnChangeHandler }/><label for='private'>비공개</label>
          </div>
        </div>

        <RegistImage title='챌린지 배너 업로드' imageInput={ imageInput1 } setInputFile={ setInputFile1 } setPath={ setPath1 } path={ path1 }/>
        <RegistImage title='챌린지 썸네일 업로드' imageInput={ imageInput2 } setInputFile={ setInputFile2 } setPath={ setPath2 } path={ path2 }/>
        <RegistImage title='좋은인증샷 예시 등록' imageInput={ imageInput3 } setInputFile={ setInputFile3 } setPath={ setPath3 } path={ path3 }/>
        <RegistImage title='나쁜인증샷 예시 등록' imageInput={ imageInput4 } setInputFile={ setInputFile4 } setPath={ setPath4 } path={ path4 }/>

        <br/>
        <div className={ RegistChallengeCSS.descriptarea}>
          <label>챌린지 소개</label><br/>
          <textarea value={info} onChange={ infoChangeHandler }/>
        </div>
        <div className={ RegistChallengeCSS.registbtnarea }>
          <button onClick={ onClickHandler }>등록하기</button>
          <button>취소</button>
        </div>
      </div>
    </>
  );
}

export default RegistChallenge;