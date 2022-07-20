import { useSelector } from 'react-redux';
import ChallengeList from './ChallengeList';
import ChallengeListComponentCSS from './ChallengeListComponentCSS.module.css';

function ChallengeListComponent() {

  const {challenges} = useSelector(state => state.challengelistReducer);

  return(
    <div className={ChallengeListComponentCSS.container}>
      {challenges.map( challenge => <ChallengeList challenge={challenge} key={challenge.challengeNo}/> )}
    </div>
  )
}

export default ChallengeListComponent;