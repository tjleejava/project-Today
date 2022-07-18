import JoinAmountCSS from './JoinAmount.module.css';
import ReactSlider from "react-slider"
import { SET_AMOUNT } from '../../../modules/ChallengeRegistModule';
import { useDispatch } from 'react-redux';
function JoinAmount({ amount }) {

  const dispatch = useDispatch();

  return(
    
    <div className={ JoinAmountCSS.area }>
     <input type="range" value={ amount } min='2' max='20' onChange={ (e) => dispatch({ type: SET_AMOUNT, payload:e.target.value})}/>
     {amount}
    </div>
  );
};

export default JoinAmount;