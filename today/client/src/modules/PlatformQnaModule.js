import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = {
    registInfo: {
        title:'',
        content: '',
        date:'',
        memberNo: 0
    },
    inquiries: [],
    inquiryInfo: {
        inquiry: {},
        reply: {}
    },
    adminInquiriesPagingInfo: {
        page: 1,
        searchValue: '',
        searchCondition: '',
        totalItemsCount: 1,
        pageItemCount: 10
    }
};

/* 액션 */
export const POST_TITLE = 'platform/POST_TITLE';
export const POST_CONTENT = 'platform/POST_CONTENT';
export const POST_DATE = 'platform/POST_DATE';
export const POST_INQUIRY = 'platform/POST_INQUIRY';
export const GET_INQUIRIES = 'platform/GET_INQUIRIES';
export const GET_INQUIRY = 'platform/GET_INQUIRY';
export const GET_INQUIRIES_ADMIN = 'platform/GET_INQUIRIES_ADMIN';
export const ADMIN_INQUIRIES_SEARCHVALUE = 'platform/ADMIN_INQUIRIES_SEARCHVALUE';



const actions = createActions({
    [POST_TITLE]: () => {},
    [POST_CONTENT]: () => {},
    [POST_DATE]: () => {},
    [POST_INQUIRY]: () => {},
    [GET_INQUIRIES]: () => {},
    [GET_INQUIRIES_ADMIN]: () => {},
    [ADMIN_INQUIRIES_SEARCHVALUE]: () => {},
    [GET_INQUIRY]: () => {}
    
});

/* 리듀서 */
const platformQnaReducer = handleActions(
    {
        [POST_TITLE]: (state, { payload }) => {
            state.registInfo.title = payload;
            
            return {...state};
        },
        [POST_CONTENT]: (state, {payload}) => {
            state.registInfo.content = payload;

            return {...state};
        },
        [POST_DATE]: (state, { payload }) => {
            state.registInfo.date = payload;

            return {...state};
        },
        [POST_INQUIRY]: (state, { payload }) => {
            console.log('payload');

            return {...state};
        },
        [GET_INQUIRIES]: (state, { payload }) => {
            console.log('payload : ', payload.data);
            state.inquiries = payload.data;

            return {...state};
        },
        [GET_INQUIRY]: (state, { payload }) => {
            state.inquiryInfo = payload.data;

            return {...state};
        },
        [GET_INQUIRIES_ADMIN]: (state, { payload }) => {

            console.log('payload : ', payload);

        }, 
        [ADMIN_INQUIRIES_SEARCHVALUE]: (state, { payload }) => {
            state.adminInquiriesPagingInfo.searchValue = payload;

            return {...state};
        }
    },
    initialState
);

export default platformQnaReducer;