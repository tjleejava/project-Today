const { application } = require('express');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

const menuRouter = require('./src/routes/menu-route');

app.use('/menus', menuRouter);

app.listen(8888, () => console.log('listening on port 8888...'));

