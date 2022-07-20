import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = {
  pageInfo: {
    page: 1,
    totalItemCount: 1, 
    pageItemCount: 10,
    searchValue: '',
    category: '0'
  },
  challenges: []
};

export const GET_CHALLENGE_LIST = 'challengelist/GET_CHALLENGE_LIST';
export const SET_SEARCH_VALUE = 'challengelist/SET_SEARCH_VALUE';
export const SET_CATEGORY = 'challengelist/SET_CATEGORY';
export const SET_PAGE = 'challengelist/SET_PAGE';

const actions = createActions({
  [GET_CHALLENGE_LIST]: () => {},
  [SET_SEARCH_VALUE]: () => {},
  [SET_CATEGORY]: () => {},
  [SET_PAGE]: () => {}
});

const challengelistReducer = handleActions(
  {
    [GET_CHALLENGE_LIST]: (state, {payload}) => {
      state.challenges = payload.challenges;
      state.pageInfo = payload.pageInfo;

      return {...state};
    },
    [SET_SEARCH_VALUE]: (state, { payload }) => {
      state.pageInfo.searchValue = payload;

      return {...state};
    },
    [SET_CATEGORY]: (state, { payload }) => {
      state.pageInfo.category = payload;

      return {...state};
    },
    [SET_PAGE]: (state, { payload }) => {
      state.pageInfo.page = payload;
      
      return {...state};
    }
  },initialState
);

export default challengelistReducer;