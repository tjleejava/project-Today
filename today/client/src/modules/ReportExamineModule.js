import { createActions, handleActions } from 'redux-actions';

const initialState = {
  challengeReportAcceptInfo: {
    challengePenalty: false,
    hostPenalty: false,
    penaltyDate: 1
  },
  checkChallengeReportAccepted: {
    challengeCancelDate: '',
    penaltyDate: 0,
  }
};

export const POST_ACCEPT_CHALLENGE = 'reportExamine/POST_ACCEPT_CHALLENGE';
export const ACCEPT_CHALLENGE_CHALLENGE_CANCEL = 'reportExamine/ACCEPT_CHALLENGE_CHALLENGE_CANCEL';
export const ACCEPT_CHALLENGE_PENALTY_DATE = 'reportExamine/ACCEPT_CHALLENGE_PENALTY_DATE';
export const ACCEPT_CHALLENGE_HOST = 'reportExamine/ACCEPT_CHALLENGE_HOST';
export const CHECK_CHALLENGE_REPORT_ACCEPTED = 'reportExamine/CHECK_CHALLENGE_REPORT_ACCEPTED';
const actions = createActions({
  [POST_ACCEPT_CHALLENGE]: () => {},
  [ACCEPT_CHALLENGE_CHALLENGE_CANCEL]: () => {},
  [ACCEPT_CHALLENGE_HOST]: () => {},
  [ACCEPT_CHALLENGE_PENALTY_DATE]: () => {},
  [CHECK_CHALLENGE_REPORT_ACCEPTED]: () => {}
});

const reportExamineReducer = handleActions(
  {
    [POST_ACCEPT_CHALLENGE]: (state, { payload }) => {
      console.log(payload);
      return {...state};
    },
    [ACCEPT_CHALLENGE_CHALLENGE_CANCEL]: (state, { payload }) => {
      state.challengeReportAcceptInfo.challengePenalty = payload

      return {...state};
    },
    [ACCEPT_CHALLENGE_PENALTY_DATE]: (state, { payload }) => {
      state.challengeReportAcceptInfo.penaltyDate = payload

      return {...state};
    },
    [ACCEPT_CHALLENGE_HOST]: (state, { payload }) => {
      state.challengeReportAcceptInfo.hostPenalty = payload

      return {...state};
    },
    [CHECK_CHALLENGE_REPORT_ACCEPTED]: (state, { payload }) => {
      
      console.log(payload);
      state.checkChallengeReportAccepted.penaltyDate = parseInt(payload.penaltyDate);
      state.checkChallengeReportAccepted.challengeCancelDate = payload.challengeCancelDate;
      
      console.log(state.checkChallengeReportAccepted);

      return {...state};
    }
  },initialState
);

export default reportExamineReducer;