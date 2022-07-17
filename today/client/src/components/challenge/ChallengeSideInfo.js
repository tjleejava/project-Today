import ChallengeSideInfoCSS from './ChallengeSideInfo.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkChallengeAuthByMemberNoAPI,callGetChallengeInfoAPI} from '../../apis/ChallengeAPICalls';
import {SET_CHALLENGE_HOST_OR_NOT} from '../../modules/ChallengesModule';
import AdminSide from './challengeSide/AdminSide';
import HostSide from './challengeSide/HostSide';
import UserSide from './challengeSide/UserSide';
import getTime from '../../util/getTime';

export default function ChallengeSideInfo({challengeNo}) {

    const { isHost, partCount, challengeInfo} = useSelector(state => state.challengesReducer);

    const dispatch = useDispatch();

    //보류
    const isAdmin = false;
    const memberNo = 3;
    
    // const isAdmin = true;
    // const memberNo = 1;

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
                ?
                <div className={ ChallengeSideInfoCSS.content }>
                    <span className={ ChallengeSideInfoCSS.challengeProgress }>{passedDate}&nbsp;&nbsp;</span>
                    <span className={ ChallengeSideInfoCSS.text }>일 째 진행중</span>
                </div> : 
                <div className={ ChallengeSideInfoCSS.content }>
                    <span className={ ChallengeSideInfoCSS.challengeProgress }>{challengeInfo.challengeStartDate}&nbsp;&nbsp;</span>
                    <span className={ ChallengeSideInfoCSS.text }>일 시작 예정</span>
                </div>
            }

            {
                isAdmin ?
                <AdminSide/> : 
                (
                    isHost?
                    <HostSide/>:
                    <UserSide/>
                )
            }
        </div>
    );
}