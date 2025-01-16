import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import compression from "compression";
import BlogRouter from "./routes/Blog.route.js";
import ContactRouter from "./routes/Contact.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// MIDDLEWARES

app.use(compression());
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES

app.use("/api/blogs", BlogRouter);
app.use("/api/contact", ContactRouter);
app.get("/", (req, res) => {
  res.send("API is Working!");
});

// DATABASE CONNECTION AND SERVER START

await mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB Connected!");
    app.listen(port, () => {
      console.log(`Server is Running on Port ${port}!`);
    });
  })
  .catch((error) => {
    console.error("Error while connecting to DB!", error);
  });
