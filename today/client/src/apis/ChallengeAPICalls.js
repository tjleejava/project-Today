import { GET_CHALLENGE, GET_CHALLENGE_AUTH_BY_MEMBER } from "../modules/ChallengesModule";
import { GET_CHALLENGE_LIST } from '../modules/ChallengeListModule';
import axios from 'axios';

export function callGetChallengeInfoAPI(challengeNo) {
    
    let FIND_CHALLENGE_INFO_URL = 'http://localhost:8888/challenges/' + challengeNo;

    
    return async function getChallenge(dispatch, getState) {
        let results;
        results = await axios.get(FIND_CHALLENGE_INFO_URL)
                .then(res => results = res.data.result)
                .catch(err => console.log(err));;

        dispatch({ type: GET_CHALLENGE, payload: results })
    };
};

export function checkChallengeAuthByMemberNoAPI(authInfo) {

    let CHECK_AUTH_URL = 'http://localhost:8888/challenges/checkAuth';

    return async function checkAuth(dispatch, getState) {
        const result = await axios.get(CHECK_AUTH_URL, { params: {authInfo: authInfo}}).catch(err => console.log(err));

        dispatch({ type: GET_CHALLENGE_AUTH_BY_MEMBER, payload: result.data});
    };
};

export function getChallengeList(pageInfo) {
    const GET_CHALLENGE_LIST_URL = 'http://localhost:8888/challenges';

    return async function getChallengeListByCategory(dispatch, getState) {
        const results = await axios.get(GET_CHALLENGE_LIST_URL, {params : { pageInfo: pageInfo}})
                                    .catch(err => console.log(err));
    
        dispatch({type: GET_CHALLENGE_LIST, payload: results.data});
    };
}