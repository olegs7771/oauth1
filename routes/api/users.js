const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/test", (req, res) => {
  res.json({ msg: "response from test" });
});

router.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: "email" }),
  (req, res) => {}
);

router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  function(req, res) {
    return res.json();

    // Successful authentication, redirect home.
    res.redirect("/");
  }
);
//comment
module.exports = router;
