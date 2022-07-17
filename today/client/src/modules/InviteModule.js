import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = {
    isInviteModalOpen: false,
    inviteEmail: '',
    isExists: false,
    inviteInfo: {},
    isCheck: false
};

/* 액션 */
export const CHANGE_INVITE_MODAL = 'invite/CHANGE_INVITE_MODAL';
export const GET_USER_EMAIL = 'invite/GET_USER_EMAIL';
export const SET_UESR_EMAIL = 'invite/SET_UESR_EMAIL';

const actions = createActions({
    [CHANGE_INVITE_MODAL]: () => {},
    [GET_USER_EMAIL]: () => {},
    [SET_UESR_EMAIL]: () => {}

});

/* 리듀서 */
const inviteReducer = handleActions(
    {
        [CHANGE_INVITE_MODAL]: (state, { payload }) => {
            state.isInviteModalOpen = payload;
            state.isCheck = false;
            state.inviteEmail = '';
            return {...state};
        },
        [GET_USER_EMAIL] : (state, { payload }) => {

            state.isExists = payload.isExists;
            state.isCheck = true;
            state.inviteInfo = payload.memberInfo;

            console.log(state.inviteInfo);
            return {...state};
        },
        [SET_UESR_EMAIL]: (state, { payload }) => {

            state.inviteEmail = payload;

            return {...state};
        }
    },
    initialState
);

export default inviteReducer;
