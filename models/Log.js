import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  date: String,
  urge: Number,
  action: String,
  outcome: String,
  notes: String,
});

export default mongoose.model("Log", logSchema);
