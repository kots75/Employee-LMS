import { model, Schema, Document } from "mongoose";
import { Employee } from "../interfaces";

const employeeSchema: Schema = new Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  email: { type: String, required: true },
  enrolled: {
    type: [Schema.Types.ObjectId],
    ref: "LearningPath",
  },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
});

const employeeModel = model<Employee & Document>("Employee", employeeSchema);

export default employeeModel;
