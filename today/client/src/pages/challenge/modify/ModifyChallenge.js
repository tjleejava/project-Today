import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import ModifyChallengeCSS from './ModifyChallenge.module.css';

function ModifyChallenge() {
    const { challengeNo } = useParams();
    const navigate = useNavigate(); 

    const FIND_CHALLENGE_INFO_URL = 'http://localhost:8888/challenges/' + challengeNo;
    const onClickHandler = () =>{

        axios.get(FIND_CHALLENGE_INFO_URL)
        .then(res => console.log(res));
    };

    return (
        <>
        modify page <br/>
        <button onClick={ onClickHandler }> 조회 버튼 </button>
        </>
    );
}

export default ModifyChallenge;