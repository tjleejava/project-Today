import ChallengeSideInfoCSS from './ChallengeSideInfo.module.css';
import { useParams, useNavigate } from 'react-router-dom';
export default function ChallengeSideInfo() {

    const { challengeNo } = useParams();
    const MODIFY = 'modify';
    const navigate = useNavigate(); 

    const modifyChallengeHandler = () => {
        navigate(MODIFY);
    }


    return (
        <div className={ ChallengeSideInfoCSS.sideInfoArea }>
            <div className={ ChallengeSideInfoCSS.content }>
                <label className={ ChallengeSideInfoCSS.challengerCount }>참여인원&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <span className={ ChallengeSideInfoCSS.challengerCountInfo }><span>6명&nbsp;&nbsp;</span><span>/</span><span>&nbsp;&nbsp;10명</span></span>
            </div>
            <div className={ ChallengeSideInfoCSS.content }>
                <span className={ ChallengeSideInfoCSS.challengeProgress }>0&nbsp;&nbsp;</span>
                <span className={ ChallengeSideInfoCSS.text }>일 째 진행중</span>
            </div>
            <div className={ ChallengeSideInfoCSS.content }>
                <div className={ ChallengeSideInfoCSS.context1 }>힘내세요!</div>
            </div>
            <div className={ ChallengeSideInfoCSS.content }>
                <button className={ ChallengeSideInfoCSS.authBtn }>챌린지 인증하기</button>
            </div>
            <div className={ ChallengeSideInfoCSS.content }>
                <div className={ ChallengeSideInfoCSS.context2 }><span>미확인된 인증이&nbsp;</span><span className={ ChallengeSideInfoCSS.context1 }>4</span><span>&nbsp;개 입니다!</span></div>
                <button className={ ChallengeSideInfoCSS.authBtn }>인증 현황</button>
            </div>
            <br/>
            <div className={ ChallengeSideInfoCSS.content }>
                <button className={ ChallengeSideInfoCSS.inviteBtn }>친구 초대하기</button>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div className={ ChallengeSideInfoCSS.buttonArea }>
                <button onClick={ modifyChallengeHandler } className={ ChallengeSideInfoCSS.modifyBtn }>챌린지 수정</button>
                <button className={ ChallengeSideInfoCSS.deleteBtn }>챌린지 삭제</button>
            </div>
        </div>
    );
}