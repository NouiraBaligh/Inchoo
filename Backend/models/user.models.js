import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  adress: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
  },

  role: {
    type: String,
    default: "user",
  },

  status: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", userSchema);
export default User;