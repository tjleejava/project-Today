import RegistChallengeCSS from './RegistChallenge.module.css';
function RegistChallenge() {

  return (
    <>
      <br/>
      <div className={ RegistChallengeCSS.area }>
        챌린지 개설
        <hr/>
        <div>
          <button>생활</button>
          <button>운동</button>
          <button>식습관</button>
          <button>환경</button>
          <button>마음챙김</button>
        </div>
        <div>
          <label>챌린지 제목</label><br/>
          <label>타인에게 불괘감을 주는 제목을 작성할 경우 계정 패널티를 받을 수 있습니다.</label><br/>
          <input/><br/>
        </div>
        <div>
          <label>인증방법 입력</label><br/>
          <label>실천여부를 알 수 있도록 구체적으로 적어주세요.</label><br/>
          <input/><br/>
        </div>
        <div>
          <label>인증 빈도</label><br/>
          <input type="checkbox"/><label>1주</label>
          <input type="checkbox"/><label>2주</label>
          <input type="checkbox"/><label>3주</label>
          <input type="checkbox"/><label>4주</label>
        </div>
        <div>
          <label>모집 방식</label><br/>
          <input type="checkbox"/><label>공개</label>
          <input type="checkbox"/><label>비공개</label>
        </div>
        <label>챌린지 썸네일 업로드</label>
        {/* <div className={}></div> */}
      </div>
    </>
  );
}

export default RegistChallenge;