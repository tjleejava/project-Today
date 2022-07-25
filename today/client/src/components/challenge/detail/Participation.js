import ParticipationCSS from './Participation.module.css';
import { callGetParticipations } from "../../../apis/ParticipationAPICalls";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Participation() {

  const { challengeNo } = useParams(); 

  const participations = useSelector(state => state.participationReducer);
  console.log("from Participation.js : ", participations);

  const dispatch = useDispatch();

  useEffect(
    () => { dispatch(callGetParticipations(challengeNo)) },
    []
  )

  return (
    <div className={ParticipationCSS.area}>
        <ul>
          { participations.map(participation => <li key={ participation.MEMBER_NO }>{ participation.NICKNAME }</li>) }
        </ul>
    </div>
  );
};

export default Participation;