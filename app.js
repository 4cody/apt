import express from "express";
import mongoose from "mongoose";
import createError from "http-errors";
import logger from "morgan";
import dotenv from "dotenv";

dotenv.config();

// ROUTER IMPORTS
import propertyRouter from "./routes/propertyRouter.js";
import userRouter from "./routes/userRouter.js";

const db = process.env.MONGO_URI;

const connectDB = async () => {
  console.log("Attempting db connection..");
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//  Cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Orgin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/", userRouter);
app.use("/properties", propertyRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

const PORT = process.env.PORT || 8080;

connectDB();
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
