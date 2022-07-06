import { useSelector } from "react-redux";
import SearchForm from "../../components/platform-inquiry/search-form/SearchForm";

function AdminInquiry() {
  const {pageInfo} = useSelector(state => state.platformQnaReducer);
  return (
    <div>
      <h1>관리자 문의 관리 페이지</h1>
      <div>

      </div>
      <SearchForm/>
    </div>
  );
};

export default AdminInquiry;