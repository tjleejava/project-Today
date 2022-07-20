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

  /*
  className={UserQnaDetailCSS.
  */
  return (
    <div className={UserQnaDetailCSS.area}>
      <div className={UserQnaDetailCSS.head}>
        <h1>플랫폼 문의 상세내용</h1>
        <hr/>
      </div>
      <div className={UserQnaDetailCSS.contentarea}>
        <div  className={UserQnaDetailCSS.row}>
          <div className={UserQnaDetailCSS.title}>
            문의 번호 
          </div>
          <div className={UserQnaDetailCSS.content}>
            { inquiry.platformInquiryNo }
          </div>
          <div className={UserQnaDetailCSS.title}>
            문의 작성일
          </div>
          <div className={UserQnaDetailCSS.content}>
          { inquiry.platformInquiryDate }
          </div>
        </div>
        <div  className={UserQnaDetailCSS.row}>
          <div className={UserQnaDetailCSS.title}>
            제목 
          </div>
          <div className={UserQnaDetailCSS.content}>
            { inquiry.platformInquiryTitle }
          </div>
        </div>
        <div  className={UserQnaDetailCSS.contenntrow}>
          <div className={UserQnaDetailCSS.title}>
          문의 내용
          </div>
          <div className={UserQnaDetailCSS.inquirycontent}>
            { inquiry.platformInquiryContent }
          </div>
        </div>
        {
          reply.platfomrInquiryReplyDate? 
            <div  className={UserQnaDetailCSS.row}>
              <div className={UserQnaDetailCSS.title}>
                답변 작성일
              </div>
              <div className={UserQnaDetailCSS.content}>
                { reply.platfomrInquiryReplyDate }
              </div>
              <br/><br/><br/>
              <div className={UserQnaDetailCSS.title}>
                답변 내용
              </div>
              <div className={UserQnaDetailCSS.inquirycontent}>
                
                { reply.platfomrInquiryReplyContent }
              </div>
            </div>
          :
          <div className={UserQnaDetailCSS.noreplyarea}>
            '등록된 답변이 없습니다'
          </div>
        }
      </div>
      <div className={UserQnaDetailCSS.btnarea}>
        <button onClick={ backHandler }>뒤로가기</button>
      </div>
    </div>   
  );
};

export default UserQnaDetail;