import { createActions, handleActions } from 'redux-actions';

const initialState = {
  challengeInquiries: [],
}

export const CHALLENGE_INQUIRY_LIST = 'inquiries/CHALLENGE_INQUIRY_LIST';

const actions = createActions({
  [CHALLENGE_INQUIRY_LIST]: () => {},
})

const challengeInquiryReducer = handleActions(
  {
    [CHALLENGE_INQUIRY_LIST]: (state,  {payload} ) => {
      console.log(payload)
      state.challengeInquiries = payload;

      return{...state}
    }
  }, initialState
)

export default challengeInquiryReducer;