import ChallengeContentCSS from './ChallengeContent.module.css';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import axios from 'axios';

export default function ChallengeContent() {

    const [presentTab, setPresentTab] = useState("1");
    const [value, setValue] = useState(new Date());
    const [status, setStatus] = useState(false);

    const { challengeNo } = useParams();

    const onClickHandler = (e) => {
        setPresentTab(e.target.value);
    };

    const fomatDate = moment(value).format("YYYY-MM-DD");

    const onChangeHandler = (e) => {
        // console.log(moment(e).format("YYYY-MM-DD"));
        setValue(e);
        setStatus(true);

        // axios.get(/* 조회해서 가져올 data url */)
        // .then(/* 가져온 데이터 처리 */);
    }

    return (
        <div className={ ChallengeContentCSS.content }>
            <span className={ ChallengeContentCSS.title }>테니스 왕초보 탈출! 매일 10분씩 공 튕기기</span>
            <label className={ ChallengeContentCSS.host }>개설자 </label>
            <span className={ ChallengeContentCSS.hostname }>홍길동</span>
            <br/>
            <img src="/images/challenge/challengeBanner1.png"/>
            <br/>
            <div className={ ChallengeContentCSS.tabArea }>
                <button value="1" className={ presentTab === "1" ? ChallengeContentCSS.standard : ChallengeContentCSS.tab } onClick={ onClickHandler }>챌린지 소개</button>
                <button value="2" className={ presentTab === "2" ? ChallengeContentCSS.standard : ChallengeContentCSS.tab } onClick={ onClickHandler }>인증목록</button>
                <button value="3" className={ presentTab === "3" ? ChallengeContentCSS.standard : ChallengeContentCSS.tab } onClick={ onClickHandler }>챌린지 문의</button>
                <button value="4" className={ presentTab === "4" ? ChallengeContentCSS.standard : ChallengeContentCSS.tab } onClick={ onClickHandler }>참여자 목록</button>
            </div>
            {
                (
                    presentTab === "1" 
                    &&
                    <div className={ ChallengeContentCSS.infoArea }>
                        <span className={ ChallengeContentCSS.infoTitle }>기본정보</span>
                        <div className={ ChallengeContentCSS.infoContent }>
                            <div className={ ChallengeContentCSS.infoSubArea }>
                                <span className={ ChallengeContentCSS.infoSubTitle }>카테고리</span>
                                <span className={ ChallengeContentCSS.infoSubContent }>운동</span>
                            </div>
                            <div className={ ChallengeContentCSS.infoSubArea }>
                                <span className={ ChallengeContentCSS.infoSubTitle }>인증기간</span>
                                <span className={ ChallengeContentCSS.infoSubContent }>2022-07-02 ~ 2022-08-02 (주말제외)</span>
                            </div>
                            <div className={ ChallengeContentCSS.infoSubArea }>
                                <span className={ ChallengeContentCSS.infoSubTitle }>모집방식</span>
                                <span className={ ChallengeContentCSS.infoSubContent }>공개</span>
                            </div>
                            <div className={ ChallengeContentCSS.infoSubArea }>
                                <span className={ ChallengeContentCSS.infoSubTitle }>진행상태</span>
                                <span className={ ChallengeContentCSS.infoSubContent }>진행중</span>
                            </div>
                            <div className={ ChallengeContentCSS.infoImgArea }>
                                <span className={ ChallengeContentCSS.infoSubImgTitle }>인증샷 예시</span>
                                <span>
                                    <img src="/images/challenge/authEx1.png"/>
                                    <img src="/images/challenge/authEx2.png"/>
                                </span>
                            </div>
                        </div>
                    </div>
                ) 
                ||
                (
                    presentTab === "2"
                    &&
                    <div className={ ChallengeContentCSS.authArea }>
                        <Calendar onChange={ onChangeHandler } value={ value } />
                        {
                            status
                            &&
                            <div className={ ChallengeContentCSS.authInfo }>
                                <span className={ ChallengeContentCSS.authTitle }>인증현황</span>
                                <NavLink to={`/challenges/${challengeNo}/auth?date=${moment(value).format("YYYY-MM-DD")}`} className={ ChallengeContentCSS.authLink }>>> 목록보기</NavLink>
                                <div className={ ChallengeContentCSS.authCount }>
                                    <div className={ ChallengeContentCSS.authCountType }><b>총 인증 수</b>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <span>test</span><span>개</span>
                                    </div>
                                    <div className={ ChallengeContentCSS.authCountType }><b>미인증 수</b>
                                        <br/>   
                                        <br/>   
                                        <br/>
                                        <span>3</span><span>개</span>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                )
                ||
                (
                    presentTab === "3"
                    &&
                    <div>
                        3
                    </div>
                )
                ||
                (
                    presentTab === "4"
                    &&
                    <div>
                        4
                    </div>
                )
            }
        </div>
    );
}