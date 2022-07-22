import {Button} from './ChallengeBtnElements';
import ChallengeCSS from './ChallengeBtnCSS.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { SET_CHALLENGE_STATUS } from '../../../modules/MypageModule'

function ChallengeBtn() {
  const dispatch = useDispatch();

  const onClickHandler = (e) => {
    const ALL = '0';
    const STAND_BY = '1';
    const PARTICIPATING = '2';
    const COMPLETE = '3';
    const CANCEL = '4';
    const DELETE = '5';
    console.log(e.target.value)
    const value = e.target.value.split(',');
    console.log(value)
    for(let i = 0; i < value.length; i++) {
      if(value[i]== STAND_BY) {
        setDispatch(STAND_BY)
      } else if(value[i] == PARTICIPATING) {
        setDispatch(PARTICIPATING)
      } else if(value[i] == COMPLETE) {
        setDispatch(COMPLETE)
      } else if(value[i] == CANCEL) {
        setDispatch(CANCEL)
      } else if(value[i] == DELETE) {
        setDispatch(DELETE)
      } else if(value[i] == ALL) {
        setDispatch(ALL)
      }
    }
    
  }

  function setDispatch(STATUS_TYPE) {
    dispatch({type: SET_CHALLENGE_STATUS, payload: STATUS_TYPE});
  }

  return (
    <>
      <div>
        <Button className={ChallengeCSS.challengeStatusButton} onClick={onClickHandler} value="0">전체</Button>
        <Button className={ChallengeCSS.challengeStatusButton} onClick={onClickHandler} value="1">진행예정</Button>
        <Button className={ChallengeCSS.challengeStatusButton} onClick={onClickHandler} value="2">참여중</Button>
        <Button className={ChallengeCSS.challengeStatusButton} onClick={onClickHandler} value="3,4,5">종료</Button>
      </div>
    </>
  )
}

export default ChallengeBtn;