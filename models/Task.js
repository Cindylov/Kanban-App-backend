const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    title: String,
    description: String,

    status: {
      type: String,
      enum: ["todo", "progress", "done"],
      default: "todo",
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);