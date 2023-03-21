import express from "express";
import { unsupportedRoute } from "../controllers/unsupportedRoute.js";
import {
  getAllProperties,
  createProperty,
  getPropertyById,
} from "../controllers/propertyController.js";
import Property from "../models/property.js";

const router = express.Router();

router
  .route("/")
  .get(getAllProperties)
  .post(createProperty)
  .put(unsupportedRoute)
  .delete(unsupportedRoute);

// router
//   .route("/register")
//   .get(unsupportedRoute)
//   .post(unsupportedRoute)
//   .put(unsupportedRoute)
//   .delete(unsupportedRoute);

router
  .route("/:propertyId")
  .get(getPropertyById)
  .post(unsupportedRoute)
  .put(unsupportedRoute)
  .delete(unsupportedRoute);

export default router;
