import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = {
    registInfo: {
        isInviteModalOpen: false,
        inviteEmail: '',
        isExists: false,
        inviteInfo: {},
        isCheck: false,
        isInviteSuccess: -1
    },
    invites: [],
    pageInfo: {
        page: 1,
        totalItemCount: 1, 
        pageItemCount: 10
    }
};

/* 액션 */
export const DELETE_INVITE = 'invite/DELETE_INVITE';
export const GET_INVITES = 'invite/GET_INVITES';
export const POST_INVITE = 'invite/POST_INVITE';
export const CHANGE_INVITE_MODAL = 'invite/CHANGE_INVITE_MODAL';
export const GET_USER_EMAIL = 'invite/GET_USER_EMAIL';
export const SET_UESR_EMAIL = 'invite/SET_UESR_EMAIL';
export const SET_PAGE = 'invite/SET_PAGE';

const actions = createActions({
    [DELETE_INVITE]: () => {},
    [GET_INVITES]: () => {},
    [POST_INVITE]: () => {},
    [CHANGE_INVITE_MODAL]: () => {},
    [GET_USER_EMAIL]: () => {},
    [SET_UESR_EMAIL]: () => {},
    [SET_PAGE]: () => {}

});

/* 리듀서 */
const inviteReducer = handleActions(
    {
        [DELETE_INVITE]: (state, { payload }) => {

            return {...state};
        },
        [GET_INVITES]: (state, {payload}) => {
            state.invites = payload.invites;
            state.pageInfo.totalItemCount = payload.count;
            return {...state};
        },
        [POST_INVITE]: (state, { payload }) => {
            state.registInfo.isInviteSuccess = payload.checkResult;
            return {...state};
        },
        [CHANGE_INVITE_MODAL]: (state, { payload }) => {
            state.registInfo.isInviteModalOpen = payload;
            state.registInfo.isCheck = false;
            state.registInfo.isExists = false;
            state.registInfo.inviteEmail = '';
            state.registInfo.isInviteSuccess = -1;

            return {...state};
        },
        [GET_USER_EMAIL] : (state, { payload }) => {

            state.registInfo.isExists = payload.isExists;
            state.registInfo.isCheck = true;
            state.registInfo.inviteInfo = payload.memberInfo;

            return {...state};
        },
        [SET_UESR_EMAIL]: (state, { payload }) => {

            state.registInfo.inviteEmail = payload;

            return {...state};
        },
        [SET_PAGE]: (state, {payload}) => {

            state.pageInfo.page = payload;

            return {...state};
        }
    },
    initialState
);

export default inviteReducer;
