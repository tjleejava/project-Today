import { useEffect } from 'react';
import { callGetMenuAPI } from '../../apis/MenuAPICalls';
import { useSelector, useDispatch } from 'react-redux';

function MenuList() {

    const menus = useSelector(state => state.menuReducer);
    console.log('state : ', menus);
    const dispatch = useDispatch();

    useEffect(
        () => { dispatch(callGetMenuAPI()) },
        []
    );

    return menus && (
        <div>
            <h3>메뉴 목록</h3>
            <ul>
                { menus.map(menu => <li key={ menu.menuCode}>{ menu.menuName }</li>) }
            </ul>
        </div>
    );
}

export default MenuList;