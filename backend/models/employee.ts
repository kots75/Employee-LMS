import { model, Schema, Document } from "mongoose";
import { Employee } from "../interfaces";

const employeeSchema: Schema = new Schema({
  name: String,
  position: String,
  email: String,
  enrolled: {
    type: [Schema.Types.ObjectId],
    ref: "LearningPath",
  },
});

const employeeModel = model<Employee & Document>("Employee", employeeSchema);

export default employeeModel;
