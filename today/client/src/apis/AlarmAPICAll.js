import axios from "axios";
import { GET_ALARMS } from "../modules/AlarmModule";

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

  console.log(alarmNo);
  const result = await axios.put(PUT_ALARM_STATE_URL, {alarmNo: alarmNo}).catch(err => console.log(err));
};