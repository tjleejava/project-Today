import ChallengeContentCSS from './ChallengeContent.module.css';
import { useParams, Outlet } from 'react-router-dom';

export default function ChallengeContent() {

    const { challengeNo } = useParams();
    // console.log(challengeNo);
    console.log(typeof(challengeNo));

    return (
        <div className={ ChallengeContentCSS.content }>
            <span className={ ChallengeContentCSS.title }>테니스 왕초보 탈출! 매일 10분씩 공 튕기기</span>
            <label className={ ChallengeContentCSS.host }>개설자 </label>
            <span className={ ChallengeContentCSS.hostname }>홍길동</span>
            <br/>
            <img src="/images/challenge/challengeBanner1.png"/>
            <br/>
            <div className={ ChallengeContentCSS.tabArea }>
                <button className={ ChallengeContentCSS.standard }>챌린지 소개</button>
                <button className={ ChallengeContentCSS.tab }>인증목록</button>
                <button className={ ChallengeContentCSS.tab }>챌린지 문의</button>
                <button className={ ChallengeContentCSS.tab }>참여자 목록</button>
            </div>
            <Outlet/>
        </div>
    );
}