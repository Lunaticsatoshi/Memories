import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => {
        console.log("Connected to database");
      });
  } catch (err) {
      console.log("error:", err);
  }
};

export default connectDB;
