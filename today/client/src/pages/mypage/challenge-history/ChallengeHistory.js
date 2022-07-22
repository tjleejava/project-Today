import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ChallengeHistoryCSS from './ChallengeHistoryCSS.module.css';
import {mypageChallengeDetailAPI} from '../../../apis/MypageAPICalls';
import { GET_CHALLENGE_DETAIL } from '../../../modules/MypageModule';

function ChallengeHistory() {

  const dispatch = useDispatch();
  const challengeNo = useParams();
  const mypage = useSelector(state => state.mypageReducer);

  useEffect(() => {
    console.log(challengeNo);
    mypageChallengeDetailAPI(challengeNo)
    .then((res) => {
      console.log(res)
      const attachmentsInfo = res.attachmentInfo;
      const challengeInfo = res.challengeInfo;
      for(let attachments of attachmentsInfo ) {
        console.log(attachments)
        const attachmentTypeNo = attachments.fileTypeNo;
        const payload = {
          challengeDetailInfo: res,
          attachments: attachments
        }
        if(attachmentTypeNo == 2) {
          dispatch({type: GET_CHALLENGE_DETAIL, payload: payload});
        } 

      }
    });
    
  },[])

  return (
    <>
    <div className={ChallengeHistoryCSS.container}>
      <div className={ChallengeHistoryCSS.headerBox}>
        <h3 className={ChallengeHistoryCSS.header}>챌린지 내역</h3>
        <hr className={ChallengeHistoryCSS.line}></hr>
      </div>
      <div className={ChallengeHistoryCSS.contentBox}>
        <div className={ChallengeHistoryCSS.box}>
          <div className={ChallengeHistoryCSS.thumbnailBox}>
            <img src={mypage.imgUrl} width="300px" height="180px"/>
            <div className={ChallengeHistoryCSS.thumbnailContentBox}>
              <h3>{mypage.challengeName}</h3>
              <p>{mypage.challengeExplain}</p>
            </div>
          </div>
          <div className={ChallengeHistoryCSS.progressBox}>
            <label>달성률</label>
            <progress className={ChallengeHistoryCSS.progress} value="20" max="100"/>
            <label> 20 %</label>
          </div>
          <div className={ChallengeHistoryCSS.challengeAuthNumBox}>
            <div className={ChallengeHistoryCSS.successAuthNum}>
              <h4>인증 성공</h4>
              <h4>2</h4>
            </div>
            <div className={ChallengeHistoryCSS.failAuthNum}>
              <h4>인증 실패</h4>
              <h4>4</h4>
            </div>
            <div className={ChallengeHistoryCSS.remainAuthNum}>
              <h4>남은 인증</h4>
              <h4>1</h4>
            </div>
          </div>
          <div>
            <h4>총 참여자 정보</h4>
            <div className={ChallengeHistoryCSS.achieveAvgRateBox}>
              <h4>평균 달성률</h4>
              <progress className={ChallengeHistoryCSS.progress} value="15" max="100"/>
            </div>
            <div className={ChallengeHistoryCSS.engageInfoBox}>
              <h4>총 6명 참가</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ChallengeHistory;