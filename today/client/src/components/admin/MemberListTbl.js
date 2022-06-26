import MemberListTblCSS from './MemberListTbl.module.css';
import React, { useState } from 'react';
import Pagination from 'react-js-pagination';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function MemberListTbl() {

    const navigate = useNavigate();
    const handleRowClick = (e) => {
        const memberNo = e.nativeEvent.path[1].children[0].innerText;

        navigate(`/admin/members/${ memberNo }`);
    };

    const [page, setPage] = useState(1);
    const handlePageChange = page => setPage(page);

    return (
        <>
            <table className={ MemberListTblCSS.memberTbl} onClick={ (e) => handleRowClick(e) }>
                <tr className={ MemberListTblCSS.header}>
                    <th>회원번호</th>
                    <th>이메일</th>
                    <th>닉네임</th>
                    <th>가입일</th>
                </tr>
                <tr className={ MemberListTblCSS.member }>
                    <td>10</td>
                    <td>test@gmail.com</td>
                    <td>tester</td>
                    <td>2022-06-25</td>
                </tr>
                <tr className={ MemberListTblCSS.member }>
                    <td>9</td>
                    <td>h9www@gmail.com</td>
                    <td>홍성원</td>
                    <td>2022-06-25</td>
                </tr>
                <tr className={ MemberListTblCSS.member }>
                    <td>8</td>
                    <td>h9www@gmail.com</td>
                    <td>홍성원</td>
                    <td>2022-06-25</td>
                </tr>
                <tr className={ MemberListTblCSS.member }>
                    <td>7</td>
                    <td>h9www@gmail.com</td>
                    <td>홍성원</td>
                    <td>2022-06-25</td>
                </tr>
                <tr className={ MemberListTblCSS.member }>
                    <td>6</td>
                    <td>h9www@gmail.com</td>
                    <td>홍성원</td>
                    <td>2022-06-25</td>
                </tr>
                <tr className={ MemberListTblCSS.member }>
                    <td>5</td>
                    <td>h9www@gmail.com</td>
                    <td>홍성원</td>
                    <td>2022-06-25</td>
                </tr>
                <tr className={ MemberListTblCSS.member }>
                    <td>4</td>
                    <td>h9www@gmail.com</td>
                    <td>홍성원</td>
                    <td>2022-06-25</td>
                </tr>
                <tr className={ MemberListTblCSS.member }>
                    <td>3</td>
                    <td>h9www@gmail.com</td>
                    <td>홍성원</td>
                    <td>2022-06-25</td>
                </tr>
                <tr className={ MemberListTblCSS.member }>
                    <td>2</td>
                    <td>h9www@gmail.com</td>
                    <td>홍성원</td>
                    <td>2022-06-25</td>
                </tr>
                <tr className={ MemberListTblCSS.member }>
                    <td>1</td>
                    <td>h9www@gmail.com</td>
                    <td>홍성원</td>
                    <td>2022-06-25</td>
                </tr>
                <tr className={ MemberListTblCSS.member }>
                    <td>0</td>
                    <td>h9www@gmail.com</td>
                    <td>홍성원</td>
                    <td>2022-06-25</td>
                </tr>
            </table>
            <br/>
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
        </>
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
  ul.pagination li a { text-decoration: none; color: #337ab7; font-size: 1rem; }
  ul.pagination li.active a { color: white; }
  ul.pagination li.active { background-color: #337ab7; }
  ul.pagination li a:hover,
  ul.pagination li a.active { color: blue; }
`

/* ---------------------------------------- API를 이용한 PAGINATION 예시 ---------------------------------------- */

// import axios from 'axios'
// import {useState} from 'react'
// import Pagination from 'react-js-pagination'
// import styled from 'styled-components'

// export default function AxiosPost() {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [items, setItems] = useState(5);

//   const getClick = () => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(res => setData(res.data))
//   }
//   const postClick = () => {
//     axios.post('https://jsonplaceholder.typicode.com/posts',{
//       userId :11,
//       id:101,
//       body:'test body',
//       title:'test title'
//     })
//       .then(res => console.log(res.data))
//   }

//   const handlePageChange = (page) => { setPage(page); };
//   const itemChange = (e) => {
//     setItems(Number(e.target.value))

//   }

// console.log(items*(page-1), items*(page-1)+items)

//   return (
//     <div>
//       <h2>API 연습</h2>
//       <div>
//         <button onClick={getClick}>Get</button>
//         <button onClick={postClick}>Post</button>
//         <select name="items" onChange={itemChange}>
//           <option value="5">5개</option>
//           <option value="10">10개</option>
//           <option value="15">15개</option>
//           <option value="20">20개</option>
//         </select>
//       </div>
//       {data.slice(
//         items*(page-1),
//         items*(page-1)+items
//       ).map((v,i) => {
//         return (
//           <div key={i}>
//             <h3>{v.title}</h3>
//             <div>userId = {v.userId}, id = {v.id}</div>
//             <div>{v.body}</div>
//           </div>
//         )
//       })}
//       <PaginationBox>
//         <Pagination
//           activePage={page}
//           itemsCountPerPage={items}
//           totalItemsCount={data.length-1}
//           pageRangeDisplayed={5}
//           onChange={handlePageChange}>
//         </Pagination>
//       </PaginationBox>
//     </div>
//   )
// }

// const PaginationBox = styled.div`
//   .pagination { display: flex; justify-content: center; margin-top: 15px;}
//   ul { list-style: none; padding: 0; }
//   ul.pagination li {
//     display: inline-block;
//     width: 30px;
//     height: 30px;
//     border: 1px solid #e2e2e2;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-size: 1rem; 
//   }
//   ul.pagination li:first-child{ border-radius: 5px 0 0 5px; }
//   ul.pagination li:last-child{ border-radius: 0 5px 5px 0; }
//   ul.pagination li a { text-decoration: none; color: #337ab7; font-size: 1rem; }
//   ul.pagination li.active a { color: white; }
//   ul.pagination li.active { background-color: #337ab7; }
//   ul.pagination li a:hover,
//   ul.pagination li a.active { color: blue; }
// `