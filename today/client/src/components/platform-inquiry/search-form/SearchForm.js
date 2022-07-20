import SearchFormCSS from './SearchForm.module.css';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { callAdminGetInquiriesAPI } from '../../../apis/PlatformInquiryAPICalls';

function SearchForm() {

  const {adminInquiriesPagingInfo} = useSelector(state => state.platformQnaReducer);
  const {page, searchValue, searchCondition, totalItemsCount, pageItemCount } = adminInquiriesPagingInfo;
  const dispatch = useDispatch();
  const ADMIN_INQUIRIES_SEARCHVALUE = 'platform/ADMIN_INQUIRIES_SEARCHVALUE';
  const ADMIN_INQUIRIES_PAGE_CHANGE = 'platform/ADMIN_INQUIRIES_PAGE_CHANGE';
  const handlePageChange = async (e) => {
    await dispatch({type: ADMIN_INQUIRIES_PAGE_CHANGE, payload: e});
    
    await dispatch(callAdminGetInquiriesAPI(adminInquiriesPagingInfo));
  };

  const searchValueChangeHandler = (e) => {
    dispatch({type: ADMIN_INQUIRIES_SEARCHVALUE, payload: e.target.value});
  };
  useEffect(
    () => {
      dispatch(callAdminGetInquiriesAPI(adminInquiriesPagingInfo));
    },[]
  );
  return (
    <div>
      {/* <div className={SearchForm.searchContainer}>
        <select>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        <input onChange={ searchValueChangeHandler} value={searchValue} placeholder='검색어를 입력하시오'/>
        <button className={SearchForm.searchBtn}>검색</button>
      </div> */}
      <PaginationBox>
        <Pagination
            activePage={page}
            itemsCountPerPage={pageItemCount}
            totalItemsCount={totalItemsCount}
            pageRangeDisplayed={5}
            prevPageText="<"
            nextPageText=">"
            onChange={ handlePageChange }
        />
      </PaginationBox>
    </div>
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

export default SearchForm;