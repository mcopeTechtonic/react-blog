require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const routes = require('./routes');
const { sequelize } = require('./models');

const app = express();
const PORT = process.env.PORT || 8080;
const corsOptions = {
  origin: 'http://localhost:1234',
};

// middleware magic
app.use(logger('dev'));
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/dist'));
}

app.use(routes);

// { force: process.env.DB_FORCE || false }
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server now listening on 'http://localhost:${PORT}'!`);
  });
});
