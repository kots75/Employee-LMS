import express from "express";
import raExpressMongoose from "express-mongoose-ra-json-server";
import employeeModel from "../models/employee";

const router = express.Router();

router.use("/", raExpressMongoose(employeeModel));

export default router;
