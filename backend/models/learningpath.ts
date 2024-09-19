import { model, Schema, Document } from "mongoose";
import { LearningPath } from "../interfaces";

const learningPathSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  files: [
    {
      url: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
    },
  ],
  prereqIds: [
    {
      type: Schema.Types.ObjectId,
      ref: "LearningPath",
    },
  ],
  description: {
    type: String,
    required: true,
  },
  enrolled: [
    {
      type: Schema.Types.ObjectId,
      ref: "Employee",
    },
  ],
});

const learningPathModel = model<LearningPath & Document>(
  "LearningPath",
  learningPathSchema
);

export default learningPathModel;
