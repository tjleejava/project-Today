import RegistChallengeCSS from './RegistChallenge.module.css';


function RegistChallenge() {

  return (
    <>
      <br/>
      <div className={ RegistChallengeCSS.area }>
        <br/>
        <label className={ RegistChallengeCSS.title }>챌린지 개설</label>
        <hr/>
        <div className={ RegistChallengeCSS.btnarea }>
          <button>생활</button>
          <button>운동</button>
          <button>식습관</button>
          <button>환경</button>
          <button>마음챙김</button>
        </div>
        <div >
          <label className={ RegistChallengeCSS.subtitle }>챌린지 제목</label><br/>
          <label className={ RegistChallengeCSS.description }>타인에게 불괘감을 주는 제목을 작성할 경우 계정 패널티를 받을 수 있습니다.</label><br/>
          <input className={ RegistChallengeCSS.textinput}/><br/>
        </div>
        <div>
          <label className={ RegistChallengeCSS.subtitle }>인증방법 입력</label><br/>
          <label className={ RegistChallengeCSS.description }>실천여부를 알 수 있도록 구체적으로 적어주세요.</label><br/>
          <input className={ RegistChallengeCSS.textinput}/><br/>
        </div>
        <div className={ RegistChallengeCSS.checkinput}>
          <label className={ RegistChallengeCSS.subtitle }>인증 빈도</label><br/>
          <div>
            <input type="checkbox"/><label>매일 인증</label>
            <input type="checkbox"/><label>주 3일 인증</label>
            <input type="checkbox"/><label>주 1일 인증</label>
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
            <input type="checkbox"/><label>1주</label>
            <input type="checkbox"/><label>2주</label>
            <input type="checkbox"/><label>3주</label>
            <input type="checkbox"/><label>4주</label>
          </div>
        </div>
        <div>
          <label className={ RegistChallengeCSS.subtitle }>모집 방식</label><br/>
          <input type="checkbox"/><label>공개</label>
          <input type="checkbox"/><label>비공개</label>
        </div>
      </div>
    </>
  );
}

export default RegistChallenge;