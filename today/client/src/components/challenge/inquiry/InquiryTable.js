import InquiryTableCSS from './InquiryTableCSS.module.css';
import {useNavigate, useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { findChallengeInquiryListAPI } from '../../../apis/ChallengeAPICalls';
import { CHALLENGE_INQUIRY_LIST } from '../../../modules/challenge-inquiry-module/ChallengeInquiryModule'
import InquiryTableList from './inquiryTableList';

function InquiryTable() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const inquiries = useSelector(state => state.challengeInquiryReducer);
  const {challengeInquiries} = inquiries;
  

  console.log(params);
  const challengeNo = params.challengeNo;
  const registURL = '/challenges/' + challengeNo + '/inquiry/regist'

  const inquiryDetail = () => {

  }
  const challengeInquiryList = challengeInquiries.map(inquiry=> <InquiryTableList key={inquiry.challengeInquiryNo} inquiryInfo={inquiry}/>);

  useEffect(() => {
    findChallengeInquiryListAPI(challengeNo)
    .then((res) => {
      console.log(res.data.result);
      const payload = res.data.result;
      dispatch({type: CHALLENGE_INQUIRY_LIST, payload: payload})
    })
  }, [])

  const onClickHandler = () => {
    navigate(registURL);
    

  }
  return(
    <div className={InquiryTableCSS.container}>
      <div>
        <div className={InquiryTableCSS.tableHeader}>
          <span>문의게시판</span>
          <button onClick={ onClickHandler } className={InquiryTableCSS.registBtn}>작성하기</button>
        </div>
        <hr></hr>
      </div>
      <div>
        <table>
            <thead>
            <tr>
              <th>문의번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
            </thead>
            <tbody>
              {challengeInquiryList}
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default InquiryTable;