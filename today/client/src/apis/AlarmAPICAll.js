import axios from "axios";
import { GET_ALARMS } from "../modules/AlarmModule";
import { CHECK_ALARM_EXIST } from "../modules/RealTimeModule";

export function getAlarmsAPI(findInfo) {

  const GET_ALARMS_URL = 'http://localhost:8888/alarms';

  return async function getAlarms(dispatch, getState) {

    const result = await axios.get(GET_ALARMS_URL, {params: {findInfo: findInfo}})
                              .catch(err => console.log(err));

    dispatch({type: GET_ALARMS, payload: result.data});
  };
};

export async function putAlarmCheckYNAPI(alarmNo) {
  const PUT_ALARM_STATE_URL = 'http://localhost:8888/alarms/check';

  const result = await axios.put(PUT_ALARM_STATE_URL, {alarmNo: alarmNo}).catch(err => console.log(err));

  console.log('result : ', result.data);

  return result.data;
};

export function getAlarmExistAPI(memberNo) {

  const GET_ALARM_EXIST_URL = 'http://localhost:8888/alarms/check';

  
  return async function getAlarmExist(dispatch, getState) {
    const result = await axios.get(GET_ALARM_EXIST_URL, {params: {memberNo: memberNo}})
                                .catch(err => console.log(err));

    dispatch({type: CHECK_ALARM_EXIST, payload: result.data});
  };
}