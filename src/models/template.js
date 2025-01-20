import mongoose, { Schema } from "mongoose";

const templateSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      unique: true,
      trim: true,
    },
    html: {
      type: String,
      required: [true, "HTML is required"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models?.template ||
  mongoose.model("template", templateSchema);
