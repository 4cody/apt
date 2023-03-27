import express from "express";
import Property from "../models/property.js";
import auth from "../utils/auth.js";

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    try {
      const properties = await Property.find({});

      res.status = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(properties);
    } catch (err) {
      res.json(err);
      console.log(err);
    }
  })
  .post(auth, async (req, res) => {
    try {
      const { address, occupancy } = req.body;
      const userId = req.user._id; // get user id from auth middleware

      // Create new object and set owner field to user id
      const newProperty = new Property({ address, occupancy, owner: userId });
      await newProperty.save();

      // Return success message
      res.status = 200;
      res.json({
        message: "Object created successfully",
        property: newProperty,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  })
  .put()
  .delete();

router
  .route("/:propertyId")
  .get(async (req, res) => {
    const property = await Property.findById(req.params.propertyId);

    if (!property) {
      res.send("No Prop with that ID");
    }

    res.status = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(property);
  })
  .post()
  .put()
  .delete();

export default router;
