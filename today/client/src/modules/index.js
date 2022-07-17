import { combineReducers } from 'redux';
import menuReducer from './MenuModule';
import memberReducer from './MemberModule';
import challengesReducer from './ChallengesModule';
import challengeReducer from './ChallengeDetailModule';
import platformQnaReducer from './PlatformQnaModule';
import mainpageReducer from './MainpageModule';

const rootReducer = combineReducers({
    menuReducer,
    memberReducer,
    challengesReducer,
    challengeReducer,
    platformQnaReducer,
    mainpageReducer
});

export default rootReducer;