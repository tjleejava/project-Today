import UserQnaDetailCSS from './UserQnaDetail.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { callGetInquiryAPI } from '../../apis/PlatformInquiryAPICalls';

function UserQnaDetail() {

  const dispatch = useDispatch();
  const { inquiryInfo } = useSelector(state => state.platformQnaReducer);
  const {inquiry, reply} = inquiryInfo;
  const { inquiryNo } = useParams();
  const navigate = useNavigate();
  useEffect(
    () => {
      dispatch(callGetInquiryAPI(inquiryNo));
    },[]
  );
  const backHandler = () => {
    navigate('/mypage/qna');
  };

  return (
    <div>
      { inquiry.platformInquiryNo }<br/>
      { inquiry.platformInquiryTitle }<br/>
      { inquiry.platformInquiryContent }<br/>
      { inquiry.platformInquiryDate }<br/>
      { inquiry.nickname }<br/>
      { reply.platfomrInquiryReplyContent }<br/>
      { reply.platfomrInquiryReplyDate }<br/>
      <button onClick={ backHandler }>뒤로가기</button>
    </div>   
  );
};

export default UserQnaDetail;