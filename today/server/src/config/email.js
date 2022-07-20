const nodemailer = require('nodemailer');

 const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "piggies97@gmail.com",
        pass: "xvlfkhoholhvbkvh"
    }
  });

  module.exports={
      smtpTransport
  }

  