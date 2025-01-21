import mongoose, { Schema } from "mongoose";

const layoutSchema = new Schema(
  {
    name: {
      type: String,
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

export default mongoose.models?.layout ||
  mongoose.model("layout", layoutSchema);
