import { createActions, handleActions } from 'redux-actions';

const initialState = 
{
  challengeInfo: [],
  challengeNum: 0,
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
    state.challengeNum = state.challengeInfo.length;
    console.log(state);

    return {...state};
  }
}, initialState
);

export default mypageReducer;