import MainUserCSS from './MainUser.module.css';
import { NavLink } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import {Cookies} from 'react-cookie'

function MainUser() {

  const cookies = new Cookies();
  let isAdmin = false;
  const token = cookies.get('token');
  let decoded;
  console.log(token);
  if(token) {
    decoded = jwt_decode(token);
    
  }

  return (
    <div className={ MainUserCSS.area }>
      <div className={ MainUserCSS.greeting}>
        <label>어서오세요</label>
      </div>
      <div className={ MainUserCSS.name }>
        { token? <label>{decoded.nickname} 님</label> : null }
      </div>
      
    <NavLink to="/registchallenge">
      <div className={ MainUserCSS.openchl }>
      { token? <button>챌린지 개설하기</button> : null }
        
      </div>
    </NavLink>
      
    </div>
  );
}

export default MainUser;