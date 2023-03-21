import Property from "../models/property.js";

export const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find({});

    res.status = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(properties);
  } catch (err) {
    res.json(err);
    console.log(err);
  }
};

export const createProperty = async (req, res) => {
  try {
    const property = await Property.create(req.body);

    res.status = 204;
    res.setHeader("Content-Type", "application/json");
    res.json(property);
  } catch (err) {
    res.json(err);
    console.log(err);
  }
};

export const getPropertyById = async (req, res) => {
  const property = await Property.findById(req.params.propertyId);

  if (!property) {
    res.send("No Prop with that ID");
  }

  res.status = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(property);
};
