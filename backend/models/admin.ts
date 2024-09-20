import { model, Schema, Document } from "mongoose";
import { Admin } from "../interfaces";

const adminSchema: Schema = new Schema({
  name: String,
  email: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
});

const adminModel = model<Admin & Document>("Admin", adminSchema);

export default adminModel;
