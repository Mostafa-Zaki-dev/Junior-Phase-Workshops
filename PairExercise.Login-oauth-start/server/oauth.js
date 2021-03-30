const router = require('express').Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const { User } = require('./db');
require('../secrets');

const verificationCallback = async (accessToken, refreshToken, profile, done) => {
  try {
    console.log('profile returned: ', profile);
    const [user] = await User.findOrCreate({
      where: {
        googleId: profile.id,
      },
      defaults: {
        email: profile._json.email,
        imageUrl: profile._json.picture,
      },
    });
    console.log('[user] from User.findOrCreate >>>', user);
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
