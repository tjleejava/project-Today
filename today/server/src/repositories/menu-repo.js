const menuQuery = require('../database/menu/menu-query');
const MenuDTO = require('../dto/menu-response-dto');

exports.selectAllMenus = (connection) => {

    return new Promise((resolve, reject) => {
        connection.query(menuQuery.selectAllMenus(), (err, results, fields) => {

            if(err) {
                reject(err);
            }

            const menus = [];
            for(let i = 0; i < results.length; i++) {
                menus.push(new MenuDTO(results[i]));
            }

            resolve(menus);
        });
    });
};