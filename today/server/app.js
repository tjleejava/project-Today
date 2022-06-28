// const { application } = require('express');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const PORT = 8888;

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

const menuRouter = require('./src/routes/menu-route');
const memberRouter = require('./src/routes/member-route');

app.use('/menus', menuRouter);
app.use('/members', memberRouter);

app.listen(PORT, () => console.log('listening on port 8888...'));

