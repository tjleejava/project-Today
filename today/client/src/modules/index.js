import { combineReducers } from 'redux';
import menuReducer from './MenuModule';
import memberReducer from './MemberModule';
import challengesReducer from './ChallengesModule';
import platformQnaReducer from './PlatformQnaModule';
import reportReducer from './ReportModuls';
import reportExamineReducer from './ReportExamineModule';

const rootReducer = combineReducers({
    menuReducer,
    memberReducer,
    challengesReducer,
    platformQnaReducer,
    reportReducer,
    reportExamineReducer
});

export default rootReducer;