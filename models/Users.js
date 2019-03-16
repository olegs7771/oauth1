const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  facebook: {
    email: {
      type: String
    },
    token: {
      type: String
    },
    id: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Users = mongoose.model("user", UserSchema);
