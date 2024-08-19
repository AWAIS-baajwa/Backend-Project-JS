import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

export default async function connectDb() {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `Mongodb connected !! DB host ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("mongodb connection failed", error);
    process.exit(1);
  }
}
