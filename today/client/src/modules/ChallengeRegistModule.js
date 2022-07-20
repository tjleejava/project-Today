import { createActions, handleActions } from 'redux-actions';

const initialState = {
  registInfo: {
      registTime: '',
      memberNo: 0,
      category: 0,  
      title: '',  
      description: '',
      freq: '0',    
      term: '',   
      scope: '',
      startDate: '',  
      startTime: '',
      endTime: '',
      info: '',
      amount: 2,
      authDay: {
        day0: false,
        day1: false,
        day2: false,
        day3: false,
        day4: false,
        day5: false,
        day6: false
    },
    path: [
      '/images/registchallenge/download.png',
      '/images/registchallenge/download.png',
      '/images/registchallenge/download.png',
      '/images/registchallenge/download.png'
    ],
    fileInfos: [
      {},{},{},{}
    ],
    inputFiles: [
      {},{},{},{}
    ],
    fileCheck: [
      false,false,false,false
    ]
  },
  isRegistSucceses: 0
};

export const SET_REGIST_TIME = 'challengeRegist/SET_REGIST_TIME';
export const SET_TITLE = 'challengeRegist/SET_TITLE';
export const SET_CATEGORY = 'challengeRegist/SET_CATEGORY';
export const SET_DESCRIPTION = 'challengeRegist/SET_DESCRIPTION';
export const SET_FREQ = 'challengeRegist/SET_FREQ';
export const SET_TERM = 'challengeRegist/SET_TERM';
export const SET_SCOPE = 'challengeRegist/SET_SCOPE';
export const SET_START_DATE = 'challengeRegist/SET_START_DATE';
export const SET_START_TIME = 'challengeRegist/SET_START_TIME';
export const SET_END_TIME = 'challengeRegist/SET_END_TIME';
export const SET_INFO = 'challengeRegist/SET_INFO';
export const SET_AMOUNT = 'challengeRegist/SET_AMOUNT';
export const SET_AUTHDAY = 'challengeRegist/SET_AUTHDAY';
export const SET_PATH = 'challengeRegist/SET_PATH';
export const SET_INPUT_FILE = 'challengeRegist/SET_INPUT_FILE';
export const SET_FILE_CHECK = 'challengeRegist/SET_FILE_CHECK';
export const SET_MEMBER_NO = 'challengeRegist/SET_MEMBER_NO';
export const SET_FILE_INFO = 'challengeRegist/SET_FILE_INFO';
export const SET_PAGE = 'challengeRegist/SET_PAGE';
export const POST_CHALLENGE = 'challengeRegist/POST_CHALLENGE';



const actions = createActions({
  [SET_REGIST_TIME]: () => {},
  [SET_TITLE]: () => {},
  [SET_CATEGORY]: () => {},
  [SET_DESCRIPTION]: () => {},
  [SET_FREQ]: () => {},
  [SET_TERM]: () => {},
  [SET_SCOPE]: () => {},
  [SET_START_DATE]: () => {},
  [SET_START_TIME]: () => {},
  [SET_END_TIME]: () => {},
  [SET_INFO]: () => {},
  [SET_AMOUNT]: () => {},
  [SET_AUTHDAY]: () => {},
  [SET_PATH]: () => {},
  [SET_INPUT_FILE]: () => {},
  [SET_FILE_CHECK]: () => {},
  [SET_MEMBER_NO]: () => {},
  [SET_FILE_INFO]: () => {},
  [SET_PAGE]: () => {},
  [POST_CHALLENGE]: () => {}
  
});

const challengeRegistReducer = handleActions(
  {
    [SET_REGIST_TIME] : (state, {payload}) => {
      state.registInfo.registTime = payload;

      return {...state};
    },
    [SET_TITLE] : (state, { payload }) => {

      state.registInfo.title = payload
      return {...state};
    },
    [SET_CATEGORY] : (state, { payload }) => {

      state.registInfo.category = payload
      return {...state};
    },
    [SET_DESCRIPTION] : (state, { payload }) => {

      state.registInfo.description = payload
      return {...state};
    },
    [SET_FREQ] : (state, {payload}) => {
      state.registInfo.freq = payload;
      
      if(payload == '1') {
        for(let i = 0; i < 7; i++) {
          state.registInfo.authDay['day' + i] = true;
        }
      }
      return {...state};
    },
    [SET_TERM] : (state, {payload}) => {
      state.registInfo.term = payload;
      return {...state};
    },
    [SET_SCOPE] : (state, {payload}) => {
      state.registInfo.scope = payload;
      return {...state};
    },
    [SET_START_DATE] : (state, {payload}) => {
      state.registInfo.startDate = payload;
      return {...state};
    },
    [SET_START_TIME] : (state, {payload}) => {
      state.registInfo.startTime = payload;
      return {...state};
    },
    [SET_END_TIME] : (state, {payload}) => {
      state.registInfo.endTime = payload;
      return {...state};
    },
    [SET_INFO] : (state, {payload}) => {
      state.registInfo.info = payload;
      return {...state};
    },
    [SET_AMOUNT] : (state, {payload}) => {
      state.registInfo.amount = payload;
      return {...state};
    },
    [SET_AUTHDAY] : (state, {payload}) => {
      state.registInfo.authDay = {...state.registInfo.authDay,[payload.name]: payload.checked}

      return {...state};
    },
    [SET_PATH] : (state, {payload}) => {
      const index = payload.index;
      state.registInfo.path[index] = payload.path;

      return {...state};
    },
    [SET_INPUT_FILE] : (state, {payload}) => {
      const index = payload.index;
      state.registInfo.inputFiles[index] = payload.inputFile;

      return {...state};
    },
    [SET_FILE_CHECK] : (state, {payload}) => {
      state.registInfo.fileCheck[payload.current] = true;

      return {...state};
    },
    [SET_MEMBER_NO] : (state, {payload}) => {
      state.registInfo.memberNo = payload;
      
      return {...state};
    },
    [SET_FILE_INFO] : (state, {payload}) => {

      state.registInfo.fileInfos[payload.index] = payload.data;

      return {...state};
    },
    [SET_PAGE] : (state, {payload}) => {
      state.isRegistSucceses = payload;
      return {...state};
    },
    [POST_CHALLENGE] : (state, {payload}) => {

      state.isRegistSucceses = payload.insertId;
      
      return {...state};
    }
  }
  ,initialState
);

export default challengeRegistReducer;