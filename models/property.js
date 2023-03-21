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
});

export default mongoose.model("Property", propertySchema);
