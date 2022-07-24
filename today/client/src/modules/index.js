import { combineReducers } from 'redux';
import menuReducer from './MenuModule';
import memberReducer from './MemberModule';
import challengesReducer from './ChallengesModule';
import challengelistReducer from './ChallengeListModule';
import challengeRegistReducer from './ChallengeRegistModule';
import challengeRemoveReducer from './ChallengeRemoveModule';
import inviteReducer from './InviteModule';
import platformQnaReducer from './PlatformQnaModule';
import reportReducer from './ReportModuls';
import reportExamineReducer from './ReportExamineModule';
import mainpageReducer from './MainpageModule';
import mypageReducer from './MypageModule';
import alarmReducer from './AlarmModule';
import realTimeReducer from './RealTimeModule';
import challengeInquiryReducer from './challenge-inquiry-module/ChallengeInquiryModule';

const rootReducer = combineReducers({
    menuReducer,
    memberReducer,
    challengesReducer,
    challengelistReducer,
    challengeRegistReducer,
    challengeRemoveReducer,
    inviteReducer,
    platformQnaReducer,
    reportReducer,
    reportExamineReducer,
    mainpageReducer,
    mypageReducer,
    alarmReducer,
    realTimeReducer,
    challengeInquiryReducer
});

export default rootReducer;