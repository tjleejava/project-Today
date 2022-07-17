import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = {
    attachmentInfo: {},
    challengeInfo: {},
    authDayInfo: {},
    presentTab: '1'
};

/* 액션 */
export const GET_CHALLENGE = 'challenge/GET_CHALLENGE';

const actions = createActions({
    [GET_CHALLENGE]: () => {}

});

/* 리듀서 */
const challengeReducer = handleActions(
    {
        [GET_CHALLENGE]: (state, { payload }) => {
            payload.challengeInfo.challengeCategoryNo += '';
            payload.challengeInfo.challengeFrequency += '';
            payload.modifyAttachment = [{}];
            // console.log('getChallenge state : ', state);
            return payload;
        }
    },
    initialState
);

export default challengeReducer;

//보류