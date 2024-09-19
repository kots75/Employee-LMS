import express from "express";
import raExpressMongoose from "express-mongoose-ra-json-server";
import userModel from "../models/user";

const router = express.Router();

router.use("/", raExpressMongoose(userModel));

export default router;
