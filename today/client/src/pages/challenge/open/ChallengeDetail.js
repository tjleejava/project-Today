import ChallengeContent from '../../../components/challenge/ChallengeContent';
import ChallengeSideInfo from '../../../components/challenge/ChallengeSideInfo';
import ChallengeDetailCSS from './ChallengeDetail.module.css';

export default function ChallengeDetail() {

    return (
        <div className={ ChallengeDetailCSS.content }>
            <ChallengeContent/>
            <ChallengeSideInfo/>
        </div>
    );
}