// import { model, Schema } from "mongoose";
const { model, Schema } = require("mongoose");

const todoSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Todo", todoSchema);
