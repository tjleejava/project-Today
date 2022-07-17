import SignHeader from '../../components/commons/SignHeader'
import IdFindNonExist from '../../components/idFindForm/IdFindNonExist';
import IdFindExist from '../../components/idFindForm/IdFindExist';
import { useParams } from 'react-router-dom';

function IdFindResult() {

  const params = useParams();
  const param = params.resultNo;
  const paramArray = param.split('=');
  console.log(paramArray)
  const resultNo = paramArray[0];
  const email = paramArray[1];
  console.log(param)
  console.log(resultNo);
  console.log(email);
  
  if(resultNo == 1) {
    return (
      <IdFindExist props={email}/>
    );
  } else {
    return (
      <IdFindNonExist props={email}/>
    );
  }
};

export default IdFindResult;