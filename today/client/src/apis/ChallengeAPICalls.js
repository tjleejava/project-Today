import { GET_CHALLENGE, GET_CHALLENGE_AUTH_BY_MEMBER } from "../modules/ChallengesModule";
import { GET_CHALLENGE_LIST } from '../modules/ChallengeListModule';
import axios from 'axios';
import { POST_CHALLENGE, SET_FILE_INFO } from "../modules/ChallengeRegistModule";

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

export function registChallengeAPI(registInfo) {
    const POST_CHALLENGE_URL = 'http://localhost:8888/challenges';

    return async function registChallenge(dispatch, getState) {

        const result = await axios.post(POST_CHALLENGE_URL, registInfo)
                                    .catch(err => console.log(err));
        console.log(result);
        dispatch({type: POST_CHALLENGE, payload: result.data.result});
    };
};

export async function registChallengeImagesAPI({inputFile}) {

    const POST_CHALLENGE_IMAGE_URL = 'http://localhost:8888/challenges/upload';

    const result = await axios.post(POST_CHALLENGE_IMAGE_URL, inputFile).catch(err => console.log(err));
    
    return result;
};

export async function participatingChallengeAPI(memberNo, challengeNo) {

    const data = {
        memberNo: memberNo,
        challengeNo: challengeNo
    }

    return new Promise(async(resolve, reject) => {
        console.log('challengeAPI 호출');
        const url = 'http://localhost:8888/challenges/' + challengeNo ;

        const result = await axios.post(url, data);
        console.log(result);
        resolve(result);
    })
};

export async function removeChallengeAPI(challengeNo) {
    const DELETE_CHALLENGE_URL = 'http://localhost:8888/challenges';
    
    const result = await axios.delete(DELETE_CHALLENGE_URL, {params : {removeInfo: challengeNo}}).catch(err => console.log(err));

    return result;
};

export async function modifyChallengeAPI(modifyInfo) {
    const MODIFY_CHALLENGE_URL = 'http://localhost:8888/challenges';

    const result = await axios.put(MODIFY_CHALLENGE_URL, modifyInfo)
                            .catch(err => console.log(err));

    return result;
};

export async function secessionChallengeAPI(secessionInfo) {
    const CHALLENGE_SECESSION_URL = 'http://localhost:8888/challenges/secession';

    const result = await axios.put(CHALLENGE_SECESSION_URL, secessionInfo).catch(err => console.log(err));

    return result;
};

export async function registChallengeInquiryAPI(title, content, memberNo, challengeNo) {
    const data = {
        title: title,
        content: content,
        memberNo: memberNo,
        challengeNo: challengeNo
    }

    console.log(data);

    const CHALLENGE_INQUIRY_REGIST_URL = 'http://localhost:8888/challenges/'+ challengeNo + '/inquiries';

    return new Promise((resolve, reject) => {
        axios.post(CHALLENGE_INQUIRY_REGIST_URL, data)
        .then((res) => {
            resolve(res)
        });
    })

}

export async function findChallengeInquiryListAPI(challengeNo) {

    

    const CHALLENGE_LIST_URL = 'http://localhost:8888/challenges/' + challengeNo + '/inquiries';

    return new Promise((resolve, reject) => {

        axios.get(CHALLENGE_LIST_URL, {params : { challengeNo: challengeNo}})
        .then((res) => {
            resolve(res);
        })

    })
}