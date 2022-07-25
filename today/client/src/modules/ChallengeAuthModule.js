import { createActions, handleActions } from 'redux-actions';

const initialState = {
    challengeNo: 0,
    authNo: 0,
    status: '',
    authDate: '',
    authContent: ''
};

export const GET_CHALLENGE_AUTHS = "challenges/GET_CHALLENGE_AUTHS";

const actions = createActions({
    [GET_CHALLENGE_AUTHS]: () => {}
});

const challengeAuthReducer = handleActions(
    {
        [GET_CHALLENGE_AUTHS]: (state, { payload }) => {
            state.challengeNo = payload.challengeNo;
            state.authNo = payload.authNo;
            state.status = payload.status;
            state.authDate = payload.authDate;
            state.authContent = payload.authContent;

            return { ...state };
        }
    },
    initialState
);

export default challengeAuthReducer;