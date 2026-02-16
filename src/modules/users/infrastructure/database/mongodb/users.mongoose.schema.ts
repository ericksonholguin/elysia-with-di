import { Schema, model } from "mongoose";

const UsersSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
  },
  { timestamps: true }
);

export const UsersModel = model("users", UsersSchema, "users");
