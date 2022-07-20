const HttpStatus = require('http-status');
const InviteService = require('../../services/invite/invite-service');

exports.registInvite = async (req, res, next) => {

  const result = await InviteService.registInvite(req.body);

  res.send(result);
};