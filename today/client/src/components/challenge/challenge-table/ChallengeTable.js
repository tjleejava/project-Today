import { Link, useParams, useNavigate } from 'react-router-dom';
import ChallengeTableCSS from './ChallengeTableCSS.module.css';

function ChallengeTable(props){
  console.log(props)
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/challenges/${props.challengeInfo.challengeNo}`);
    }
  
  return (
    <tr className={ChallengeTableCSS.tr}onClick={onClickHandler}>
      <td >{props.challengeInfo.challengeNo}</td>
      <td>{props.challengeInfo.challengeName}</td>
      <td>{props.challengeInfo.challengeStartDate}</td>
      <td>{props.challengeInfo.nickname}</td>
    </tr>
  )
}

export default ChallengeTable;