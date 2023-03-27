import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    enum: ["owner", "renter", "admin"],
    required: true,
    default: "renter",
  },
});

export default mongoose.model("User", userSchema);
