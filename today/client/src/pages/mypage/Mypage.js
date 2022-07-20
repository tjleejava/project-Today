import MyPageCSS from './MyPageCSS.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { mypageInfoAPI } from '../../apis/MypageAPICalls'
import jwt_decode from "jwt-decode";
import {Cookies} from 'react-cookie'

function Mypage() {
  
  const cookies = new Cookies();
  const mypageState = useSelector(state => state.mypageReducer);
  const navigate = useNavigate();
  useEffect(() => {
    
    const token = cookies.get('token');
    console.log(token);
    if(token) {
      const decoded = jwt_decode(token);
      console.log(decoded);
      const memberNo = decoded.no;
      console.log(memberNo);

      mypageInfoAPI(memberNo);
    }
    else {
      alert('로그인 후 이용 가능합니다');
      navigate('/sign/login');
    }
  })

  return (
    <>
    <div className={MyPageCSS.container}>
      <div className={MyPageCSS.header}>
        <h3>마이페이지</h3>
        <hr/>
      </div>

      <div className={MyPageCSS.contentContainer}>
        <h4>프로필</h4>
        <img className={MyPageCSS.img} src={'/images/mypage/profile.jpg'} width="150" height="150"/>
        <div>
          <h4>챌린지 현황</h4>
          <div className={MyPageCSS.challengeNumBox}>
            <div className={MyPageCSS.engagingBox}>
              <h4>참가중</h4>
            </div>
            <div className={MyPageCSS.completeBox}>
              <h4>완료</h4>
            </div>
            <div className={MyPageCSS.openBox}>
              <h4>개설</h4>
            </div>
          </div>
        </div>
        <h4>참가 챌린지 목록</h4>
        <div className={MyPageCSS.challengeListBox}>
          <table>
            <thead>
            <tr>
              <th>No</th>
              <th>챌린지명</th>
              <th>시작일자</th>
              <th>개설자</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>임시1</td>
              <td>임시1</td>
              <td>임시1</td>
              <td>임시1</td>

            </tr>
            <tr>
              <td>임시1</td>
              <td>임시1</td>
              <td>임시1</td>
              <td>임시1</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>

  );
}

export default Mypage;