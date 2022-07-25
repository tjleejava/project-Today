import IdPwdNavbar from '../../components/commons/idPwdNavbar/IdPwdNavbar';
import PwdFindForm from '../../components/pwdFindForm/PwdFindForm';

function PwdFind() {

  return(
    <div style={{height: "63vh"}}>
      <IdPwdNavbar/>
      <PwdFindForm/>
    </div>
  );
};

export default PwdFind;