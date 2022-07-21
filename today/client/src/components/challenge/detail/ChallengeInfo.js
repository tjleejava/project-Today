import ChallengeInfoCSS from './ChallengeInfo.module.css';
import { useSelector } from 'react-redux';

function ChallengeInfo() {

    const {challengeInfo, attachmentInfo} = useSelector(state => state.challengesReducer);
    console.log(challengeInfo.challengeAuthExplan);
    return (
        <div className={ ChallengeInfoCSS.infoArea }>
            <span className={ ChallengeInfoCSS.infoTitle }>{challengeInfo.challengeInfo}</span>
            <div className={ ChallengeInfoCSS.infoContent }>
                <div className={ ChallengeInfoCSS.infoSubArea }>
                    <span className={ ChallengeInfoCSS.infoSubTitle }>카테고리</span>
                    <span className={ ChallengeInfoCSS.infoSubContent }>{challengeInfo.challengeCategoryName}</span>
                </div>
                <div className={ ChallengeInfoCSS.infoSubArea }>
                    <span className={ ChallengeInfoCSS.infoSubTitle }>인증기간</span>
                    <span className={ ChallengeInfoCSS.infoSubContent }>시작일 : {challengeInfo.challengeStartDate} ({challengeInfo.challengeTerm}주 진행)</span>
                </div>
                <div className={ ChallengeInfoCSS.infoSubArea }>
                    <span className={ ChallengeInfoCSS.infoSubTitle }>모집방식</span>
                    <span className={ ChallengeInfoCSS.infoSubContent }>{challengeInfo.challengeScope == 'public'? '공개': '비공개'}</span>
                </div>
                <div className={ ChallengeInfoCSS.infoSubArea }>
                    <span className={ ChallengeInfoCSS.infoSubTitle }>진행상태</span>
                    <span className={ ChallengeInfoCSS.infoSubContent }>{challengeInfo.challengeStatusName}</span>
                </div>
                <div className={ ChallengeInfoCSS.infoSubArea }>
                    <span className={ ChallengeInfoCSS.infoSubTitle }>인증방법</span>
                    <span className={ ChallengeInfoCSS.infoSubContent }>{challengeInfo.challengeAuthExplan}</span>
                </div>
                <div className={ ChallengeInfoCSS.infoImgArea }>
                    <span className={ ChallengeInfoCSS.infoSubImgTitle }>좋은 인증샷 예시</span>
                    {   attachmentInfo[2] && attachmentInfo[2].hasOwnProperty('savedPath')
                        ?<img src={ 'http://localhost:8888' + attachmentInfo[2].savedPath + '/'+ attachmentInfo[2].savedName + '.png' } className={ ChallengeInfoCSS.infoExample }/>
                        :null
                    }
                    <span className={ ChallengeInfoCSS.infoSubImgTitle }>나쁜 인증샷 예시</span>
                    {   attachmentInfo[3] && attachmentInfo[3].hasOwnProperty('savedPath')
                        ?<img src={ 'http://localhost:8888' + attachmentInfo[3].savedPath + '/'+ attachmentInfo[3].savedName + '.png' } className={ ChallengeInfoCSS.infoExample }/>
                        :null
                    }
                </div>
            </div>
        </div>
    );
};

export default ChallengeInfo;