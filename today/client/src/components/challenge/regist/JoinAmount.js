import JoinAmountCSS from './JoinAmount.module.css';
import ReactSlider from "react-slider"

function JoinAmount({ amount, setAmount }) {

  return(
    
    <div className={ JoinAmountCSS.area }>
     <input type="range" value={ amount } min='1' max='20' onChange={ (e) => setAmount(e.target.value)} />
     {amount}
    </div>
  );
};

export default JoinAmount;