import express from "express";
import {
  deleteStory,
  getStories,
  getStoryDetails,
  newStory,
  updateStory,
} from "../controllers/storiesController.js";
import { authorizeRoles, isAuthenticatedUser } from "../middlewares/auth.js";
const router = express.Router();

router.route("/stories").get(getStories);
router
  .route("/admin/stories")
  .post(isAuthenticatedUser, authorizeRoles("admin"), newStory);

router.route("/stories/:id").get(getStoryDetails);
router
  .route("/stories/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateStory);
router
  .route("/stories/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteStory);

export default router;
