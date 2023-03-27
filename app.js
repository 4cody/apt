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

// import User from "./models/user.js";
// const users = [
//   {
//     name: "John",
//     email: "john@example.com",
//     password: "password",
//     role: "owner",
//   },
//   {
//     name: "Jane",
//     email: "jane@example.com",
//     password: "password",
//     role: "renter",
//   },
//   {
//     name: "Bob",
//     email: "bob@example.com",
//     password: "password",
//     role: "renter",
//   },
//   {
//     name: "Alice",
//     email: "alice@example.com",
//     password: "password",
//     role: "renter",
//   },
//   {
//     name: "Mary",
//     email: "mary@example.com",
//     password: "password",
//     role: "renter",
//   },
//   {
//     name: "Tom",
//     email: "tom@example.com",
//     password: "password",
//     role: "renter",
//   },
//   {
//     name: "Sarah",
//     email: "sarah@example.com",
//     password: "password",
//     role: "owner",
//   },
//   {
//     name: "Eve",
//     email: "eve@example.com",
//     password: "password",
//     role: "owner",
//   },
//   {
//     name: "Alex",
//     email: "alex@example.com",
//     password: "password",
//     role: "renter",
//   },
//   {
//     name: "Mike",
//     email: "mike@example.com",
//     password: "password",
//     role: "renter",
//   },
//   {
//     name: "Lucy",
//     email: "lucy@example.com",
//     password: "password",
//     role: "renter",
//   },
//   {
//     name: "David",
//     email: "david@example.com",
//     password: "password",
//     role: "renter",
//   },
// ];
// User.insertMany(users)
//   .then(() => {
//     console.log("Users inserted successfully");
//   })
//   .catch((err) => {
//     console.log("Error inserting users", err);
//   });

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
