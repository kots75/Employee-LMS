import express from "express";
import raExpressMongoose from "express-mongoose-ra-json-server";
import adminModel from "../models/admin";
import bcrypt from "bcrypt";
import { Admin } from "../interfaces";

const router = express.Router();

router.use(
  "/",
  raExpressMongoose(adminModel, {
    async inputTransformer(input: Admin): Promise<Admin> {
      if (input.password) {
        const existingAdmin = await adminModel.findOne({
          _id: input.id,
        });
        if (!existingAdmin) {
          const salt = await bcrypt.genSalt();
          const passwordHash = await bcrypt.hash(input.password, salt);
          return Promise.resolve({ ...input, password: passwordHash });
        }
      }
      if (input.newpassword && input.newpassword !== "") {
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(input.newpassword, salt);
        return Promise.resolve({ ...input, password: passwordHash });
      }
      return Promise.resolve(input);
    },
  })
);

export default router;
