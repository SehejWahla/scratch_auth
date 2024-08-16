import express from "express";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();

connectDB();

const port = process.env.PORT || 5001;

import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("server is running");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server running on port ${port}`));
