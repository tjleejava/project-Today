export default function MainBodyContent() {

    return (
        <>
            <br/>
            <div className="mainBody">
                <img src="/images/body/mainBanner.png" />
                <br/>
                <input type="text" name="searchValue" />
                <button id="searchBtn">검색</button>
            </div>
            <div className="sideBody hotChallenges">
                <span>어서오세요</span>
                <span>~님</span>
                <button id="openChallengeBtn">챌린지 개설하기</button>
                <hr/>
                <div>HOT CHALLENGE</div>
                <div className="hotChallengeArea">
                    <div>챌린지1</div>
                    <div>챌린지2</div>
                    <div>챌린지3</div>
                </div>
            </div>
        </>
    );
}