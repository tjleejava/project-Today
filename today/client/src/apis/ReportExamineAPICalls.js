import axios from 'axios';
import { POST_ACCEPT_CHALLENGE, CHECK_CHALLENGE_REPORT_ACCEPTED } from '../modules/ReportExamineModule';

export function registChallengeReportAccept(acceptInfo) {

  const REGIST_ACCEPT_URL = 'http://localhost:8888/reports/accept';
  return async function registAccept(dispatch, getState) {

    const result = await axios.post(REGIST_ACCEPT_URL , acceptInfo).catch(err => console.log(err));

    dispatch({type: POST_ACCEPT_CHALLENGE, payload: result});
  };
};

export function checkReportExamineAlreadyAcceptedAPI(reportNo) {

  const CHECK_CHELLENGE_REPORT_ACCEPTED_URL = 'http://localhost:8888/reports/acceptedcheck';
  return async function checkReportExamineAlreadyAccepted(dispatch, getState) {
    const result = await axios.get(CHECK_CHELLENGE_REPORT_ACCEPTED_URL, {params: {reportNo: reportNo}}).catch(err => console.log(err));

    dispatch({type: CHECK_CHALLENGE_REPORT_ACCEPTED, payload: result.data[0]});
  };
};