const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require("./routes/api/users");
const passport = require("passport");

require("./models/Users");

const app = express();
app.use(cors());
app.get("/", (req, res) => res.send("Hello!"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());

//passport-facebook startegy
require("./config/passport")(passport);

//db config
const db = require("./config/keys").mongoURI;
// connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

//routes
app.use("/api/users/", users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port${port}`));
