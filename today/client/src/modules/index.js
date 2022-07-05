import { combineReducers } from 'redux';
import menuReducer from './MenuModule';
import memberReducer from './MemberModule';
import challengesReducer from './ChallengesModule';
import platformQnaReducer from './PlatformQnaModule';
const rootReducer = combineReducers({
    menuReducer,
    memberReducer,
    challengesReducer,
    platformQnaReducer

});

export default rootReducer;