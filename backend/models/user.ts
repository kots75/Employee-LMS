import { model, Schema, Document } from "mongoose";
import { User } from "../interfaces";

const userSchema: Schema = new Schema({
  id: Number,
  name: String,
  email: String,
});

const userModel = model<User & Document>("User", userSchema);

export default userModel;
