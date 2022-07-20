import AdminInquiryCSS from './AdminInquiry.module.css';
import { useSelector } from "react-redux";
import InquiryList from "../../components/platform-inquiry/search-form/InquiryList";
import SearchForm from "../../components/platform-inquiry/search-form/SearchForm";

function AdminInquiry() {
  const { inquiries } = useSelector(state => state.platformQnaReducer);
  return (
    <div className={AdminInquiryCSS.area}>
      <div className={AdminInquiryCSS.head}>
        <h1>문의 관리</h1>
        <hr/>
      </div>
      <div className={AdminInquiryCSS.body}>
        <table>
          <colgroup>
              <col width = "10%"/>
              <col width = "15%"/>
              <col width = "35%"/>
              <col width = "25%"/>
              <col width = "15%"/>
          </colgroup>
          <thead className={ AdminInquiryCSS.tablehead }>
            <th>문의 번호</th>
            <th>답변 상태</th>
            <th>문의 제목</th>
            <th>작성자</th>
            <th>문의 날짜</th>
          </thead>
          { inquiries.map( inquiry => <InquiryList inquiry={inquiry}/>)}
        </table>
      </div>
      <SearchForm/>
    </div>
  );
};

export default AdminInquiry;