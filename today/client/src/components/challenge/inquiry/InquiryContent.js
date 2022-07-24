import InquiryDetailCSS from './InquiryDetailCSS.module.css';
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';

function InquiryContent() {

  const { state } = useLocation();
  const navigate = useNavigate();

  console.log(state);
  const writer = state.nickname;
  const registedDate = state.challengeInquiryDate;
  const content = state.challengeInquiryContent;
  const title = state.challengeInquiryTitle;

  return(
    <div className={InquiryDetailCSS.container}>
      <div className={InquiryDetailCSS.header}>
        <span>문의글</span>
      </div>
      <hr></hr>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <h4 className={InquiryDetailCSS.nickname}>작성자 : {writer}</h4>
        <h5 className={InquiryDetailCSS.date}>등록일 : {registedDate}</h5>
      </div>
      <div className={InquiryDetailCSS.contentBox}>
        {content}
      </div>
      <div className={InquiryDetailCSS.btnArea}>
        <button onClick={() => {navigate(-1)} }className={InquiryDetailCSS.btn}>뒤로가기</button>
        <button className={InquiryDetailCSS.btn}>수정</button>
      </div>
    </div>
  )
}

export default InquiryContent;