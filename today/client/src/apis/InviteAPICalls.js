import axios from 'axios';
import { DELETE_INVITE, GET_INVITES, GET_USER_EMAIL, POST_INVITE } from '../modules/InviteModule';

export function checkUserEmailAPI(email) {

  const GET_USER_EMAIL_URL = 'http://localhost:8888/members/checkEmail';

  return async function checkUserEmail(dispatch, getState) {

    const result = await axios.get(GET_USER_EMAIL_URL, { params: { email: email}}).catch(err => console.log(err));

    dispatch({ type: GET_USER_EMAIL, payload: result.data });
  };
};

export async function postInviteAPI(inviteInfo) {
  
  const POST_INVITE_URL = 'http://localhost:8888/invites';
  

    const result = await axios.post(POST_INVITE_URL, inviteInfo).catch(err => console.log(err));

    return result.data.checkResult;
};

export function getInvitesAPI(findInfo) {

  const GET_INVITES_URL = 'http://localhost:8888/invites';

  return async function getInvites(dispatch, getState) {

    const results = await axios.get(GET_INVITES_URL, {params : {findInfo: findInfo}}).catch(err => console.log(err));

    dispatch({type: GET_INVITES, payload: results.data});
  };
}

export function deleteInviteAPI(inviteNo) {

  const DELETE_INVITE_URL = 'http://localhost:8888/invites';

  return async function deleteInvite(dispatch, getState) {
    const result = await axios.delete(DELETE_INVITE_URL, {params: {inviteNo: inviteNo}})
                                .catch(err => console.log(err));
    
    dispatch({type: DELETE_INVITE, payload: result.data});
  };
};