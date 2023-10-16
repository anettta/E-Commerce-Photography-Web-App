import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Story from "../models/story.js";

// get all stories  => /api/v1/stories

export const getStories = catchAsyncErrors(async (req, res) => {
  const stories = await Story.find();

  res.status(200).json({
    stories,
  });
});

// Create new story => /api/v1/admin/stories
export const newStory = async (req, res) => {
  const story = await Story.create(req.body);

  res.status(200).json({
    story,
  });
};

// Get single story details => /api/v1/stories/:id
export const getStoryDetails = async (req, res) => {
  const story = await Story.findById(req?.params?.id);

  if (!story) {
    return res.status(404).json({
      error: "Story not found",
    });
  }

  res.status(200).json({
    story,
  });
};

// Update story details => /api/v1/stories/:id
export const updateStory = async (req, res) => {
  let story = await Story.findById(req?.params?.id);

  if (!story) {
    return res.status(404).json({
      error: "Story not found",
    });
  }

  story = await Story.findByIdAndUpdate(req?.params?.id, req.body, {
    new: true,
  });

  res.status(200).json({
    story,
  });
};

// Update story details => /api/v1/stories/:id
export const deleteStory = async (req, res) => {
  let story = await Story.findById(req?.params?.id);

  if (!story) {
    return res.status(404).json({
      error: "Story not found",
    });
  }

  await story.deleteOne();

  res.status(200).json({
    message: "Story deleted",
  });
};
