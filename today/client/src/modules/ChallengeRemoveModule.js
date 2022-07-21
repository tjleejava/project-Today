import { createActions, handleActions } from 'redux-actions';

const initialState = {
  isModalOpen: false,
  deleteInfo: {
    deleteReason: '',
    challengeName: ''
  }
};

export const SET_MODAL_STATUS = 'challengeRemove/SET_MODAL_STATUS';
export const SET_DELETE_REASON = 'challengeRemove/SET_DELETE_REASON';
export const SET_DELETE_NAME = 'challengeRemove/SET_DELETE_NAME';

const actions = createActions({
  [SET_MODAL_STATUS]: () => {},
  [SET_DELETE_REASON]: () => {},
  [SET_DELETE_NAME]: () => {},
});

const challengeRemoveReducer = handleActions(
  {
    [SET_DELETE_REASON]: (state, {payload}) => {
      state.deleteInfo.deleteReason = payload;

      return {...state};
    },
    [SET_DELETE_NAME]: (state, {payload}) => {
      state.deleteInfo.challengeName = payload;

      return {...state};
    },
    [SET_MODAL_STATUS]: (state, {payload}) => {
      state.isModalOpen = payload;

      return {...state};
    }
  },initialState
);

export default challengeRemoveReducer;