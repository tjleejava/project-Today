import { POST_INQUIRY,GET_INQUIRIES } from "../modules/PlatformQnaModule";
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
    await axios.get(GET_INQUIRIES_API_URL)
                .then(res => result = res)
                .catch(err => console.log(err));
    dispatch({type: GET_INQUIRIES, payload: result});
  }

};