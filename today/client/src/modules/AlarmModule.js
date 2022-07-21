import { createActions, handleActions } from 'redux-actions';

const initialState = {
  readInfo: [],
  unreadInfo: [],
  readPageInfo: {
    page: 1,
    totalItemCount: 1, 
    pageItemCount: 10
  },
  unreadPageInfo: {
    page: 1,
    totalItemCount: 1, 
    pageItemCount: 10
  },
  modalState: false,
  modalInfo: {}
};

export const GET_ALARMS  = 'alarm/GET_ALARMS';
export const CHANGE_PAGE  = 'alarm/CHANGE_PAGE';
export const CHANGE_MODAL_STATE  = 'alarm/CHANGE_MODAL_STATE';

const actions = createActions({
  [GET_ALARMS]: () => {},
  [CHANGE_PAGE]: () => {},
  [CHANGE_MODAL_STATE]: () => {}
});

const alarmReducer = handleActions(
  {
    [CHANGE_PAGE]: (state, {payload: {page, type}}) => {

      type == 'read'? state.readPageInfo.page = page: state.unreadPageInfo.page = page;

      return {...state};
    },
    [GET_ALARMS]: (state, { payload: {readAlarms, unreadAlarms, readCount, unreadCount} }) => {
      state.readInfo = readAlarms;
      state.unreadInfo = unreadAlarms;
      state.readPageInfo.totalItemCount = readCount;
      state.unreadPageInfo.totalItemCount = unreadCount;

      return {...state};
    },
    [CHANGE_MODAL_STATE]: (state, { payload:{modalState, info} }) => {
      state.modalState = modalState;
      info && (state.modalInfo = info)

      console.log(modalState);
      return {...state};
    }
  },initialState
);

export default alarmReducer;