import { POST_INQUIRY,GET_INQUIRIES, GET_INQUIRY } from "../modules/PlatformQnaModule";
import axios from 'axios';

export function callPostInquiryAPI(registInfo) {
    let REGIST_INQUIRY_URL = 'http://localhost:8888/inquiries';

    return async function postInquiry(dispatch, getState) {
      
        await axios.post(REGIST_INQUIRY_URL, registInfo)
                    .catch(err => console.log(err));
        
        dispatch({type: POST_INQUIRY, payload: {}});
    }
};

export function callGetInquiriesAPI(memberNo) {

  let GET_INQUIRIES_API_URL = 'http://localhost:8888/inquiries';

  return async function getInquiries(dispatch, getState) {

    let result;
    console.log('memberNo : ', memberNo);
    await axios.get(GET_INQUIRIES_API_URL,{ params: {memberNo : memberNo} })
                .then(res => result = res)
                .catch(err => console.log(err));
    dispatch({type: GET_INQUIRIES, payload: result});
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