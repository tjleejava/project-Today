import AuthListTblCSS from "./AuthListTbl.module.css";
import Pagination from 'react-js-pagination';
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import moment from 'moment';

export default function AuthListTbl() {

    const [page, setPage] = useState(1);
    const handlePageChange = page => setPage(page);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // const openModal = () => {
    //     return (
    //         <Modal isOpen={true}>
    //             인증 상세 모달창
    //         </Modal>
    //     );
    // }

    return (
        <div className={ AuthListTblCSS.content }>
            {/* 개설자한테는 인증목록 게시판 화면, 사용자한테는 인증 썸네일 게시판 화면 */}
            {/* 토큰에서 memeberNo 꺼내서 개설자 번호와 같은지 확인하여 화면 출력 */}
            <div className={ AuthListTblCSS.container }>
                <button className={ AuthListTblCSS.item } onClick={ () => setModalIsOpen(true) } value={`authNo`}>
                    <img src={'/images/challenge/auth1.png'} width="300px" height="180px"/>
                    <br/>
                    <label>닉네임 : </label>
                    <span>홍부장</span>
                    <br/>
                    <label>등록일시 : </label>
                    <span>2022-06-29 17:00:00</span>
                    <br/>
                    <label>승인여부 : </label>
                    <span>대기</span>
                </button>
                <button className={ AuthListTblCSS.item } onClick={ () => setModalIsOpen(true) } value={`authNo`}>
                    <img src={'/images/challenge/auth1.png'} width="300px" height="180px"/>
                    <br/>
                    <label>닉네임 : </label>
                    <span>홍부장</span>
                    <br/>
                    <label>등록일시 : </label>
                    <span>2022-06-29 17:00:00</span>
                    <br/>
                    <label>승인여부 : </label>
                    <span>대기</span>
                </button>
                <button className={ AuthListTblCSS.item } onClick={ () => setModalIsOpen(true) } value={`authNo`}>
                    <img src={'/images/challenge/auth1.png'} width="300px" height="180px"/>
                    <br/>
                    <label>닉네임 : </label>
                    <span>홍부장</span>
                    <br/>
                    <label>등록일시 : </label>
                    <span>2022-06-29 17:00:00</span>
                    <br/>
                    <label>승인여부 : </label>
                    <span>대기</span>
                </button>
                <button className={ AuthListTblCSS.item } onClick={ () => setModalIsOpen(true) } value={`authNo`}>
                    <img src={'/images/challenge/auth1.png'} width="300px" height="180px"/>
                    <br/>
                    <label>닉네임 : </label>
                    <span>홍부장</span>
                    <br/>
                    <label>등록일시 : </label>
                    <span>2022-06-29 17:00:00</span>
                    <br/>
                    <label>승인여부 : </label>
                    <span>대기</span>
                </button>
                <button className={ AuthListTblCSS.item } onClick={ () => setModalIsOpen(true) } value={`authNo`}>
                    <img src={'/images/challenge/auth1.png'} width="300px" height="180px"/>
                    <br/>
                    <label>닉네임 : </label>
                    <span>홍부장</span>
                    <br/>
                    <label>등록일시 : </label>
                    <span>2022-06-29 17:00:00</span>
                    <br/>
                    <label>승인여부 : </label>
                    <span>대기</span>
                </button>
                <button className={ AuthListTblCSS.item } onClick={ () => setModalIsOpen(true) } value={`authNo`}>
                    <img src={'/images/challenge/auth1.png'} width="300px" height="180px"/>
                    <br/>
                    <label>닉네임 : </label>
                    <span>홍부장</span>
                    <br/>
                    <label>등록일시 : </label>
                    <span>2022-06-29 17:00:00</span>
                    <br/>
                    <label>승인여부 : </label>
                    <span>대기</span>
                </button>
            </div>
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