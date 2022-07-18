import { combineReducers } from 'redux';
import menuReducer from './MenuModule';
import memberReducer from './MemberModule';
import challengesReducer from './ChallengesModule';
import challengelistReducer from './ChallengeListModule';
import inviteReducer from './InviteModule';
import platformQnaReducer from './PlatformQnaModule';
import reportReducer from './ReportModuls';
import reportExamineReducer from './ReportExamineModule';
import mainpageReducer from './MainpageModule';

const rootReducer = combineReducers({
    menuReducer,
    memberReducer,
    challengesReducer,
    challengelistReducer,
    inviteReducer,
    platformQnaReducer,
    reportReducer,
    reportExamineReducer,
    mainpageReducer
});

export default rootReducer;