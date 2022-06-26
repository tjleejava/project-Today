import MemberChallengesCSS from './MemberChallenges.module.css';

export default function MemberChallenges() {
    
    return (
        <div className={ MemberChallengesCSS.content }>
            <div className={ MemberChallengesCSS.infoBox }>
                <div className={ MemberChallengesCSS.challengeContent }>3개</div>
                <span className={ MemberChallengesCSS.type }>개설 챌린지</span>
            </div>
            <div className={ MemberChallengesCSS.infoBox }>
                <div className={ MemberChallengesCSS.challengeContent }>12개</div>
                <span className={ MemberChallengesCSS.type }>참여 챌린지</span>
            </div>
            <div className={ MemberChallengesCSS.infoBox }>
                <div className={ MemberChallengesCSS.challengeContent }>102개</div>
                <span className={ MemberChallengesCSS.type }>챌린지 인증</span>
            </div>
        </div>
    );
}