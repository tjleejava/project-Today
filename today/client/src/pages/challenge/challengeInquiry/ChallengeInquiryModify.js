import ChallengeInquiryModifyCSS from './ChallengeInquiryModifyCSS.module.css';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from 'react';
import { modifyChallengeInquiryAPI } from '../../../apis/ChallengeAPICalls'


function ChallengeInquiryModify() {

  const navigate = useNavigate();
  const { state } = useLocation();
  const params = useParams();
  const challengeNo = params.challengeNo;
  const inquiryNo = params.inquiryNo;


  const [form, setForm] = useState({
    title: state.challengeInquiryTitle,
    content: state.challengeInquiryContent
  });

  const onChangeHandler = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    console.log(form);
  };

  const onClickHandler = () => {
    console.log(form.title);
    console.log(form.content);
    modifyChallengeInquiryAPI(form.title, form.content, challengeNo, inquiryNo)
    .then((res) => {
      console.log(res)
      if(res.status == 200) {
        alert('문의글을 수정하였습니다.');
        navigate('/challenges/' + challengeNo + '/inquiry/');
      } else {
        alert('수정된 내용이 있는지 확인해 주세요.');
      }
    });
  }

  return(
    <div className={ChallengeInquiryModifyCSS.container}>
      <div className={ChallengeInquiryModifyCSS.header}>
          <span>문의글</span>
      </div>
      <hr className={ChallengeInquiryModifyCSS.line}></hr>
      <div className={ChallengeInquiryModifyCSS.registForm}>
        <div>
          <label className={ChallengeInquiryModifyCSS.title}>제목</label>
          <input onChange={ onChangeHandler } className={ChallengeInquiryModifyCSS.titleInput} name="title" value={form.title}></input>
        </div>
        <div>
          <textarea onChange={ onChangeHandler } className={ChallengeInquiryModifyCSS.contentArea} name="content" value={form.content}></textarea>
        </div>
      </div>
      <div className={ChallengeInquiryModifyCSS.btnArea}>
        <button onClick={() => {navigate(-1)} } className={ChallengeInquiryModifyCSS.btn}>뒤로가기</button>
        <button onClick={ onClickHandler } className={ChallengeInquiryModifyCSS.btn}>등록</button>
      </div>
    </div>
  )
}

export default ChallengeInquiryModify;