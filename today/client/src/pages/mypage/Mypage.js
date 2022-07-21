import MyPageCSS from './MyPageCSS.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { mypageInfoAPI } from '../../apis/MypageAPICalls'
import {Cookies} from 'react-cookie'
import { CHALLENGE_INFO } from '../../modules/MypageModule'

function Mypage() {
  window.location.replace('/mypage/profile');


  return (
    <>
    </>
  );
}

export default Mypage;