import mongoose from "mongoose";
import Greeting from "../../models/Greeting";

const connectToDatabase = async () => {
  const uri = process.env.MONGODB_URI;

  if (mongoose.connections[0].readyState) {
    console.log("Already connected to database");
    return;
  }

  await mongoose.connect(uri);
};

export default async function handler(req, res) {
  if (req.method == "GET") {
    try {
      await connectToDatabase();

      const greeting = await Greeting.find();

      res.status(200).json(greeting);
    } catch (error) {
      console.error("Error feting greeting: ", error);
      res.status(500).json({ error: "Failed to fetch greeting" });
    }
  }
}
