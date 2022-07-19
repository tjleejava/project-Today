import AuthDayCSS from './AuthDay.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { SET_AUTHDAY } from '../../../modules/ChallengeRegistModule';

function AuthDay({ freq }) {

  const dispatch = useDispatch();
  const {authDay} = useSelector(state => state.challengeRegistReducer);

  if(freq === '1' || freq === '0') {
    return;
  }

  return (
    <div className={ AuthDayCSS.area }>
      <input onChange={ (e) => dispatch({type: SET_AUTHDAY, payload: e.target}) } type="checkbox" name='day0' value='0' id='day-0'/><label htmlFor='day-0'>월요일</label>
      <input onChange={ (e) => dispatch({type: SET_AUTHDAY, payload: e.target}) } type="checkbox" name='day1' value='1' id='day-1'/><label htmlFor='day-1'>화요일</label>
      <input onChange={ (e) => dispatch({type: SET_AUTHDAY, payload: e.target}) } type="checkbox" name='day2' value='2' id='day-2'/><label htmlFor='day-2'>수요일</label>
      <input onChange={ (e) => dispatch({type: SET_AUTHDAY, payload: e.target}) } type="checkbox" name='day3' value='3' id='day-3'/><label htmlFor='day-3'>목요일</label>
      <input onChange={ (e) => dispatch({type: SET_AUTHDAY, payload: e.target}) } type="checkbox" name='day4' value='4' id='day-4'/><label htmlFor='day-4'>금요일</label><br/>
      <input onChange={ (e) => dispatch({type: SET_AUTHDAY, payload: e.target}) } type="checkbox" name='day5' value='5' id='day-5'/><label htmlFor='day-5'>토요일</label>
      <input onChange={ (e) => dispatch({type: SET_AUTHDAY, payload: e.target}) } type="checkbox" name='day6' value='6' id='day-6'/><label htmlFor='day-6'>일요일</label>
    </div>
  );
}

export default AuthDay;