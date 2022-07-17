const jwt = require('jsonwebtoken');
const passport = require('passport');
require("dotenv").config();
const express = require('express');

// exports.isLoggedIn = (req, res, next) => {
// 	if (req.isAuthenticated()) {
// 		next();
// 	} else {
// 		res.status(403).send('로그인 필요');
// 	}
// };

// exports.isNotLoggedIn = (req, res, next) => {
// 	if (!req.isAuthenticated()) {
// 		next();
// 	} else {
// 		res.redirect('/');
// 	}
// };

exports.verifyToken = (req, res, next) => {
	const key = process.env.ACCESS_TOKEN_SECRET;
	const cookieInfo = req.headers.cookie.split("=");
	const token = cookieInfo[1]
	console.log(token);
	const decoded = jwt.verify(token, key);
	console.log(decoded);
	try{
		const decoded = jwt.verify(token, key);
		console.log(decoded);
		return next();
	} catch(error) {
		if(error.name === 'TokenExpiredError') {
			return res.status(419).json({
				status: 419,
				message: '토큰이 만료되었습니다.'
			});
		}
		return res.status(401).json({
			code: 401,
			message: '유효하지 않은 토큰입니다.'
		});
	}
}
