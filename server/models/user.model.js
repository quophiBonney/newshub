const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      unique: true,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_640.png",
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("Users", UserSchema);

module.export = userModel;
