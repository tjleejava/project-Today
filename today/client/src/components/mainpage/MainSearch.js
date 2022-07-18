import MainSearchCSS from './MainSearch.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {SET_SEARCH_VALUE} from '../../modules/ChallengeListModule';

function MainSearch() {

  const dispatch = useDispatch();
  const {pageInfo} = useSelector(state => state.challengelistReducer);

  const onChangeHandler = (e) => {
    dispatch({type: SET_SEARCH_VALUE, payload: e.target.value});
  };
  return (
    <div className={ MainSearchCSS.area}>
      <input value={ pageInfo.searchValue } onChange={ onChangeHandler }/>
      <NavLink to ='/challenges'>
        <button className={ MainSearchCSS.btn}>검색</button> 
      </NavLink>
    </div>
  );
}

export default MainSearch;