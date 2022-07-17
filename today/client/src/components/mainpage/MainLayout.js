import MainChallengeList from './MainChallengeList';
import MainLayoutCSS from './MainLayout.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMainLayoutChallengeListAPI } from '../../apis/MainpageAPICalls';
function MainLayout() {

  const { challenges } = useSelector(state => state.mainpageReducer);
  console.log(challenges);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getMainLayoutChallengeListAPI(1));    
    },[]
  );
  const onClickHandler = (type) => {
    dispatch(getMainLayoutChallengeListAPI(type));    
  }
  
  return (
    <div className={ MainLayoutCSS.area }>
      <div className={ MainLayoutCSS.labelarea }>
        <label>오늘하루</label>
        <label>CHALLENGE</label>
      </div>
      <br/>
      <div className={ MainLayoutCSS.btnarea }>
        <button onClick={ () => onClickHandler(1) }>생활</button>
        <button onClick={ () => onClickHandler(2) }>운동</button>
        <button onClick={ () => onClickHandler(3) }>식습관</button>
        <button onClick={ () => onClickHandler(4) }>환경</button>
        <button onClick={ () => onClickHandler(5) }>마음챙김</button>
      </div>
      <div className={ MainLayoutCSS.boxarea }>
        { challenges.map(challenge => <MainChallengeList challenge={ challenge } key={challenge.challengeNo}/> ) }
      </div>
    </div>
  );
}

export default MainLayout;