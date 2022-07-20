import { PUT_REPLY_CONTENT, POST_REPLY_DATE, DELETE_REPLY} from '../../modules/PlatformQnaModule';
import AdminInquiryDetailCSS from './AdminInquiryDetail.module.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { callGetInquiryAPI, callPostReplyAPI, callPutReplyAPI } from '../../apis/PlatformInquiryAPICalls';
import getTime from '../../util/getTime';

function AdminInquiryDetail() {

  const { inquiryInfo } = useSelector(state => state.platformQnaReducer);
  const { inquiry, reply } = inquiryInfo;
  const { inquiryNo } = useParams();
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(callGetInquiryAPI(inquiryNo));
    },[]
  );

  const backToListHandler = async () => {
    await dispatch({type: DELETE_REPLY, payload: {}});
    navigate('/admin/inquiries');
  };

  const modifyReplyHandler = async () => {
    await dispatch(callPutReplyAPI(reply));

    alert('답변이 수정되었습니다.');

  };

  const registReplyHandler = async () => {
    
    if(!reply.platfomrInquiryReplyContent) {
      alert('답변을 입력하세요');
    } else {

      const date = getTime.getDateAndTime();
  
      await dispatch({type: POST_REPLY_DATE, payload: date});
      await dispatch(callPostReplyAPI(inquiryInfo));
  
      alert('답변이 등록되었습니다');
    }
  };

  const replyOnchangeHandler = (e) => {
    dispatch({type: PUT_REPLY_CONTENT, payload: e.target.value})
  };
  
  return(
    <div className={ AdminInquiryDetailCSS.area }>
      <div className = { AdminInquiryDetailCSS.btnarea}>
        <button onClick={ backToListHandler }>뒤로가기</button>
        { 
          inquiry.replyYN =='Y'? 
          <button className={ AdminInquiryDetailCSS.replybtn }onClick={ modifyReplyHandler}>답변 수정</button> : 
          <button className={ AdminInquiryDetailCSS.replybtn }onClick={ registReplyHandler}>답변 작성</button>
        }
        
        
      </div>
      <div className={ AdminInquiryDetailCSS.tablearea }>
        <table>
          <colgroup>
              <col width = "15%"/>
              <col width = "5%"/>
              <col width = "15%"/>
              <col width = "25%"/>
              <col width = "15%"/>
              <col width = "20%"/>
          </colgroup>
          <tbody>
            <tr style={ {height: "50px"}}>
              <td>문의번호</td>
              <td>{ inquiry.platformInquiryNo }</td>
              <td>작성자</td>
              <td>{ inquiry.nickname }</td>
              <td>작성일자</td>
              <td>{ inquiry.platformInquiryDate }</td>
            </tr>
            <tr style={ {height: "50px"}}>
              <td>제목</td>
              <td colSpan='3'>{ inquiry.platformInquiryTitle }</td>
              <td>답변일자</td>
              <td>{ inquiry.replyYN =='Y'? reply.platfomrInquiryReplyDate : null }</td>
            </tr>
            <tr style={ {height: "200px"}}>
              <td>내용</td>
              <td colSpan='5'>{ inquiry.platformInquiryContent }</td>
            </tr>
            <tr style={ {height: "200px"}}>
              <td >답변</td>
              <td colSpan='5'>
                { inquiry.replyYN =='Y'? 
                  <textarea style={{ width: "99%", height: "200px" }} onChange={ replyOnchangeHandler} value={reply.platfomrInquiryReplyContent}/> : 
                  <textarea onChange={ replyOnchangeHandler} value={reply.platfomrInquiryReplyContent} style={{ width: "99%", height: "200px" }} placeholder='답변을 등록해주세요' />
                }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminInquiryDetail;