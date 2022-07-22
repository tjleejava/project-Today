import PenaltyBoxCSS from './PenaltyBoxCSS.module.css';

function PenaltyBox(props) {
  return (
    <>
    <div className={PenaltyBoxCSS.container}>
      <h4 className={PenaltyBoxCSS.headerCategory}>{props.headerCategory}</h4>
      <div className={PenaltyBoxCSS.challengeListBox}>
      <table>
            <thead>
            <tr>
              <th>No</th>
              <th>패널티</th>
              <th>원인</th>
              <th>패널티 일시</th>
            </tr>
            </thead>
            <tbody>
              {}
            </tbody>
          </table>
      </div>
    </div>
    </>
  )
}

export default PenaltyBox;