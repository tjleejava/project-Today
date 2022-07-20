import { useEffect } from 'react';
import Pagination from 'react-js-pagination';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {getchallengeReportsAPI} from '../../apis/ReportAPICalls';
import { PAGE_CHANGE } from '../../modules/ReportModuls';


function PageArea() {

  const { pageInfo } = useSelector(state => state.reportReducer);
  const { page, totalItemCount, pageItemCount } = pageInfo;

  const dispatch = useDispatch();

  const handlePageChange = async (e) => {

    await dispatch({type: PAGE_CHANGE, payload: e});

    await dispatch(getchallengeReportsAPI(pageInfo));
  };

  useEffect(
    () => {
      pageInfo.type='challenge';
      dispatch(getchallengeReportsAPI(pageInfo));
    },[]
  );

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
};


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


export default PageArea;