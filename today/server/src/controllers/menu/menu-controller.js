const HttpStatus = require('http-status');
const MenuService = require('../../services/menu-service');

exports.findAllMenus = async (req, res, next) => {

    const results = await MenuService.findAllMenus();

    res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'successfully found all menus',
        results: results
    });
}; 