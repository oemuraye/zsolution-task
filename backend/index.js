import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/user.js";
import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send("Welcome to Auto-Mart App Api");
});

app.use("/user", userRoutes);
app.use("/posts", postRoutes);

const connectionURL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is up on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));