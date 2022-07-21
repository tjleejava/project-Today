import { createActions, handleActions } from 'redux-actions';

const initialState = 
{
  challengeInfo: [],
  participatedChallenges: [],
  participatingChallengeNum: 0,
  completedChallengeNum: 0,
  openChallengeNum: 0,

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
    const memberNo = payload.memberNo;
    console.log('memberNo: ', memberNo);
    state.challengeInfo = payload.challengeInfo;
    console.log(state.challengeInfo.length);
    
    for(let i = 0; i < state.challengeInfo.length; i++) {
      const statusNo = parseInt(state.challengeInfo[i].challengeStatusNo);
      const findMemberNo = parseInt(state.challengeInfo[i].memberNo);
      console.log('statusNo: ' , statusNo);
      console.log('findMemberNo: ', findMemberNo);
      if(statusNo == 2) {
        state.participatingChallengeNum += 1;
        state.participatedChallenges.push(state.challengeInfo[i]);
      } else if( statusNo == 3) {
        state.completedChallengeNum += 1;
      } else if( findMemberNo == memberNo) {
        state.openChallengeNum += 1;
      }
    }
    console.log(state);

    return {...state};
  }
}, initialState
);

export default mypageReducer;