import { createActions, handleActions } from 'redux-actions';

const initialState = {
  registInfo: {
    reportCategory:'7',
    reportContent:'',
    reportDate:''
  },
  isAlreadyReported: false,
  pageInfo: {
    page: 1,
    totalItemCount: 1,
    pageItemCount: 10,
    type: ''
  },
  reports: [],
  report: {},
  examineInfo: {}
};

export const POST_CHALLENGE_REPORT = 'report/POST_CHALLENGE_REPORT';
export const CHECK_REPORT_CATEGORY = 'report/CHECK_REPORT_CATEGORY';
export const CHANGE_REPORT_CONTENT = 'report/CHANGE_REPORT_CONTENT';
export const GET_CHECK_CHELLENGE_REPORT = 'report/GET_CHECK_CHELLENGE_REPORT';
export const GET_CHALLENGE_REPORT = 'report/GET_CHALLENGE_REPORT';
export const PAGE_CHANGE = 'report/PAGE_CHANGE';
export const GET_REPORT = 'report/GET_REPORT';
export const POST_REPORT_REFUSE = 'report/POST_REPORT_REFUSE';
export const SET_REPORT_REGIST_INFO = 'report/SET_REPORT_REGIST_INFO';

const actions = createActions({
  [POST_CHALLENGE_REPORT]: () => {},
  [CHECK_REPORT_CATEGORY]: () => {},
  [CHANGE_REPORT_CONTENT]: () => {},
  [GET_CHECK_CHELLENGE_REPORT]: () => {},
  [GET_CHALLENGE_REPORT]: () => {},
  [PAGE_CHANGE]: () => {},
  [GET_REPORT]: () => {},
  [POST_REPORT_REFUSE]: () => {},
  [SET_REPORT_REGIST_INFO]: () => {}
});

const reportReducer = handleActions(
  {
    [SET_REPORT_REGIST_INFO]: (state, { payload }) => {
      state.registInfo = { reportCategory:'7', reportContent:'', reportDate:'' };

      return {...state};
    },
    [POST_CHALLENGE_REPORT]: (state, { payload }) => {
      state.isAlreadyReported = true;

      return {...state};
    },
    [CHECK_REPORT_CATEGORY]: (state, {payload}) => {

      state.registInfo.reportCategory = payload;
      return {...state};
    },
    [CHANGE_REPORT_CONTENT]: (state, {payload}) => {
      state.registInfo.reportContent = payload;

      return {...state};
    },
    [GET_CHECK_CHELLENGE_REPORT]: (state, {payload}) => {
      
      state.isAlreadyReported = payload > 0? true: false;
      
      return {...state};
    },
    [GET_CHALLENGE_REPORT]: (state, {payload}) => { 
      state.reports = payload.results;
      state.pageInfo.totalItemCount = payload.totalItemCount;

      return {...state};
    },
    [PAGE_CHANGE]: (state, {payload}) => {
      state.pageInfo.page = payload;

      return {...state};
    },
    [GET_REPORT]: (state, {payload}) => {

      state.report = payload.report;
      state.examineInfo = payload.reportExamine;

      return {...state};
    },
    [POST_REPORT_REFUSE]: (state, payload) => {

      return {...state};
    }
  },initialState
);

export default reportReducer;