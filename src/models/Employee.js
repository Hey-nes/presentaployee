import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  languages: { type: String, required: true },
  hobby: { type: String, required: true },
  image: { type: String, required: true },
  started_year: { type: Number, required: true },
  quote: { type: String, required: true },
  fika: { type: String, required: true },
});

export default mongoose.models.Employee ||
  mongoose.model("Employee", EmployeeSchema);
