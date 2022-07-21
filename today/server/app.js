// const { application } = require('express');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');



const app = express();
const PORT = 8888;

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(fileUpload());
app.use(express.static('public'));
app.use(cookieParser());

const menuRouter = require('./src/routes/menu-route');
const memberRouter = require('./src/routes/member-route');
const platformInquiryRouter =  require('./src/routes/platform-inquiries-route');
const challengeRouter = require('./src/routes/challenge-route');
const reportRouter = require('./src/routes/report-route');
const inviteRouter = require('./src/routes/invite-route');
const alarmRouter = require('./src/routes/alarm-route');

app.use('/alarms', alarmRouter);
app.use('/menus', menuRouter);
app.use('/members', memberRouter);
app.use('/challenges', challengeRouter);
app.use('/inquiries', platformInquiryRouter);
app.use('/reports', reportRouter);
app.use('/invites', inviteRouter);
app.get('/logout',(req,res)=>{
  console.log("logout", req.query.token)
  console.log("Cookies : ", req.cookies)
  res.clearCookie('token', {path: '/'});
});
app.get('/',(req, res) => {
  console.log("Cookies : ", req.cookies);
});



app.listen(PORT, () => console.log('listening on port 8888...'));

