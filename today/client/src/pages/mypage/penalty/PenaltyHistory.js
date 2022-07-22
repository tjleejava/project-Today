import PenaltyBox from '../../../components/mypage/penalty/PenaltyBox';
import PenaltyHistoryCSS from './PenaltyHistoryCSS.module.css';

function PenaltyHistory() {
  return(
    <div className={PenaltyHistoryCSS.container}>
      <PenaltyBox headerCategory='패널티'/>
      <PenaltyBox headerCategory='누적 강퇴 수'/>
    </div>
  )
}

export default PenaltyHistory;