const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const db = require('../models/index');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await db.User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await db.User.create({
        name: profile.displayName,
        googleId: profile.id,
        email: profile.emails[0].value,
        photo: profile.photos[0].value,
        googleClient: true,
        admin: false,
      });
      done(null, user);
    }
  )
);
