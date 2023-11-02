import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Story from "../models/story.js";
import APIFeatures from "../utils/apiFeatures.js";
import ErrorHandler from "../utils/errorHandler.js";

// get all stories  => /api/v1/stories

export const getStories = catchAsyncErrors(async (req, res, next) => {
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

// Create new comment    =>    /api/v1/comments
export const createStoryComment = catchAsyncErrors(async (req, res, next) => {
  const { comment, storyId } = req.body;

  const review = {
    user: req?.user?._id,
    name: req.user.name,

    comment,
  };

  const story = await Story.findById(storyId);
  if (!story) {
    return next(new ErrorHandler("Story not found", 404));
  }
  const isReviewed = story?.comments?.find(
    (s) => s.user.toString() === req?.user?._id.toString()
  );
  // update comment
  if (isReviewed) {
    story.comments.forEach((msg) => {
      if (msg?.user?.toString() === req?.user?._id.toString()) {
        msg.comment = comment;
      }
    });
    // create a new comment
  } else {
    story.comments.push(review);
    story.numOfComments = story.comments.length;
  }

  await story.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Get story comments    =>   /api/v1/comments
export const getStoryComments = catchAsyncErrors(async (req, res, next) => {
  const story = await Story.findById(req.query.id);
  if (!story) {
    return next(new ErrorHandler("Story not found", 404));
  }
  res.status(200).json({
    success: true,
    comments: story.comments,
  });
});

// Delete story comments    =>   /api/v1/admin/comments
export const deleteComment = catchAsyncErrors(async (req, res, next) => {
  let story = await Story.findById(req.query.storyId);
  if (!story) {
    return next(new ErrorHandler("Story not found", 404));
  }

  const comments = story?.comments?.filter(
    (comment) => comment._id.toString() !== req?.query?.id.toString()
  );
  const numOfComments = comments.length;
  story = await Story.findByIdAndUpdate(
    req.query.storyId,
    {
      comments,
      numOfComments,
    },
    {
      new: true,
    }
  );

  res.status(200).json({
    success: true,
    story,
  });
});
