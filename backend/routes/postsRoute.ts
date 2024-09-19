import express from "express";
import raExpressMongoose from "express-mongoose-ra-json-server";
import Post from "../models/post";

const router = express.Router();

router.use("/", raExpressMongoose(Post));

export default router;
