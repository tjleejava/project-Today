import axios from 'axios';
import { GET_USER_EMAIL } from '../modules/InviteModule';

export function checkUserEmailAPI(email) {

  const GET_USER_EMAIL_URL = 'http://localhost:8888/members/checkEmail';

  return async function checkUserEmail(dispatch, getState) {

    const result = await axios.get(GET_USER_EMAIL_URL, { params: { email: email}}).catch(err => console.log(err));

    dispatch({ type: GET_USER_EMAIL, payload: result.data });
  };
};