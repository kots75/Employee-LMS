import { Schema, model, Document } from "mongoose";
import { Post } from "../interfaces";

const postSchema: Schema = new Schema({
  userId: { type: Number, required: true },
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
});

const Post = model<Post & Document>("Post", postSchema);

export default Post;
