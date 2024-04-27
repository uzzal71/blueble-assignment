import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  name: {
    type: String,
    required: "Enter a name",
  },
  username: {
    type: String,
    required: "Enter a username",
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: "Enter a password",
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
  },
  create_date: {
    type: Date,
    default: Date.now,
  },
});
