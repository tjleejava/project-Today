import AuthDayCSS from './AuthDay.module.css';

function AuthDay({ freq, authDay, setAuthDay }) {

  if(freq === '1' || freq === '0') {
    return;
  }

  const authDayChangeHandler = (e) => {
    setAuthDay({
      ...authDay,
      [e.target.name]: e.target.checked
    })

  };  

  return (
    <div className={ AuthDayCSS.area }>
      <input onChange={ authDayChangeHandler } type="checkbox" name='day0' value='0' id='day-0'/><label for='day-0'>월요일</label>
      <input onChange={ authDayChangeHandler } type="checkbox" name='day1' value='1' id='day-1'/><label for='day-1'>화요일</label>
      <input onChange={ authDayChangeHandler } type="checkbox" name='day2' value='2' id='day-2'/><label for='day-2'>수요일</label>
      <input onChange={ authDayChangeHandler } type="checkbox" name='day3' value='3' id='day-3'/><label for='day-3'>목요일</label>
      <input onChange={ authDayChangeHandler } type="checkbox" name='day4' value='4' id='day-4'/><label for='day-4'>금요일</label><br/>
      <input onChange={ authDayChangeHandler } type="checkbox" name='day5' value='5' id='day-5'/><label for='day-5'>토요일</label>
      <input onChange={ authDayChangeHandler } type="checkbox" name='day6' value='6' id='day-6'/><label for='day-6'>일요일</label>
    </div>
  );
}

export default AuthDay;