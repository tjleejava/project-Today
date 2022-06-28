import { combineReducers } from 'redux';
import menuReducer from './MenuModule';
import memberReducer from './MemberModule';

const rootReducer = combineReducers({
    menuReducer,
    memberReducer

});

export default rootReducer;