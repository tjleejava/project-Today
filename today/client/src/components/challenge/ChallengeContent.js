import ChallengeContentCSS from './ChallengeContent.module.css';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useSelector, useDispatch } from 'react-redux';
import {callGetChallengeInfoAPI} from '../../apis/ChallengeAPICalls';
import {CHANGE_CHALLENGE_DETAIL_PRESENTTAB} from '../../modules/ChallengesModule';
import moment from 'moment';
import axios from 'axios';
import ChallengeInfo from './detail/ChallengeInfo';
import Participation from './detail/Participation';

export default function ChallengeContent({challengeInfo, authDayInfo, attachmentInfo, presentTab, challengeNo}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const challengeNum = useParams();
    
    const [value, setValue] = useState(new Date());
    const [status, setStatus] = useState(false);


    const onClickHandler = (tabNo) => {
        dispatch({type: CHANGE_CHALLENGE_DETAIL_PRESENTTAB, payload:tabNo});
        if(tabNo == 3) {
            console.log(challengeNum)
            const inquiryUrl = '/challenges/' + challengeNum.challengeNo + '/inquiry';
            navigate(inquiryUrl);
        }
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
            <label className={ ChallengeContentCSS.title }>{challengeInfo.challengeName}</label>
            <label className={ ChallengeContentCSS.host }>개설자 </label>
            <label className={ ChallengeContentCSS.hostname }>{challengeInfo.nickname}</label>
            <br/>
            {   attachmentInfo[0] && attachmentInfo[0].hasOwnProperty('savedPath')
                ?<img src={ 'http://localhost:8888' + attachmentInfo[0].savedPath + '/'+ attachmentInfo[0].savedName + '.png' } className={ ChallengeContentCSS.banner }/>
                :null
            }
            <br/>
            <div className={ ChallengeContentCSS.tabArea }>
                <button className={ presentTab === "1" ? ChallengeContentCSS.standard : ChallengeContentCSS.tab } onClick={ () => onClickHandler('1') }>챌린지 소개</button>
                <button className={ presentTab === "2" ? ChallengeContentCSS.standard : ChallengeContentCSS.tab } onClick={ () => onClickHandler('2') }>인증목록</button>
                <button className={ presentTab === "3" ? ChallengeContentCSS.standard : ChallengeContentCSS.tab } onClick={ () => onClickHandler('3') }>챌린지 문의</button>
                <button className={ presentTab === "4" ? ChallengeContentCSS.standard : ChallengeContentCSS.tab } onClick={ () => onClickHandler('4') }>참여자 목록</button>
            </div>
            {
                (
                    presentTab === "1" 
                    &&
                    <ChallengeInfo/>
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
                    <Participation/>
                )
            }
        </div>
    );
}