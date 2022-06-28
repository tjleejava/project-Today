const nodemailer = require('nodemailer');

const smtpTransport = nodemailer.createTransport({
    service: "Naver",
    auth: {
        user: "piggies97@naver.com",
        pass: "temPoPwd50735!"
    },
    tls: {
        rejectUnauthorized: false
    }
  });

  module.exports={
      smtpTransport
  }

  