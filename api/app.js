const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors')
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(
  new JWTstrategy(
    {
      secretOrKey: 'secret',
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    },
    async (token, done) => {
      try {
        return done(null, token);
      } catch (error) {
        done(error);
      }
    }
  )
);

const routes = require('./routes/routes');

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/user', passport.authenticate('jwt', { session: false }), routes);

// Handle errors.
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(3001, () => {
  console.log('Server started.')
});