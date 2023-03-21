import mongoose from "mongoose";
import passportLocal from "passport-local-mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    default: "",
  },
  lastname: {
    type: String,
    default: "",
  },
  admin: {
    type: Boolean,
    default: false,
  },
});

userSchema.plugin(passportLocal);

export default mongoose.model("User", userSchema);
