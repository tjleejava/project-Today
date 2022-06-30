import { combineReducers } from 'redux';
import menuReducer from './MenuModule';
import memberReducer from './MemberModule';
import challengesReducer from './ChallengesModule';

const rootReducer = combineReducers({
    menuReducer,
    memberReducer,
    challengesReducer

});

export default rootReducer;