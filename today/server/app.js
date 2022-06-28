// const { application } = require('express');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(fileUpload());

const menuRouter = require('./src/routes/menu-route');
const challengeRouter = require('./src/routes/challenge-route');

app.use('/menus', menuRouter);
app.use('/challenges', challengeRouter);


app.listen(8888, () => console.log('listening on port 8888...'));

