import { createActions, handleActions } from 'redux-actions';

const initialState = {
  alarmInfo: {
    isUnreadAlarmExist: false
  }
};

export const CHECK_ALARM_EXIST = 'realtime/CHECK_ALARM_EXIST';

const actions = createActions({
  [CHECK_ALARM_EXIST]: () => {}
});

const realTimeReducer = handleActions(
  {
    [CHECK_ALARM_EXIST]: (state, {payload}) => {

      state.alarmInfo.isUnreadAlarmExist = payload.count > 0? true: false;
      return {...state};
    }
  },
  initialState
);

export default realTimeReducer;