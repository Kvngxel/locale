import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
  createDirectory,
  directorydetails,
  allDirectories,
  updateDirectory,
  deleteDirectory,
  directoryLikes,
  likeDirectory,
  unlikeDirectory,
  addComment,
  deleteComment,
  directoryComments,
  dislikeDirectory,
  directoryDislikes,
  delDislike,
} from "../controllers/directoryControllers.js";

const router = express.Router();

router.get("/all", allDirectories);
router
  .route("/")
  .post(protect, createDirectory)
  .get(protect, directorydetails)
  .put(protect, updateDirectory)
  .delete(protect, deleteDirectory);
router
  .route("/like/:id")
  .post(protect, likeDirectory)
  .get(directoryLikes)
  .delete(protect, unlikeDirectory);
router
  .route("/dislike/:id")
  .post(protect, dislikeDirectory)
  .get(directoryDislikes)
  .delete(protect, delDislike);
router
  .route("/comment/:id")
  .post(protect, addComment)
  .get(protect, directoryComments)
  .delete(protect, deleteComment);

export default router;
