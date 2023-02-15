import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import MainRouter from "./routes/main.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", MainRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
});
