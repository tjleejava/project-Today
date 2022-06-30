// const { application } = require('express');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const fileUpload = require('express-fileupload');


const app = express();
const PORT = 8888;

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(fileUpload());
app.use(express.static('public'));

const menuRouter = require('./src/routes/menu-route');
const memberRouter = require('./src/routes/member-route');

const challengeRouter = require('./src/routes/challenge-route');
app.use('/menus', menuRouter);
app.use('/members', memberRouter);
app.use('/challenges', challengeRouter);

app.listen(PORT, () => console.log('listening on port 8888...'));

