const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const usersRouter = require('./api/user/getUsers');
const theaterRouter = require('./api/theater/getTheater');
const theatersRouter = require('./api/theater/getTheaters');
const sessionRouter = require('./api/session/getSessions');

const app = express();

const setup = require('./DB/mongoose');

app.use(bodyParser.json());
app.use(usersRouter);
app.use(theaterRouter);
app.use(theatersRouter);
app.use(sessionRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started ${process.env.PORT}`);
});

setup();