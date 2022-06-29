import SearchComponentCSS from './SearchComponentCSS.module.css';
import Pagination from 'react-js-pagination';
import React, { useState } from 'react';
import styled from 'styled-components';

function SearchComponent() {

  const [page, setPage] = useState(1);
  const handlePageChange = page => setPage(page);

  return (
    <>
    <div className={SearchComponentCSS.searchContainer}>
      <input placeholder='검색어를 입력하시오'/>
      <button className={SearchComponentCSS.searchBtn}>검색</button>
    </div>
    <div>
    <PaginationBox>
                <Pagination
                    activePage={page}
                    itemsCountPerPage={10}
                    totalItemsCount={300}
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