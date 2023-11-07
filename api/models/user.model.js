import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "data:image/jpeg;base64,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",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
