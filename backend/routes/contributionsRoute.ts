import express from "express";
import raExpressMongoose from "express-mongoose-ra-json-server";
import contributionModel from "../models/contribution";

const router = express.Router();

router.use(
  "/",
  raExpressMongoose(contributionModel, {
    q: ["title"],
    allowedRegexFields: ["title"],
  })
);

export default router;
