import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = {
    attachmentInfo: {},
    challengeInfo: {},
    authDayInfo: {},
    modifyAttachment: { 
        attachment1: {  },
        attachment2: {  },
        attachment3: {  },
        attachment4: {  }
    }
};

/* 액션 */
export const GET_CHALLENGE = 'challenges/GET_CHALLENGE';
export const PUT_CHALLENGE_CATEGORY_NO = 'challenges/PUT_CHALLENGE_CATEGORY_NO';
export const MODIFY_ATTACHMENT = 'challenges/MODIFY_ATTACHMENT';
export const PUT_CHALLENGE_INFO = 'challenges/PUT_CHALLENGE_INFO';
export const PUT_CHALLENGE_DESCRIPTION = 'challenges/PUT_CHALLENGE_DESCRIPTION';
export const PUT_START_TIME = 'challenges/PUT_START_TIME';
export const PUT_END_TIME = 'challenges/PUT_END_TIME';

const actions = createActions({
    [GET_CHALLENGE]: () => {},
    [PUT_CHALLENGE_CATEGORY_NO]: () => {},
    [MODIFY_ATTACHMENT]: () => {},
    [PUT_CHALLENGE_INFO]: () => {},
    [PUT_CHALLENGE_DESCRIPTION]: () => {},
    [PUT_START_TIME]: () => {},
    [PUT_END_TIME]: () => {}

});

/* 리듀서 */
const challengesReducer = handleActions(
    {
        [GET_CHALLENGE]: (state, { payload }) => {
            payload.challengeInfo.challengeCategoryNo += '';
            payload.challengeInfo.challengeFrequency += '';
            payload.modifyAttachment = [{}];
            // console.log('getChallenge state : ', state);
            return payload;
        },
        [PUT_CHALLENGE_CATEGORY_NO]: (state, { payload }) => {
            state.challengeInfo.challengeCategoryNo = payload
            
            return {...state};
        },
        [MODIFY_ATTACHMENT]: (state, { payload }) => {

            // console.log('state : ', state);
            // console.log('payload : ', payload);
            console.log('payload : ',payload);
            const index = payload.index;
            const attachment = {
                path: payload.path,
                type: index,
                formData: payload.formData
            }
            // console.log(typeof attachment1);    
            // console.log(attachment1);    
            state.modifyAttachment[index - 1] = attachment;
            return {...state};
        },
        [PUT_CHALLENGE_INFO]: (state, { payload }) => {
            state.challengeInfo.challengeInfo = payload;

            return {...state};
        },
        [PUT_CHALLENGE_DESCRIPTION]: (state, {payload }) => {
            state.challengeInfo.challengeAuthExplan = payload;

            return {...state};
        },
        [PUT_START_TIME]: (state, {payload }) => {
            state.challengeInfo.startTime = payload;

            return {...state};

        },
        [PUT_END_TIME]: (state, {payload }) => {
            state.challengeInfo.endTime = payload;

            return {...state};
        }
    },
    initialState
);

export default challengesReducer;