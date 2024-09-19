import express from "express";
import raExpressMongoose from "express-mongoose-ra-json-server";
import learningPathModel from "../models/learningpath";

const router = express.Router();

router.use(
  "/",
  raExpressMongoose(learningPathModel, {
    q: ["name", "description"],
    allowedRegexFields: ["name", "description"],
  })
);

export default router;
