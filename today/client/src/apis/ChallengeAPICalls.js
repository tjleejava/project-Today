import { GET_CHALLENGE } from "../modules/ChallengesModule";
import axios from 'axios';

export function callGetChallengeInfoAPI(challengeNo) {
    
    console.log('api challengeNo print: ' , challengeNo);
    let FIND_CHALLENGE_INFO_URL = 'http://localhost:8888/challenges/' + challengeNo;

    
    return async function getChallenge(dispatch, getState) {
        let results;
        await axios.get(FIND_CHALLENGE_INFO_URL)
                .then(res => results = res.data.result);

        dispatch({ type: GET_CHALLENGE, payload: results })
    }
}