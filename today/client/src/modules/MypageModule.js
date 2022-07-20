import { createActions, handleActions } from 'redux-actions';

const initialState = 
{
  challengeInfo: [],
  participatingChallengeNum: 0,
  completedChallengeNum: 0,

}

export const CHALLENGE_INFO = 'mypage/CHALLENGE_INFO';

const actions = createActions(
  {
  [CHALLENGE_INFO]: () => {},
});

const mypageReducer = handleActions(
  {
  [CHALLENGE_INFO]: (state, { payload }) => {

    console.log('모듈로오니')
    console.log(payload)
    state.challengeInfo = payload;
    console.log(state.challengeInfo.length);
    
    for(let i = 0; i < state.challengeInfo.length; i++) {
      const statusNo = parseInt(state.challengeInfo[i].challengeStatusNo);
      console.log(statusNo);
      if(statusNo == 2) {
        state.participatingChallengeNum += 1;
      } else if( statusNo == 3) {
        state.completedChallengeNum += 1;
      }
    }
    console.log(state);

    return {...state};
  }
}, initialState
);

export default mypageReducer;