import bcrypt from "bcrypt";
import express from "express";
import raExpressMongoose from "express-mongoose-ra-json-server";
import { Employee } from "../interfaces";
import employeeModel from "../models/employee";

const router = express.Router();

router.use(
  "/",
  raExpressMongoose(employeeModel, {
    async inputTransformer(input: Employee): Promise<Employee> {
      if (input.password) {
        const existingEmployee = await employeeModel.findOne({
          _id: input.id,
        });
        if (!existingEmployee) {
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
