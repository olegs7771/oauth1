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
        callbackURL: "http://localhost:3000/api/users/auth/facebook/callback"
      },
      (accessToken, refreshToken, profile, cb) => {
        console.log(profile);

        Users.findOne({ facebookId: profile.id }).then(res => {
          return cb(err, user);
        });
      }
    )
  );
};
