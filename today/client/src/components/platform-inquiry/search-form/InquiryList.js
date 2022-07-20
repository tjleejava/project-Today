import InquiryListCSS from './InquiryList.module.css';
import { useNavigate } from 'react-router-dom';

function InquiryList({inquiry}) {

  const navigate = useNavigate();
  
  const inquiryOnClickHandler = (no) => {

    navigate(`/admin/inquiries/${no}`);
  };

  const onMouseOverHandler = (no) => {
    const tr = document.getElementById(no);
    tr.style.backgroundColor='black';
    tr.style.color='white';
    tr.style.cursor='pointer';
  };

  const onMouseOutHandler = (no) => {
    const tr = document.getElementById(no);
    tr.style.backgroundColor='white';
    tr.style.color='black';
  };

  return(
    <tr 
      className={ InquiryListCSS.tds}
      onClick={ () => inquiryOnClickHandler(inquiry.platformInquiryNo) }  
      key={inquiry.platformInquiryNo}
      onMouseOver={ () => onMouseOverHandler(inquiry.platformInquiryNo)}
      onMouseOut={ () => onMouseOutHandler(inquiry.platformInquiryNo)}
      id={inquiry.platformInquiryNo}
    >
      <td>{inquiry.platformInquiryNo}</td>
      <td>{inquiry.replyYN =='Y' ? '완료': '대기'}</td>
      <td>{inquiry.platformInquiryTitle}</td>
      <td>{inquiry.nickname}</td>
      <td>{inquiry.platformInquiryDate}</td>
    </tr>
  );
};

export default InquiryList;