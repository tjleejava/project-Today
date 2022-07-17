import { combineReducers } from 'redux';
import menuReducer from './MenuModule';
import memberReducer from './MemberModule';
import challengesReducer from './ChallengesModule';
import challengeReducer from './ChallengeDetailModule';
import platformQnaReducer from './PlatformQnaModule';
import reportReducer from './ReportModuls';
import reportExamineReducer from './ReportExamineModule';
import mainpageReducer from './MainpageModule';

const rootReducer = combineReducers({
    menuReducer,
    memberReducer,
    challengesReducer,
    platformQnaReducer,
    reportReducer,
    reportExamineReducer,
    mainpageReducer
});

export default rootReducer;