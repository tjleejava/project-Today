import InviteCSS from './Invite.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import InvitePage from './InvitePage';
import { useNavigate } from 'react-router-dom';
import { deleteInviteAPI, getInvitesAPI } from '../../apis/InviteAPICalls';
import jwt_decode from "jwt-decode";
import {Cookies} from 'react-cookie'

function Invite() {

  const { invites, pageInfo } = useSelector(state => state.inviteReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cookies = new Cookies();
  const token = cookies.get('token');
  let memberNo = 1;

  if(token) {
    const decoded = jwt_decode(token);
    memberNo = decoded.no;
  }

  const onMouseOverHandler = (no) => {
    const tr = document.getElementById(no);
    tr.style.backgroundColor='black';
    tr.style.color='white';
    tr.style.cursor='pointer';
  };

  const onMouseOutHandler = (no) => {
    const tr = document.getElementById(no);
    tr.style.backgroundColor='white';
    tr.style.color='black';
  };

  const invitePageHandler = ({challengeNo, inviteNo}) => {
    navigate(`/challenges/${challengeNo}`);
    
    dispatch(deleteInviteAPI(inviteNo));
  }

  const removeInviteHandler = (inviteNo) => {
    
    dispatch(deleteInviteAPI(inviteNo));
    dispatch(getInvitesAPI({memberNo: memberNo, pageInfo: pageInfo}));
  };

  return (
    <div className={InviteCSS.area}>
      <div className={InviteCSS.head}>
        <label>초대 목록</label>
        <hr/>
      </div>
      <div className={InviteCSS.body}>
        <table>
          <colgroup>
              <col width = "45%"/>
              <col width = "20%"/>
              <col width = "25%"/>
              <col width = "10%"/>
          </colgroup>
          <thead className={ InviteCSS.tablehead }>
            <th>챌린지명</th>
            <th>개설자</th>
            <th>초대일</th>
            <th></th>
          </thead>
          
          {
            invites.map(invite => 
              <tr
                className={ InviteCSS.tabledata }
                key={invite.inviteNo}
                onMouseOver={ () => onMouseOverHandler(invite.inviteNo)}
                onMouseOut={ () => onMouseOutHandler(invite.inviteNo)}
                id={invite.inviteNo}
              >{console.log(invite)}
                <td onClick={ () => invitePageHandler({challengeNo: invite.challengeNo, inviteNo: invite.inviteNo}) } >{invite.challengeName}</td>
                <td onClick={ () => invitePageHandler({challengeNo: invite.challengeNo, inviteNo: invite.inviteNo}) } >{invite.founderName}</td>
                <td onClick={ () => invitePageHandler({challengeNo: invite.challengeNo, inviteNo: invite.inviteNo}) } >{invite.date}</td>
                <td onClick={ () => removeInviteHandler(invite.inviteNo)}>삭제</td>
              </tr>
            )
          }
        </table>
      </div>
      <div className={InviteCSS.pagearea}>
        <InvitePage/>
      </div>
    </div>
  );
};

export default Invite;