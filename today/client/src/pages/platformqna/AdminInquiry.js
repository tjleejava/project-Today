import { useSelector } from "react-redux";
import InquiryList from "../../components/platform-inquiry/search-form/InquiryList";
import SearchForm from "../../components/platform-inquiry/search-form/SearchForm";

function AdminInquiry() {
  const { inquiries } = useSelector(state => state.platformQnaReducer);
  return (
    <div>
      <h1>관리자 문의 관리 페이지</h1>
      <table>
        { inquiries.map( inquiry => <InquiryList inquiry={inquiry}/>)}
      </table>
      <SearchForm/>
    </div>
  );
};

export default AdminInquiry;