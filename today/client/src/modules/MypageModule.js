import { createActions, handleActions } from 'redux-actions';
const ALL = '0';
const STAND_BY = '1';
const PARTICIPATING = '2';
const COMPLETE = '3';
const CANCEL = '4';
const DELETE = '5';

const initialState = 
{
  challengeInfo: [],
  participatedChallenges: [],
  participatingChallengeNum: 0,
  completedChallengeNum: 0,
  openChallengeNum: 0,
  allChallengeInfo:[],
  allChallengeInfoByStatusNo: [],
  attachmentInfo: {},
  imgUrl: '',
  challengeDetailInfo: {},
  challengeName:'',
  challengeExplain:'',


}

export const CHALLENGE_INFO = 'mypage/CHALLENGE_INFO';
export const ALL_CHALLENGE_INFO = 'mypage/ALL_CHALLENGE_INFO';
export const SET_CHALLENGE_STATUS = '/mypage/SET_CHALLENGE_STATUS';
export const GET_CHALLENGE_DETAIL = '/mypage/GET_CHALLENGE_DETAIL';

const actions = createActions(
  {
  [CHALLENGE_INFO]: () => {},
  [ALL_CHALLENGE_INFO]: () => {},
  [SET_CHALLENGE_STATUS]: () => {},
  [GET_CHALLENGE_DETAIL]: () => {},
});

const mypageReducer = handleActions(
  {
  [CHALLENGE_INFO]: (state, { payload }) => {

    console.log('모듈로오니')
    console.log(payload)
    const memberNo = payload.memberNo;
    console.log('memberNo: ', memberNo);
    state.challengeInfo = payload.challengeInfo;
    console.log(state.challengeInfo.length);
    let participateNum = 0;
    let completeNum = 0;
    let openNum = 0;
    const partChallenge=[];
    
    for(let i = 0; i < state.challengeInfo.length; i++) {
      const statusNo = parseInt(state.challengeInfo[i].challengeStatusNo);
      const findMemberNo = parseInt(state.challengeInfo[i].memberNo);
      console.log('statusNo: ' , statusNo);
      console.log('findMemberNo: ', findMemberNo);
      if(statusNo == 2) {
        participateNum += 1;
        console.log('participateNum: ', participateNum);
        state.participatingChallengeNum = participateNum;
        partChallenge.push(state.challengeInfo[i]);
      } else if( statusNo == 3) {
        completeNum += 1;
        state.completedChallengeNum = completeNum;
      } else if( findMemberNo == memberNo) {
        openNum += 1;
        state.openChallengeNum = openNum;
      }
    }
    console.log(state);
    
    state.participatedChallenges = partChallenge;
    return {...state};
  },
  [ALL_CHALLENGE_INFO]: (state, { payload }) => {
    state.allChallengeInfo = payload.allChallengeInfo;
    state.allChallengeInfoByStatusNo = payload.allChallengeInfo;

    return {...state};
  },
  [SET_CHALLENGE_STATUS]: (state, { payload }) => {
    let newAllChallengeInfo = [];
    //버튼 클릭하기 전 챌린지 정보
    let allChallengeInfo = state.allChallengeInfo;
    //클릭한 버튼 정보
    const buttonValue = payload;
    console.log('buttonValue', buttonValue);
    console.log(state.allChallengeInfo);
    //challenge statusNo이랑 받아온 클릭 No 비교해서 일치하는 경우 새로운 배열 생성
    for(let i = 0; i < allChallengeInfo.length; i++) {
      let challnegeStatusNo = allChallengeInfo[i].challengeStatusNo;
      if(buttonValue == challnegeStatusNo) {
        newAllChallengeInfo = makeNewAllChallengeInfo(newAllChallengeInfo, allChallengeInfo[i]);
      } else if(buttonValue == 0) {
        state.allChallengeInfoByStatusNo = state.allChallengeInfo;
        return {...state};
      }
    }
    state.allChallengeInfoByStatusNo = newAllChallengeInfo;
    console.log(state);

    return {...state};
  },
  [GET_CHALLENGE_DETAIL]: (state, { payload }) => {
    console.log(payload)
    state.attachmentsInfo = payload.attachments;
    let attachmentInfo = state.attachmentsInfo;
    let savedPath = attachmentInfo.savedPath;
    let savedName = attachmentInfo.savedName;
    state.imgUrl = 'http://localhost:8888' + savedPath + '/'+ savedName + '.png';
    state.challengeDetailInfo = payload.challengeDetailInfo;
    state.challengeName = payload.challengeDetailInfo.challengeInfo.challengeName;
    state.challengeExplain = payload.challengeDetailInfo.challengeInfo.challengeInfo;
    console.log(state.challengeDetailInfo);
    console.log(state.imgUrl);

    return{...state}
  }
}, initialState
);

function makeNewAllChallengeInfo (newAllChallengeInfo, allChallenges) {
  
  newAllChallengeInfo.push(allChallenges);
  console.log(newAllChallengeInfo);
  return newAllChallengeInfo;
}

export default mypageReducer;