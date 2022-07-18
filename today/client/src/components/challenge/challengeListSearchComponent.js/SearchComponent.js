import SearchComponentCSS from './SearchComponentCSS.module.css';
import Pagination from 'react-js-pagination';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {SET_SEARCH_VALUE, SET_CATEGORY, SET_PAGE} from '../../../modules/ChallengeListModule';
import {getChallengeList} from '../../../apis/ChallengeAPICalls';

function SearchComponent() {

  const dispatch = useDispatch();
  
  const {pageInfo} = useSelector(state => state.challengelistReducer);
  const {page, totalItemCount, pageItemCount, searchValue} = pageInfo;
  
  const handlePageChange = (page) => {

    dispatch({type: SET_PAGE, payload: page});
    dispatch(getChallengeList(pageInfo));
  };
  const searchValueChangeHandler = (e) => {
    dispatch({type: SET_SEARCH_VALUE, payload: e.target.value});
  }

  useEffect(
    () => {
      dispatch({type: SET_CATEGORY, payload: '0'});
      dispatch(getChallengeList(pageInfo));
    },[]
  );
  return (
    <>
    <div className={SearchComponentCSS.searchContainer}>
      <input onChange={ searchValueChangeHandler } value={searchValue} placeholder='검색어를 입력하시오'/>
      <button className={SearchComponentCSS.searchBtn} onClick={ () =>  dispatch(getChallengeList(pageInfo))}>검색</button>
    </div>
    <div>
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
    </div>
    </>
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

export default SearchComponent;