import MainSearchCSS from './MainSearch.module.css';
import { NavLink } from 'react-router-dom';

function MainSearch() {
  return (
    <div className={ MainSearchCSS.area}>
      <input/>
      <NavLink to ='/challenges'>
        <button className={ MainSearchCSS.btn}>검색</button> 
      </NavLink>
    </div>
  );
}

export default MainSearch;