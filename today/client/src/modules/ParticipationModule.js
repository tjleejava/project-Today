import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const GET_PARTICIPATIONS = "challenges/GET_PARTICIPATIONS";

const actions = createActions({
    [GET_PARTICIPATIONS]: () => {}
});

const participationReducer = handleActions(
    {
        [GET_PARTICIPATIONS]: (state, { payload }) => {

            console.log("state from participationModule : ", state);

            console.log("payload from participation : ", payload);

            return payload;
        }
    },
    initialState
);

export default participationReducer;