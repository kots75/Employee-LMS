import { model, Schema, Document } from "mongoose";
import { Category } from "../interfaces";

const categorySchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const categoryModel = model<Category & Document>("Category", categorySchema);

export default categoryModel;
