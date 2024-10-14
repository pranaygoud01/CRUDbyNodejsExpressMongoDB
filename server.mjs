import express from "express";
import mongoose from "mongoose";

import router from "./router/users.route.mjs";
const app = express();
//MiddleWare
app.use(express.json());
//Router
app.use("/api", router);
//Connection
mongoose.connect("mongodb://localhost:27017/apis").then(() => {
  console.log("Connected!");

  app.listen(4000, () => {
    console.log("Server Runs on 4000");
  });
});
