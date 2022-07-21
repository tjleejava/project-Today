import AlarmPageCSS from './AlarmPage.module.css';
import { useEffect } from 'react';
import Pagination from 'react-js-pagination';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getAlarmExistAPI, getAlarmsAPI } from '../../../apis/AlarmAPICAll';
import jwt_decode from "jwt-decode";
import {Cookies} from 'react-cookie'
import { CHANGE_PAGE } from '../../../modules/AlarmModule';

function AlarmPage({type}) {

  const cookies = new Cookies();
  const token = cookies.get('token');
  
  const dispatch = useDispatch();
  const { readPageInfo, unreadPageInfo } = useSelector(state => state.alarmReducer);
  
  let pageInfo;
  type == 'read'? pageInfo = readPageInfo: pageInfo = unreadPageInfo;
  const { page, totalItemCount, pageItemCount } = pageInfo;

  let memberNo = 1;
  if(token) {
    const decoded = jwt_decode(token);
    memberNo = decoded.no;
  }

  useEffect(
    () => {
      getAlarms();
    }
    ,[]

  );
  
  const getAlarms = () => {
    dispatch(getAlarmsAPI({ memberNo: memberNo, readPageInfo: readPageInfo, unreadPageInfo: unreadPageInfo }));
  };
  
  const handlePageChange = async (page) => {
    await dispatch({type: CHANGE_PAGE, payload: {page: page, type: type}});
    getAlarms();
  };

  return (
    <PaginationBox>
      <Pagination
          activePage={page}
          itemsCountPerPage={pageItemCount}
          totalItemsCount={totalItemCount}
          pageRangeDisplayed={5}
          prevPageText="<"
          nextPageText=">"
          onChange={ handlePageChange }
      />
    </PaginationBox>
  );
}

const PaginationBox = styled.div`
  .pagination { display: flex; justify-content: center; margin-top: 15px;}
  ul { list-style: none; padding: 0; }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem; 
  }
  ul.pagination li:first-child{ border-radius: 5px 0 0 5px; }
  ul.pagination li:last-child{ border-radius: 0 5px 5px 0; }
  ul.pagination li a { text-decoration: none; color: black; font-size: 1rem; }
  ul.pagination li.active a { color: white; }
  ul.pagination li.active { background-color: #E2DDD3; }
  ul.pagination li a:hover,
  ul.pagination li a.active { color: #844F15; }
`

export default AlarmPage;