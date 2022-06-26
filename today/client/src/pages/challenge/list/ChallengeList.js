import ChallengeCategoryBtn from '../../../components/challenge/challengeCategoryBtn/ChallengeCategoryBtn';
import ChallengeListComponent from '../../../components/challenge/challengelist/ChallengeListComponent';
import SearchComponent from '../../../components/challenge/challengeListSearchComponent.js/SearchComponent';

function ChallengesList() {

  return (
    <>
      <ChallengeCategoryBtn/>
      <ChallengeListComponent/>
      <SearchComponent/>
    </>
  );
}

export default ChallengesList;