import mongoose from "mongoose";

const GreetingSchema = new mongoose.Schema({
  greeting: { type: String, required: true },
});

export default mongoose.models.Greeting ||
  mongoose.model("Greeting", GreetingSchema);
