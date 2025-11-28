
import mongoose, { Schema, Document } from "mongoose";

export interface ITool extends Document {
  name: string;
  description: string;
}

const ToolSchema = new Schema<ITool>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model<ITool>("Tool", ToolSchema);
