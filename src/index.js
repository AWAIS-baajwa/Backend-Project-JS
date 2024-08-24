import mongoose from "mongoose";
import express from "express";
import dontenv from "dotenv";
import { DB_NAME } from "./constant.js";
import connectDb from "./db/index.js";
import { app } from "./app.js";
// app = express();

dontenv.config({
  path: "./env",
});

connectDb()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is listning at ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("mongoDb connection failed !!!", error);
  });
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Error", error);
//       throw error;
//     });
//     app.listen(process.env.PORT),
//       () => {
//         console.log(`App is listning on port ${process.env.PORT}`);
//       };
//   } catch (error) {
//     console.error("ERROR", error);
//     throw err;
//   }
// })();
