import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = 
  {
    isDuplicate: true,
    authNumber: 0,
    isSendEmailSuccess: false,
    isEmailReg: false,
    isDisabled: true,
    resultNo: 3,
    isResetSuccess: false,
    isIdExist: true
  }
;

/* 액션 */
export const POST_MEMBER = 'members/POST_MEMBER';
export const GET_EMAIL = 'members/GET_EMAIL';
export const CHECK_DUPLICATE = 'members/CHECK_DUPLICATE';
export const CHECK_AUTH_NUMBER  = 'members/CHECK_AUTH_NUMBER';
export const GET_ISDISABLED = 'members/GET_ISDISABLED';
export const CHECK_ID = 'members/CHECK_ID';
export const RESET_PWD = 'members/RESET_PWD';
export const RESET_PWD_ID_EXIST = 'members/RESET_PWD_ID_EXIST';

const actions = createActions({
    [POST_MEMBER]: () => {},
    [GET_EMAIL]: () => {},
    [CHECK_DUPLICATE]: () => {},
    [CHECK_AUTH_NUMBER]: () => {},
    [GET_ISDISABLED]: () => {},
    [CHECK_ID]: () => {},
    [RESET_PWD]: () => {},
    [RESET_PWD_ID_EXIST]: () => {}
});

/* reducer 연습 */
// function reducer(state = initialState, action) {

//   const { type, payload} = action;
//   switch(type) {
//     case POST_MEMBER:
//       return payload;
//   }
// }

/* 리듀서 */
const memberReducer = handleActions(
    {  
        [POST_MEMBER]: (state, { payload }) => {

            return payload;
        },

        [GET_EMAIL]: (state, { payload }) => {

          console.log(payload);

          console.log(state);

          state.isDuplicate = payload;

          let newState = {...state};

          return newState;
        },

        [CHECK_AUTH_NUMBER]: (state, {payload}) => {
          console.log(state);
          console.log(payload);
          
          state.authNumber = payload
          state.isSendEmailSuccess = true;
        
          console.log(state);
          let newState = {...state};
          
          return newState;
        },
      
        [GET_ISDISABLED]: (state, { payload }) => {
          state.isDisabled = payload;
          let newState = {...state};

          return newState;
        },
        [CHECK_ID]: (state, {payload}) => {
          state.resultNo = payload;
          let newState = {...state};

          return newState;
        },
        [RESET_PWD]: (state, {payload}) => {
          state.isResetSuccess = payload;
          let newState = {...state};

          return newState;
        },
        [RESET_PWD_ID_EXIST]: (state, {payload}) => {
          state.isIdExist = payload;
          let newState = {...state};

          return newState;
        }
    },
    initialState
);

export default memberReducer;