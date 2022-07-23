import InquiryRegistFormCSS from './InquiryRegistFormCSS.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registChallengeInquiryAPI } from '../../../apis/ChallengeAPICalls'
import {Cookies} from 'react-cookie'
import jwt_decode from "jwt-decode";

function InquiryRegistForm() {

  const params = useParams();
  const challengeNo = params.challengeNo;
  const challengeReducer = useSelector(state => state.challengeReducer);
  const goBackUrl = '/challenges/' + challengeNo +'/inquiry';
  const cookies = new Cookies();
  const navigate = useNavigate();

  const token = cookies.get('token');
  const decoded = jwt_decode(token);
  const memberNo = decoded.no;

  const [form, setForm] = useState({
    title: '',
    content: ''
  });

  const onChangeHandler = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const onClickHandler = () => {
    console.log(form.title);
    console.log(form.content);
    registChallengeInquiryAPI(form.title, form.content, memberNo, challengeNo)
    .then((res) => {
      console.log(res)
      if(res.data.status == 200) {
        alert('문의글을 등록하였습니다.');
        navigate(goBackUrl);
      }
    });
  }

  return(
    
    <div className={InquiryRegistFormCSS.container}>
      <div className={InquiryRegistFormCSS.header}>
          <span>문의글 작성</span>
      </div>
      <hr className={InquiryRegistFormCSS.line}></hr>
      <div className={InquiryRegistFormCSS.registForm}>
        <div>
          <label className={InquiryRegistFormCSS.title}>제목</label>
          <input onChange={ onChangeHandler } className={InquiryRegistFormCSS.titleInput} name="title"></input>
        </div>
        <div>
          <textarea onChange={ onChangeHandler } className={InquiryRegistFormCSS.contentArea} placeholder="내용을 입력하세요" name="content"></textarea>
        </div>
      </div>
      <div className={InquiryRegistFormCSS.btnArea}>
      <Link to={goBackUrl}>
        <button className={InquiryRegistFormCSS.btn}>뒤로가기</button>
      </Link>
        <button onClick={ onClickHandler } className={InquiryRegistFormCSS.btn}>등록</button>
      </div>
    </div>
    

  )
}

export default InquiryRegistForm;