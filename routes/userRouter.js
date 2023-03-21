import express from "express";
import { unsupportedRoute } from "../controllers/unsupportedRoute.js";
import {
  userRegister,
  userLogin,
  userLogout,
  userIndex,
} from "../controllers/userController.js";
import passport from "passport";

const router = express.Router();

router
  .route("/")
  .get(userIndex)
  .post(unsupportedRoute)
  .put(unsupportedRoute)
  .delete(unsupportedRoute);

router
  .route("/register")
  .get(unsupportedRoute)
  .post(userRegister)
  .put(unsupportedRoute)
  .delete(unsupportedRoute);

router
  .route("/login")
  .get(unsupportedRoute)
  .post(passport.authenticate("local"), userLogin)
  .put(unsupportedRoute)
  .delete(unsupportedRoute);

router
  .route("/logout")
  .get(userLogout)
  .post(unsupportedRoute)
  .put(unsupportedRoute)
  .delete(unsupportedRoute);

export default router;
