import InvitePageCSS from './InvitePage.module.css';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { SET_PAGE } from '../../modules/InviteModule';
import { getInvitesAPI } from '../../apis/InviteAPICalls';
import jwt_decode from "jwt-decode";
import {Cookies} from 'react-cookie'

function InvitePage() {
  
  const dispatch = useDispatch();
  const { pageInfo } = useSelector(state => state.inviteReducer);
  const { page, totalItemCount, pageItemCount } = pageInfo;
  const cookies = new Cookies();
  const token = cookies.get('token');
  let memberNo = 0;

  useEffect(
    () => {
      if(token) {
        const decoded = jwt_decode(token);
        memberNo = decoded.no;
      }
      
      dispatch(getInvitesAPI({memberNo: memberNo, pageInfo: pageInfo}));
    },[page]
  );

  const handlePageChange = (page) => {
    dispatch({type: SET_PAGE, payload: page});
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

export default InvitePage;