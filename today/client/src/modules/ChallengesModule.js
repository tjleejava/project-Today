import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = {
    attachmentInfo: {},
    challengeInfo: {},
    authDayInfo: {}
};

/* 액션 */
export const GET_CHALLENGE = 'challenges/GET_CHALLENGE';
export const PUT_CHALLENGE_CATEGORY_NO = 'challenges/PUT_CHALLENGE_CATEGORY_NO';

const actions = createActions({
    [GET_CHALLENGE]: () => {},
    [PUT_CHALLENGE_CATEGORY_NO]: () => {}
});

/* 리듀서 */
const challengesReducer = handleActions(
    {
        [GET_CHALLENGE]: (state, { payload }) => {
            console.log(payload);
            payload.challengeInfo.challengeCategoryNo += '';
            payload.challengeInfo.challengeFrequency += '';
            return payload;
        },
        [PUT_CHALLENGE_CATEGORY_NO]: (state, { payload }) => {
            state.challengeInfo.challengeCategoryNo = payload
            
            console.log('state : ', state);
            console.log('payload : ', payload);
            return {...state};
        }
    },
    initialState
);

export default challengesReducer;
