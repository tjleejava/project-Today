import AlarmHeaderCSS from './AlarmHeader.module.css';
import { useDispatch, useSelector } from 'react-redux';
import jwt_decode from "jwt-decode";
import {Cookies} from 'react-cookie'
import { useEffect } from 'react';
import { getAlarmExistAPI } from '../../apis/AlarmAPICAll';

function AlarmHeader() {

  const cookies = new Cookies();
  const token = cookies.get('token'); 

  let memberNo;
  
  if(token) {
    const decoded = jwt_decode(token);
    memberNo = decoded.no;
  }

  useEffect(
    () => {
      
      console.log('AlarmHeader realTimeCheck start...');
      const realTimeCheck = setInterval(
        () => {
          console.log('AlarmHeader realTimeCheck call...');

          dispatch(getAlarmExistAPI(memberNo));
        },10000
      );

      return () => {
        clearInterval(realTimeCheck);
        console.log('AlarmHeader realTimeCheck end...');
      }
    },[]
  );

  const dispatch = useDispatch();
  const {alarmInfo} = useSelector(state => state.realTimeReducer);
  const {isUnreadAlarmExist} = alarmInfo;

  
  return (
    <div className={ AlarmHeaderCSS.area }>
      {
        isUnreadAlarmExist ?
        <img src="/images/header/bell2.png" className={ AlarmHeaderCSS.header} /> :
        <img src="/images/header/bell1.png" className={ AlarmHeaderCSS.header} />
      }
    </div>
  );
}

export default AlarmHeader;