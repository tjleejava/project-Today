import ChallengeContent from '../../../components/challenge/ChallengeContent';
import ChallengeSideInfo from '../../../components/challenge/ChallengeSideInfo';
import ChallengeDetailCSS from './ChallengeDetail.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {callGetChallengeInfoAPI} from '../../../apis/ChallengeAPICalls';

export default function ChallengeDetail() {

    const {challengeInfo, authDayInfo, attachmentInfo, presentTab} = useSelector(state => state.challengesReducer);

    const {challengeNo} = useParams();
    
    const dispatch = useDispatch();
    useEffect(
        () => {
            console.log(challengeNo);
            dispatch(callGetChallengeInfoAPI(challengeNo));
        },[]
    );

    return (
        <div className={ ChallengeDetailCSS.content }>
            <ChallengeContent challengeInfo={challengeInfo} authDayInfo={authDayInfo} attachmentInfo={attachmentInfo} presentTab={presentTab}/>
            <ChallengeSideInfo challengeInfo={challengeInfo} challengeNo={challengeNo}/>
        </div>
    );
}