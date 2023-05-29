const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./routes');
const helpers = require('./utils/helpers');
const middleware = require('./middleware');
const Handlebars = require('handlebars');
const moment = require('moment');
// const userRoutes = require('./routes/api/userRoutes');
// const tagRoutes = require('./routes/api/tagRoutes');
//const routes = require('./controllers');
const dotenv = require('dotenv').config();

const sequelize = require('./config/connection');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({
  defaultLayout: 'main',
  helpers: helpers,
  partialsDir: 'views/partials/',
  layoutsDir: 'views/layouts/'
});

const sess = {
  secret: process.env.SECRET,
  cookie: {
    maxAge: 9999999999,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

Handlebars.registerHelper('formatDate', function(date, format) {
  return moment(date).format(format);
});

app.use(session(sess));
app.use(middleware.auth.setUser);
// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/users', userRoutes);
// app.use('/tags', tagRoutes)
app.use('/', routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening, BANG'));
});
