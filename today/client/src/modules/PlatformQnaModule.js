import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = {
    registInfo: {
        title:'',
        content: ''
    }
};

/* 액션 */
export const POST_TITLE = 'platform/POST_TITLE';
export const POST_CONTENT = 'platform/POST_CONTENT';
const actions = createActions({
    [POST_TITLE]: () => {},
    [POST_CONTENT]: () => {}

});

/* 리듀서 */
const platformQnaReducer = handleActions(
    {
        [POST_TITLE]: (state, { payload }) => {
            state.registInfo.title = payload;
            
            return {...state};
        },
        [POST_CONTENT]: (state, {payload}) => {
            state.registInfo.content = payload;
            console.log('state : ', state);
            console.log('payload : ', payload);

            return {...state};
        }
    },
    initialState
);

export default platformQnaReducer;