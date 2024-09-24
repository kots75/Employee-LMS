import express from "express";
import raExpressMongoose from "express-mongoose-ra-json-server";
import adminModel from "../models/admin";

const router = express.Router();

router.use("/", raExpressMongoose(adminModel));

export default router;
