import express from "express";
import {
  deleteStory,
  getStories,
  getStoryDetails,
  newStory,
  updateStory,
} from "../controllers/storiesController.js";
const router = express.Router();

router.route("/stories").get(getStories);
router.route("/admin/stories").post(newStory);

router.route("/stories/:id").get(getStoryDetails);
router.route("/stories/:id").put(updateStory);
router.route("/stories/:id").delete(deleteStory);

export default router;
