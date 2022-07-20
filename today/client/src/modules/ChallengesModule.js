import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = {
    attachmentInfo: {},
    challengeInfo: {},
    authDayInfo: {},
    modifyAttachment: [{}, {}, {}, {}],
    presentTab: '1',
    partCount: 0,
    isPartIn: false,
    isHost: false
};

/* 액션 */
export const GET_CHALLENGE = 'challenges/GET_CHALLENGE';
export const PUT_CHALLENGE_CATEGORY_NO = 'challenges/PUT_CHALLENGE_CATEGORY_NO';
export const MODIFY_ATTACHMENT = 'challenges/MODIFY_ATTACHMENT';
export const SET_MODIFY_ATTACHMENT = 'challenges/SET_MODIFY_ATTACHMENT';
export const PUT_CHALLENGE_INFO = 'challenges/PUT_CHALLENGE_INFO';
export const PUT_CHALLENGE_DESCRIPTION = 'challenges/PUT_CHALLENGE_DESCRIPTION';
export const PUT_START_TIME = 'challenges/PUT_START_TIME';
export const PUT_END_TIME = 'challenges/PUT_END_TIME';
export const CHANGE_CHALLENGE_DETAIL_PRESENTTAB = 'challenges/CHANGE_CHALLENGE_DETAIL_PRESENTTAB';
export const GET_CHALLENGE_AUTH_BY_MEMBER = 'challenges/GET_CHALLENGE_AUTH_BY_MEMBER';
export const SET_CHALLENGE_HOST_OR_NOT = 'challenges/SET_CHALLENGE_HOST_OR_NOT';

const actions = createActions({
    [GET_CHALLENGE]: () => {},
    [PUT_CHALLENGE_CATEGORY_NO]: () => {},
    [MODIFY_ATTACHMENT]: () => {},
    [SET_MODIFY_ATTACHMENT]: () => {},
    [PUT_CHALLENGE_INFO]: () => {},
    [PUT_CHALLENGE_DESCRIPTION]: () => {},
    [PUT_START_TIME]: () => {},
    [PUT_END_TIME]: () => {},
    [GET_CHALLENGE_AUTH_BY_MEMBER]: () => {},
    [CHANGE_CHALLENGE_DETAIL_PRESENTTAB]: () => {},
    [SET_CHALLENGE_HOST_OR_NOT]: () => {}

});

/* 리듀서 */
const challengesReducer = handleActions(
    {
        [GET_CHALLENGE]: (state, { payload }) => {

            state.challengeInfo = payload.challengeInfo;
            state.authDayInfo = payload.authDayInfo;
            state.attachmentInfo = payload.attachmentInfo;
            
            return {...state};
        },
        [PUT_CHALLENGE_CATEGORY_NO]: (state, { payload }) => {
            state.challengeInfo.challengeCategoryNo = payload
            
            return {...state};
        },
        [MODIFY_ATTACHMENT]: (state, { payload }) => {

            const index = payload.index;
            const attachment = {
                path: payload.path,
                type: index,
                formData: payload.formData
            }

            state.modifyAttachment[index - 1] = attachment;
            return {...state};
        },
        [SET_MODIFY_ATTACHMENT]: (state, { payload }) => {

            if(payload.data) {
                state.modifyAttachment[payload.index].fileInfo = payload.data.data;
            }

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
        },
        [CHANGE_CHALLENGE_DETAIL_PRESENTTAB]: (state, {payload }) => {
            state.presentTab = payload;

            return {...state};
        },
        [GET_CHALLENGE_AUTH_BY_MEMBER]: (state, {payload }) => {

            state.isPartIn = (payload.isPartIn == 1? true: false);
            state.partCount = payload.partCount;
            return state;
        },
        [SET_CHALLENGE_HOST_OR_NOT]: (state, {payload }) => {

            state.isHost = payload;

            return state;
        }
    },
    initialState
);

export default challengesReducer;