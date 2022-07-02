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

const actions = createActions({
    [GET_CHALLENGE]: () => {},
    [PUT_CHALLENGE_CATEGORY_NO]: () => {},
    [MODIFY_ATTACHMENT]: () => {}
});

/* 리듀서 */
const challengesReducer = handleActions(
    {
        [GET_CHALLENGE]: (state, { payload }) => {
            payload.challengeInfo.challengeCategoryNo += '';
            payload.challengeInfo.challengeFrequency += '';
            payload.modifyAttachment = [{}];
            console.log('getChallenge state : ', state);
            return payload;
        },
        [PUT_CHALLENGE_CATEGORY_NO]: (state, { payload }) => {
            state.challengeInfo.challengeCategoryNo = payload
            
            return {...state};
        },
        [MODIFY_ATTACHMENT]: (state, { payload }) => {

            console.log('state : ', state);
            console.log('payload : ', payload);
            const type = payload.type;
            const attachment1 = {
                path: payload.path,
                type: type,
                formData: payload.formData
            }
            console.log(typeof attachment1);    
            console.log(attachment1);    
            state.modifyAttachment[type - 1] = attachment1;
            console.log('state : ', state);
            return {...state};
        }
    },
    initialState
);

export default challengesReducer;
