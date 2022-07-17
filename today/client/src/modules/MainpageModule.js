import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = {
  rankinglist: [],
  challenges: []
};

/* 액션 */
export const GET_RANKINGS = 'mainpage/GET_RANKINGS';
export const GET_CHALLENGE_LIST_BY_CATEGORY = 'mainpage/GET_CHALLENGE_LIST_BY_CATEGORY';


const actions = createActions({
    [GET_RANKINGS]: () => {},
    [GET_CHALLENGE_LIST_BY_CATEGORY]: () => {}
    
});

/* 리듀서 */
const mainpageReducer = handleActions(
    {
        [GET_RANKINGS]: (state, { payload }) => {
            state.rankinglist = payload;
            console.log(state);
            
            return {...state};
        },
        [GET_CHALLENGE_LIST_BY_CATEGORY]: (state, { payload }) => {
            state.challenges = payload;
            return {...state};
        }
    },
    initialState
);

export default mainpageReducer;