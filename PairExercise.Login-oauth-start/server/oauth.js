const router = require('express').Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const { User } = require('./db');
require('../secrets');

const verificationCallback = async (accessToken, refreshToken, profile, done) => {
  try {
    console.log('<<< verificationCallback fired up >>>');
    // console.log('profile returned: ', profile);
    const [user] = await User.findOrCreate({
      where: {
        googleId: profile.id,
      },
      defaults: {
        email: profile._json.email,
        imageUrl: profile._json.picture,
      },
    });
    // console.log('[user] from User.findOrCreate >>>', user);
    done(null, user);
  } catch (error) {
    done(error);
  }
};

const strategy = new GoogleStrategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
  },
  verificationCallback
);

passport.use(strategy);

// utlimately gets triggered by the `done` of verification callback, happens ONCE when the user logs in via google
passport.serializeUser((user, done) => {
  done(null, user.id);
});
// gets triggered by our passport session middleware for EVERY request
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    // will mean that `req.user` is equal to the user we just found
    done(null, user);
  } catch (error) {
    done(error);
  }
});

router.get('/', passport.authenticate('google', { scope: 'email' }));

// handles the callback after Google has authenticated the user (GET /auth/google/callback)
router.get(
  '/callback',
  passport.authenticate('google', {
    successRedirect: '/home', // or wherever
    failureRedirect: '/', // or wherever
  })
);

module.exports = router;
