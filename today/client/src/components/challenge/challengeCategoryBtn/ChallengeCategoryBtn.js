import { useDispatch, useSelector } from 'react-redux';
import ChallengeCategoryBtnCSS from './ChallengeCategoryBtnCSS.module.css';
import {SET_CATEGORY, SET_PAGE, SET_SEARCH_VALUE } from '../../../modules/ChallengeListModule';
import {getChallengeList} from '../../../apis/ChallengeAPICalls';

function ChallengeCategoryBtn() {

  const dispatch = useDispatch();

  const {pageInfo} = useSelector(state => state.challengelistReducer);
  
  const onClickHandler = (category) => {
      dispatch({type: SET_SEARCH_VALUE, payload: ''});
      dispatch({type: SET_CATEGORY, payload: category});
      dispatch({type: SET_PAGE, payload: 1});
      
    dispatch(getChallengeList(pageInfo));
  };

  return(
    <>
      <div className={ ChallengeCategoryBtnCSS.categoryBtn }>
        <button onClick={ () => onClickHandler('0') } className={ pageInfo.category === '0' ? ChallengeCategoryBtnCSS.selected: ChallengeCategoryBtnCSS.basic} value='0'>전체</button>
        <button onClick={ () => onClickHandler('1') } className={ pageInfo.category === '1' ? ChallengeCategoryBtnCSS.selected: ChallengeCategoryBtnCSS.basic} value='1'>생활</button>
        <button onClick={ () => onClickHandler('2') } className={ pageInfo.category === '2' ? ChallengeCategoryBtnCSS.selected: ChallengeCategoryBtnCSS.basic} value='2'>운동</button>
        <button onClick={ () => onClickHandler('3') } className={ pageInfo.category === '3' ? ChallengeCategoryBtnCSS.selected: ChallengeCategoryBtnCSS.basic} value='3'>식습관</button>
        <button onClick={ () => onClickHandler('4') } className={ pageInfo.category === '4' ? ChallengeCategoryBtnCSS.selected: ChallengeCategoryBtnCSS.basic} value='4'>환경</button>
        <button onClick={ () => onClickHandler('5') } className={ pageInfo.category === '5' ? ChallengeCategoryBtnCSS.selected: ChallengeCategoryBtnCSS.basic} value='5'>마음챙김</button>
      </div>
    </>
  )
}

export default ChallengeCategoryBtn;