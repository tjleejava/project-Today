import ChallengeSideInfoCSS from './ChallengeSideInfo.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ChallengeReportModal from './ChallengeReportModal';
import { useDispatch, useSelector } from 'react-redux';
import { checkChallengeAuthByMemberNoAPI,callGetChallengeInfoAPI} from '../../apis/ChallengeAPICalls';
import {SET_CHALLENGE_HOST_OR_NOT} from '../../modules/ChallengesModule';
import AdminSide from './challengeSide/AdminSide';
import HostSide from './challengeSide/HostSide';
import UserSide from './challengeSide/UserSide';
import getTime from '../../util/getTime';
import jwt_decode from "jwt-decode";
import {Cookies} from 'react-cookie'

export default function ChallengeSideInfo({challengeNo}) {

    const cookies = new Cookies();

    let isAdmin = false;
    let memberNo = 0;
    const token = cookies.get('token');
    if(token) {
        const decoded = jwt_decode(token);
        memberNo = decoded.no;
        isAdmin = decoded.memberRole == 'ROLE_ADMIN' ? true : false;
    } 

    const MODIFY = 'modify';
    const navigate = useNavigate(); 
    const [reportModalState , setReportModalState] = useState(false);

    const { registInfo, isAlreadyReported } = useSelector(state => state.reportReducer);
    const { isHost, partCount, challengeInfo } = useSelector(state => state.challengesReducer);


    const dispatch = useDispatch();

    const passedDate = getTime.getPassedDate(challengeInfo.challengeStartDate);
    useEffect(
            () => {
                dispatch(callGetChallengeInfoAPI(challengeNo));
            },[]
        );

    useEffect(  
        () => {
            dispatch(checkChallengeAuthByMemberNoAPI({memberNo: memberNo, challengeNo: challengeNo}));
            const isHost = challengeInfo.memberNo == memberNo ? true : false;
            dispatch({type: SET_CHALLENGE_HOST_OR_NOT, payload: isHost});
            
        },[challengeInfo]
    );

    return (
        <div className={ ChallengeSideInfoCSS.sideInfoArea }>
            <div className={ ChallengeSideInfoCSS.content }>
                <label className={ ChallengeSideInfoCSS.challengerCount }>참여인원&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>

                <span className={ ChallengeSideInfoCSS.challengerCountInfo }><span>{partCount}&nbsp;&nbsp;</span><span>/</span><span>&nbsp;&nbsp;{challengeInfo.challengeMaxAmount}</span></span>
            </div>
            {
                challengeInfo.challengeStatusNo === 2
                &&
                (<div className={ ChallengeSideInfoCSS.content }>
                    <span className={ ChallengeSideInfoCSS.challengeProgress }>{passedDate}&nbsp;&nbsp;</span>
                    <span className={ ChallengeSideInfoCSS.text }>일 째 진행중</span>
                </div>)  
            }
            {   challengeInfo.challengeStatusNo === 1 &&   
                <div className={ ChallengeSideInfoCSS.content }>
                    <span className={ ChallengeSideInfoCSS.challengeProgress }>{challengeInfo.challengeStartDate}&nbsp;&nbsp;</span>
                    <span className={ ChallengeSideInfoCSS.text }>일 시작 예정</span>
                </div>
            }

            {
                isAdmin ?
                <AdminSide/> : 
                (
                    token?
                    (
                        isHost?
                        <HostSide/>:
                        <div>
                            <UserSide isAlreadyReported={isAlreadyReported} setReportModalState={setReportModalState}/>
                        </div>
                    ) :
                    null
                )
            }
            <ChallengeReportModal reportModalState={reportModalState} setReportModalState={setReportModalState}/>        
        </div>
    );
}