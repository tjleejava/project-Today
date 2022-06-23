const getConnection = require('../database/connection');
const MenuRepository = require('../repositories/menu-repo');

exports.findAllMenus = () => {

    return new Promise((resolve, reject) => {

        const connection = getConnection();

        const results = MenuRepository.selectAllMenus(connection);

        connection.end();

        resolve(results);
    });
};