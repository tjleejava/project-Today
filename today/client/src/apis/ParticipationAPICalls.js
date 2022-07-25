import axios from 'axios';
import { GET_PARTICIPATIONS } from '../modules/ParticipationModule';

export function callGetParticipations(challengeNo) {

    let GET_CHALLENGE_PARTICIPATIONS_URL = "http://localhost:8888/challenges/" + challengeNo + "/participations";

    return async function getParticipation(dispatch, getState) {

        const result = await axios.get(GET_CHALLENGE_PARTICIPATIONS_URL)
                        .then(res => result = res.data.result)
                        .catch(err => console.log(err));
        
                        dispatch({ type: GET_PARTICIPATIONS, payload: result });
    };
};