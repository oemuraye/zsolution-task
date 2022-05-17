import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  selectedFile: {
    type: String,
  },
  price: {
    type: Number,
    default: 0.0,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
