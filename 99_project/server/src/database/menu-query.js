exports.selectAllMenus = () => {

    return `
        SELECT
               A.MENU_CODE
             , A.MENU_NAME
             , A.MENU_PRICE
             , A.CATEGORY_CODE
             , A.ORDERABLE_STATUS
          FROM TBL_MENU A
    `;
};