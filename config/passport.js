const mongoose = require("mongoose");

const passport = require("passport");
const FacebookStrategy = require("passport-facebook");
const Users = mongoose.model("user");

module.exports = passport => {
  passport.use(
    new FacebookStrategy(
      {
        clientID: "991632717694701",
        clientSecret: "c27d128965b5b2a146d6c906d93da299",
        callbackURL: "http://localhost:3000/auth/facebook/callback"
      },
      (accessToken, refreshToken, profile, cb) => {
        Users.findOrCreate({ facebookId: profile.id }, function(err, user) {
          return cb(err, user);
        });
      }
    )
  );
};
