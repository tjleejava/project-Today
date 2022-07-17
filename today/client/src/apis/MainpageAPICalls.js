import axios from 'axios';
import { GET_RANKINGS, GET_CHALLENGE_LIST_BY_CATEGORY } from '../modules/MainpageModule'

export function getRankingsAPI() {

  const GET_RANKINGS_URL = 'http://localhost:8888/challenges/rankings';

  return async function getRankings(dispatch, getState) {

    const result = await axios.get(GET_RANKINGS_URL).catch(err => console.error(err));

    dispatch({type: GET_RANKINGS, payload: result.data});
  };
};

export function getMainLayoutChallengeListAPI(categoryNo) {

  const GET_CHALLENGE_LIST_BY_CATEGORY_URL = 'http://localhost:8888/challenges/category/' + categoryNo;

  return async function getChallengeListByCategory(dispatch, getState) {

    const results = await axios.get(GET_CHALLENGE_LIST_BY_CATEGORY_URL).catch(err => console.error(err));
    
    dispatch({type: GET_CHALLENGE_LIST_BY_CATEGORY, payload: results.data})
  };
};