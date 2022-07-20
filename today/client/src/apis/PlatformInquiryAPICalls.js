import { PUT_REPLY, POST_INQUIRY,GET_INQUIRIES, GET_INQUIRY,GET_INQUIRIES_ADMIN } from "../modules/PlatformQnaModule";
import axios from 'axios';

export function callPostInquiryAPI(registInfo) {
    let REGIST_INQUIRY_URL = 'http://localhost:8888/inquiries';

    return async function postInquiry(dispatch, getState) {
      
        await axios.post(REGIST_INQUIRY_URL, registInfo)
                    .catch(err => console.log(err));
        
        dispatch({type: POST_INQUIRY, payload: {}});
    }
};

export function callGetInquiriesAPI({memberNo, pageInfo}) {

  let GET_INQUIRIES_API_URL = 'http://localhost:8888/inquiries';

  return async function getInquiries(dispatch, getState) {

    let result;
    await axios.get(GET_INQUIRIES_API_URL,{ params: {memberNo : memberNo, pageInfo: pageInfo} })
                .then(res => result = res)
                .catch(err => console.log(err));

    dispatch({type: GET_INQUIRIES, payload: result.data});
  }
};

export function callGetInquiryAPI(inquiryNo) {

  let GET_INQUIRY_API_URL = `http://localhost:8888/inquiries/${inquiryNo}`;

  return async function getInquiry(dispatch, getState) {
    const result = await axios.get(GET_INQUIRY_API_URL)
    .catch(err => console.log(err));
    dispatch({type: GET_INQUIRY, payload: result});
  };
};

export function callAdminGetInquiriesAPI(pageInfo) {

  let GET_INQUIRIES_API_URL = 'http://localhost:8888/inquiries/all';
  return async function getInquiries(dispatch, getState) {
    const result = await axios.get(GET_INQUIRIES_API_URL, { params: { pageInfo: pageInfo}})
    .catch(err => console.log(err));
    dispatch({type: GET_INQUIRIES_ADMIN, payload: result});
  };
};

export function callPutReplyAPI(reply) {
  let PUT_REPLY_API_URL = 'http://localhost:8888/inquiries/reply';
  
  return async function putReply(dispatch, getState) {
    console.log(reply);
    const result = await axios.put(PUT_REPLY_API_URL, reply)
                            .catch(err => console.log(err));

    dispatch({type: PUT_REPLY, payload: result.data.result});

  };
};

export function callPostReplyAPI(inquiryInfo) {

  let POST_REPLY_API_URL = 'http://localhost:8888/inquiries/reply';

  return async function postReply(dispatch, getState) {

    console.log(inquiryInfo);
    const result = await axios.post(POST_REPLY_API_URL, inquiryInfo)
                              .catch(err => console.log(err));

    
  };
};