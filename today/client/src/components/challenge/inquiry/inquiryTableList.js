import { Link, useParams, useNavigate } from 'react-router-dom';

function InquiryTableList(props) {

  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/challenges/${props.inquiryInfo.challengeNo}/inquiry/${props.inquiryInfo.challengeInquiryNo}`);
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