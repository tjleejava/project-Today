const HttpStatus = require('http-status');
const InviteService = require('../../services/invite/invite-service');

exports.findInvites = async (req, res, next) => {
  
  const results = await InviteService.findInvites(JSON.parse(req.query.findInfo));

   res.send(results);
};

exports.registInvite = async (req, res, next) => {

  const result = await InviteService.registInvite(req.body);

  console.log(result);
  res.send(result);
};

exports.removeInvite = async (req, res, next) => {

  const result = await InviteService.removeInvite(JSON.parse(req.query.inviteNo));
};