import mongoose from "mongoose";
import Employee from "../../models/Employee";

const connectToDatabase = async () => {
  const uri = process.env.MONGODB_URI;

  if (mongoose.connections[0].readyState) {
    console.log("Already connected to database");
    return;
  }

  await mongoose.connect(uri, {
    dbName: "employees",
  });
};

export default async function handler(req, res) {
  if (req.method == "GET") {
    try {
      await connectToDatabase();

      const employee = await Employee.find();

      res.status(200).json(employee);
    } catch (error) {
      console.error("Error fetching employees: ", error);
      res.status(500).json({ error: "Failed to fetch employees" });
    }
  }
}
