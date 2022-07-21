import { useDispatch, useSelector } from 'react-redux';
import AlarmModal from '../../components/mypage/alarm/AlarmModal';
import AlarmPage from '../../components/mypage/alarm/AlarmPage';
import { CHANGE_MODAL_STATE } from '../../modules/AlarmModule';
import AA from './AA';
import AlarmCSS from './Alarm.module.css';

function Alarm() {

  
  const dispatch = useDispatch();
  const {readInfo, unreadInfo, modalState} = useSelector(state => state.alarmReducer);

  const rowClickHandler = (alarm) => {
    dispatch({type: CHANGE_MODAL_STATE, payload: {modalState: !modalState, info: alarm}});
  };

  // const list = readInfo.map( (a) => (<AA t={a}/>));
  
  const rowMouseOverHandler = (no) => {

    const tr = document.getElementById(no);
    tr.style.backgroundColor='#535312';
    tr.style.color='white';
    tr.style.cursor='pointer';
  };

  const rowMouseOutHandler = (no) => {

    const tr = document.getElementById(no);
    tr.style.backgroundColor='white';
    tr.style.color='#535312';
  };

  return (
    <div className={AlarmCSS.area}>
      
      <div className={AlarmCSS.head}>
        <label>알림 목록</label>
        <hr/>
      </div>
      
      <div className={AlarmCSS.body}>
        
        <div className={AlarmCSS.notRead}>
          <div className={AlarmCSS.alarmarea}>
          <label className={AlarmCSS.alarmtitle}>미확인 알림</label>
          <hr/>
          {
            unreadInfo.map(
              alarm => 
              <div 
                className={AlarmCSS.alarm}
                onClick={ () => rowClickHandler(alarm)}
                key={alarm.alarmNo}
                onMouseOver={ () => rowMouseOverHandler(alarm.alarmNo)}
                onMouseOut={ () => rowMouseOutHandler(alarm.alarmNo)}
                id={alarm.alarmNo}
              >
                {alarm.alarmContent}
              </div>
            )
          }
            
          </div>
        </div>

        <div className={AlarmCSS.read}>
          <div className={AlarmCSS.alarmarea}>
          <label className={AlarmCSS.alarmtitle}>확인 알림</label>
          <hr/>
          {
            readInfo.map(
              alarm => 
              <div
                className={AlarmCSS.alarm}
                onClick={ () => rowClickHandler(alarm)}
                key={alarm.alarmNo}
                onMouseOver={ () => rowMouseOverHandler(alarm.alarmNo)}
                onMouseOut={ () => rowMouseOutHandler(alarm.alarmNo)}
                id={alarm.alarmNo}
              >
                {alarm.alarmContent}
              </div>
            )
          }
          </div>
          
        </div>

      </div>
      <div className={AlarmCSS.pagearea}>
        <div className={AlarmCSS.btnarea}>
          <div className={AlarmCSS.btnbox}>
            <AlarmPage type='unread'/>
          </div>
        </div>
        <div className={AlarmCSS.btnarea}>
          <div className={AlarmCSS.btnbox}>
            <AlarmPage type='read'/>
          </div>
        </div>
      </div>
      <AlarmModal/>
    </div>
  );
}

export default Alarm;