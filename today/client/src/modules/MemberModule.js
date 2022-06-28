import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const POST_MEMBER = 'members/POST_MEMBER';

const actions = createActions({
    [POST_MEMBER]: () => {}
});

/* 리듀서 */
const memberReducer = handleActions(
    {
        [POST_MEMBER]: (state, { payload }) => {

            return payload;
        }
    },
    initialState
);

export default memberReducer;