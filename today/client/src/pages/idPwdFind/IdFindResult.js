import SignHeader from '../../components/commons/SignHeader'
import IdFindNonExist from '../../components/idFindForm/IdFindNonExist';
import IdFindExist from '../../components/idFindForm/IdFindExist';

function IdFindResult() {
  
  const result = true;
  if(result) {
    return (
      <IdFindExist/>
    );
  } else {
    return (
      <IdFindNonExist/>
    );
  }
};

export default IdFindResult;