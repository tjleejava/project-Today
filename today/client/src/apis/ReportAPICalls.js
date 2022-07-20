import axios from 'axios';
import { POST_REPORT_REFUSE, GET_REPORT, GET_CHALLENGE_REPORT, POST_CHALLENGE_REPORT, GET_CHECK_CHELLENGE_REPORT } from '../modules/ReportModuls';

export function callReportRefuseAPI(refuseInfo) {

  const REFUSE_REPORT_URL = 'http://localhost:8888/reports/refuse';
  return async function refuseReport(dispatch, getState) {

    const result = await axios.post(REFUSE_REPORT_URL, refuseInfo).catch(err => console.log(err));

    dispatch({type: POST_REPORT_REFUSE, payload: result});

  };
};

export function callPostChallengeReportATI(registInfo) {
  const REGIST_REPORT_URL = 'http://localhost:8888/reports';

  return async function postReport(dispatch, getState) {

    const result = await axios.post(REGIST_REPORT_URL, registInfo).catch(err => console.log(err));

    console.log(result);

    dispatch({ type: POST_CHALLENGE_REPORT, payload: {}});
  };
};

export function checkChallengeReportAPI(checkInfo) {
  

  const CHECK_CHALLENGE_REPORT_URL = 'http://localhost:8888/reports/challengecheck';

  return async function checkChallengeReport(dispatch, getState) {

    const result = await axios.get(CHECK_CHALLENGE_REPORT_URL, { params: {checkInfo}}).catch(err => console.log(err));

    dispatch({ type: GET_CHECK_CHELLENGE_REPORT, payload: result.data.result })
  };
};

export function getchallengeReportsAPI(pageInfo) {
  const GET_CHALLENGE_REPORT_URL = 'http://localhost:8888/reports';

  return async function getChallengeReports(dispatch, getState) {
    const result = await axios.get(GET_CHALLENGE_REPORT_URL,{ params: {pageInfo}})
                              .catch(err => console.log(err));

    dispatch({ type: GET_CHALLENGE_REPORT, payload: result.data});
  };
};

export function getReportAPI(reportNo) {
  const GET_REPORT_URL = 'http://localhost:8888/reports/' + reportNo;

  return async function getReport(dispatch, getState) {
    const result = await axios.get(GET_REPORT_URL).catch(err => console.log(err));

    dispatch({ type: GET_REPORT, payload: result.data});
  };
}