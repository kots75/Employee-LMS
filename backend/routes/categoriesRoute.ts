import express from "express";
import raExpressMongoose from "express-mongoose-ra-json-server";
import categoryModel from "../models/category";

const router = express.Router();

router.use("/", raExpressMongoose(categoryModel));

export default router;
