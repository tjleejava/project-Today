import { GET_MENUS } from "../modules/MenuModule";

export function callGetMenuAPI(url) {

    const requestURL = url || 'http://localhost:8888/menus';

    return async function getMenus(dispatch, getState) {
        
        const result = await fetch(requestURL).then(res => res.json());

        console.log('result : ', result.results);
        dispatch({ type: GET_MENUS, payload: result.results })
    }
}