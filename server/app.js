const express = require('express');
const path = require('path');

// Session
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors');

// import middleWare
const adminMiddleware = require('./middleware/admin');

// import Routers
const loginRouter = require('./routes/login.router');
const logoutRouter = require('./routes/logout.router');
const isAuthRouter = require('./routes/isAuth.router');
const wordsRouter = require('./routes/words.router')
const eventRouter = require('./routes/events.router')

const PORT = process.env.PORT || 5000;

const app = express();


const sessionConfig = {
  name: 'user_sid',
  secret: 'some_secret_key',
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
  store: new FileStore(),
};


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

app.use(adminMiddleware);

app.use('/signin', loginRouter);
app.use('/logout', logoutRouter);
app.use('/isauth', isAuthRouter);
app.use('/words', wordsRouter)
app.use('/event', eventRouter)


app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
