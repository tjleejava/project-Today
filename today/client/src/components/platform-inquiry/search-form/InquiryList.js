import InquiryListCSS from './InquiryList.module.css';
import { useNavigate } from 'react-router-dom';

function InquiryList({inquiry}) {

  const navigate = useNavigate();
  
  const inquiryOnClickHandler = (no) => {

    navigate(`/admin/inquiries/${no}`);
  };

  return(
    <tr onClick={ () => inquiryOnClickHandler(inquiry.platformInquiryNo) }  key={inquiry.platformInquiryNo}>
      <td>{inquiry.platformInquiryNo}</td>
      <td>{inquiry.platformInquiryTitle}</td>
      <td>{inquiry.platformInquiryDate}</td>
      <td>{inquiry.nickname}</td>
      <td>{inquiry.replyYN}</td>
    </tr>
  );
};

export default InquiryList;