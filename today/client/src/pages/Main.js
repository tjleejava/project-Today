import Banner from "../components/mainpage/Banner";
import MainLayout from "../components/mainpage/MainLayout";
import MainRanking from "../components/mainpage/MainRanking";
import MainSearch from "../components/mainpage/MainSearch";
import MainUser from "../components/mainpage/MainUser";
import MainCSS from './Main.module.css';

function Main() {

    return (
        <>
        <div className={ MainCSS.area }>
            <div className={ MainCSS.toparea}>
                <Banner/>
                <MainUser/>
            </div>
            <div className={ MainCSS.botarea }>
                <MainSearch/>
                <MainRanking/>
                <MainLayout/>
            </div>
        </div>
        <br/>
        </>
    );
}

export default Main;