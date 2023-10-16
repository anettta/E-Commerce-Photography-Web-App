import mongoose from "mongoose";

const storySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter story title"],
      trim: true,
      maxLength: [100, "Title cannot exceed 100 characters"],
    },

    story: {
      type: String,
      required: [true, "Please enter product description"],
    },

    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, "Please select category for this story"],
      enum: {
        values: ["Environment", "Nature Appreciation", "People"],
        message: "Please select correct category for this story",
      },
    },
    author: {
      type: String,
      required: [true, "Please enter author"],
    },

    numOfComments: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Story", storySchema);
