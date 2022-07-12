import { combineReducers } from 'redux';
import menuReducer from './MenuModule';
import memberReducer from './MemberModule';
import challengesReducer from './ChallengesModule';
import platformQnaReducer from './PlatformQnaModule';
import reportReducer from './ReportModuls';

const rootReducer = combineReducers({
    menuReducer,
    memberReducer,
    challengesReducer,
    platformQnaReducer,
    reportReducer

});

export default rootReducer;