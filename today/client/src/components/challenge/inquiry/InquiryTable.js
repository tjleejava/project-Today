import InquiryTableCSS from './InquiryTableCSS.module.css';

function InquiryTable() {
  return(
    <div className={InquiryTableCSS.container}>
      <div>
        <h3>문의게시판</h3>
        <hr></hr>
      </div>
      <div>
        <table>
            <thead>
            <tr>
              <th>문의번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>답변상태</th>
              <th>작성일</th>
            </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default InquiryTable;