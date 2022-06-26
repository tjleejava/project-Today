import ChallengeCategoryBtnCSS from './ChallengeCategoryBtnCSS.module.css';

function ChallengeCategoryBtn() {

  return(
    <>
      <div className={ ChallengeCategoryBtnCSS.categoryBtn }>
        <button>생활</button>
        <button>운동</button>
        <button>식습관</button>
        <button>마음챙김</button>
        <button>환경</button>
      </div>
    </>
  )
}

export default ChallengeCategoryBtn;