import mongoose from "mongoose";

const Schema = mongoose.Schema;

const propertySchema = new Schema({
  address: {
    type: String,
    default: "",
  },
  occupancy: {
    type: String,
    default: "",
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default mongoose.model("Property", propertySchema);
