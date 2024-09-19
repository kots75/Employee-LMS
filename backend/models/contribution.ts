import { model, Schema, Document } from "mongoose";
import { Contribution } from "../interfaces";

const contributionSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  employeeId: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
  },
  learningPathId: {
    type: Schema.Types.ObjectId,
    ref: "LearningPath",
  },
});

const contributionModel = model<Contribution & Document>(
  "Contribution",
  contributionSchema
);

export default contributionModel;
