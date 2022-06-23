import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_MENUS = 'menus/GET_MENUS';

const actions = createActions({
    [GET_MENUS]: () => {}
});

/* 리듀서 */
const menuReducer = handleActions(
    {
        [GET_MENUS]: (state, { payload }) => {

            return payload;
        }
    },
    initialState
);

export default menuReducer;