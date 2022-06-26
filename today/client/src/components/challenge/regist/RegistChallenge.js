import RegistChallengeCSS from './RegistChallenge.module.css';
import React, { useState, useRef } from 'react';


function RegistChallenge() {

  const imageInput = useRef();

  const [category, setCategory] = useState(1);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [freq, setFreq] = useState('');
  const [term, setTerm] = useState('');
  const [scope, setScope] = useState('');
  const [bannerPath, setBannerPath] = useState('/images/registchallenge/download.png');

  const categoryOnClickHandler = (e) => {
    console.log('e : ', e);
    console.log('e.target : ', e.target);
    console.log('e.target.value', e.target.value);
    setCategory(e.target.value);
  }

  const titleOnChangeHandler = (e) => {
    setTitle(e.target.value);
  }

  const descriptionOnChangeHandler = (e) => {
    setDescription(e.target.value);
  }

  const freqOnChangeHandler = (e) => {
    setFreq(e.target.value);
  }

  const termOnChangeHandler = (e) => {
    setTerm(e.target.value);
  }

  const scopeOnChangeHandler = (e) => {
    setScope(e.target.value);
  }


  const onClickUpload = () => {
    imageInput.current.click();
  }

  const bannerOnChange = (e) => {
    setBannerPath(URL.createObjectURL(e.target.files[0]));
  }

  const onClickHandler = () => {
    let data = {
      category: category,
      title: title,
      description: description,
      freq: freq,
      term: term,
      scope: scope
    }
    alert(data);
    console.log(data);
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
          <label className={ RegistChallengeCSS.subtitle }>인증 빈도</label><br/>
          <div>
            <input id="freq-1" type="radio" value='1' checked={freq === '1'} onChange={ freqOnChangeHandler } /><label for='freq-1'>매일 인증</label>
            <input id="freq-2" type="radio" value='2' checked={freq === '2'} onChange={ freqOnChangeHandler } /><label for='freq-2'>주 3일 인증</label>
            <input id="freq-3" type="radio" value='3' checked={freq === '3'} onChange={ freqOnChangeHandler } /><label for='freq-3'>주 1일 인증</label>
          </div>
          <div>
            <input type="checkbox" value='0' id='day-0'/><label for='day-0'>월요일</label>
            <input type="checkbox" value='1' id='day-1'/><label for='day-1'>화요일</label>
            <input type="checkbox" value='2' id='day-2'/><label for='day-2'>수요일</label>
            <input type="checkbox" value='3' id='day-3'/><label for='day-3'>목요일</label>
            <input type="checkbox" value='4' id='day-4'/><label for='day-4'>금요일</label><br/>
            <input type="checkbox" value='5' id='day-5'/><label for='day-5'>토요일</label>
            <input type="checkbox" value='6' id='day-6'/><label for='day-6'>일요일</label>
          </div> 
        </div>
        <div className={ RegistChallengeCSS.timeinput}>
          <label className={ RegistChallengeCSS.subtitle }>인증 가능 시간</label><br/>
          <div>
            <label>시작 시간<input type="time"/></label>
            <label>종료 시간<input type="time"/></label>
          </div>
        </div>
        <div className={ RegistChallengeCSS.timeinput}>
          <label className={ RegistChallengeCSS.subtitle }>챌린지 시작일</label><br/>
          <div>
            <input type="date"/>
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
        <div className={ RegistChallengeCSS.imageinputarea }>
          <label>챌린지 배너 업로드</label><br/>
          <div className={ RegistChallengeCSS.imageinputbox }>
            <img src={ bannerPath }></img><br></br>
            <br/>
            <button onClick={ onClickUpload }>Select a file</button>
            <input 
              type='file'
              style={{ display:' none' }}
              ref={imageInput}
              onChange={ bannerOnChange }
            />
          </div>
        </div>
        <br/>
        <div className={ RegistChallengeCSS.descriptarea}>
          <label>챌린지 소개</label><br/>
          <textarea/>
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



{/* <div className={ RegistChallengeCSS.imageinputarea }>
<label>챌린지 썸네일 업로드</label><br/>
<div className={ RegistChallengeCSS.imageinputbox }>
  <img src="/images/registchallenge/download.png"></img><br></br>
  <br/>
  <button>Select a file</button>
</div>
</div>
<div className={ RegistChallengeCSS.imageinputarea }>
<label>좋은인증샷 예시 등록</label><br/>
<div className={ RegistChallengeCSS.imageinputbox }>
  <img src="/images/registchallenge/download.png"></img><br></br>
  <br/>
  <button>Select a file</button>
</div>
</div>
<div className={ RegistChallengeCSS.imageinputarea }>
<label>나쁜인증샷 예시 등록</label><br/>
<div className={ RegistChallengeCSS.imageinputbox }>
  <img src="/images/registchallenge/download.png"></img><br></br>
  <br/>
  <button>Select a file</button>
</div>
</div> */}