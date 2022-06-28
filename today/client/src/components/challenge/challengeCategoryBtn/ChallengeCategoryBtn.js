import ChallengeCategoryBtnCSS from './ChallengeCategoryBtnCSS.module.css';

function ChallengeCategoryBtn() {

  return(
    <>
      <div className={ ChallengeCategoryBtnCSS.categoryBtn }>
        <input type="button" value="생활"/>
        <input type="button" value="운동"/>
        <input type="button" value="식습관"/>
        <input type="button" value="마음챙김"/>
        <input type="button" value="환경"/>
        {/* <button>운동</button>
        <button>식습관</button>
        <button>마음챙김</button>
        <button>환경</button> */}
      </div>
    </>
  )
}

export default ChallengeCategoryBtn;