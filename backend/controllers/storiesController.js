import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Story from "../models/story.js";
import APIFeatures from "../utils/apiFeatures.js";

// get all stories  => /api/v1/stories

export const getStories = catchAsyncErrors(async (req, res) => {
  const resPerPage = 3;
  const apiFeatures = new APIFeatures(Story, req.query)
    .searchStory()
    .filterStories();

  let stories = await apiFeatures.query;
  let filteredStoryCount = stories.length;

  apiFeatures.pagination(resPerPage);
  stories = await apiFeatures.query.clone();

  res.status(200).json({
    filteredStoryCount,
    stories,
  });
});

// Create new story => /api/v1/admin/stories
export const newStory = catchAsyncErrors(async (req, res) => {
  const story = await Story.create(req.body);
  req.body.user = req.user._id;
  res.status(200).json({
    story,
  });
});

// Get single story details => /api/v1/stories/:id
export const getStoryDetails = catchAsyncErrors(async (req, res) => {
  const story = await Story.findById(req?.params?.id);

  if (!story) {
    return next(new ErrorHandler("Story not found", 404));
  }

  res.status(200).json({
    story,
  });
});

// Update story details => /api/v1/stories/:id
export const updateStory = catchAsyncErrors(async (req, res) => {
  let story = await Story.findById(req?.params?.id);

  if (!story) {
    return next(new ErrorHandler("Story not found", 404));
  }

  story = await Story.findByIdAndUpdate(req?.params?.id, req.body, {
    new: true,
  });

  res.status(200).json({
    story,
  });
});

// Delete story details => /api/v1/stories/:id
export const deleteStory = catchAsyncErrors(async (req, res) => {
  let story = await Story.findById(req?.params?.id);

  if (!story) {
    return next(new ErrorHandler("Story not found", 404));
  }

  await story.deleteOne();

  res.status(200).json({
    message: "Story deleted",
  });
});
