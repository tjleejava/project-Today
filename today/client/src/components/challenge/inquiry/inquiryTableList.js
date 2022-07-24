import { Link, useParams, useNavigate } from 'react-router-dom';

function InquiryTableList(props) {

  const navigate = useNavigate();
  const detailURL = `/challenges/${props.inquiryInfo.challengeNo}/inquiry/${props.inquiryInfo.challengeInquiryNo}`;
  
  const onClickHandler = () => {
    console.log(props.inquiryInfo);
    navigate(detailURL, { state: props.inquiryInfo });
  }
  return (
    <tr onClick={onClickHandler}>
      <td>{props.inquiryInfo.challengeInquiryNo}</td>
      <td>{props.inquiryInfo.challengeInquiryTitle}</td>
      <td>{props.inquiryInfo.nickname}</td>
      <td>{props.inquiryInfo.challengeInquiryDate}</td>
    </tr>
  )
}

export default InquiryTableList;