import AuthSearchbarCSS from "./AuthSearchbar.module.css";

export default function AuthSearchbar() {

    return (
        <div className={ AuthSearchbarCSS.searchArea }>
            <select className={ AuthSearchbarCSS.selectArea }>
                <option value="nickname">닉네임</option>
                <option value="registDate">등록일시</option>
            </select>
            <input className={ AuthSearchbarCSS.searchCriteria } type="text" name="searchValue" placeholder="검색"></input>
            <button className={ AuthSearchbarCSS.searchBtn }>검색</button>
        </div>
    );
}