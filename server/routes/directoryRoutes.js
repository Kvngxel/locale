import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { createDirectory, allDirectories, updateDirectory, deleteDirectory } from "../controllers/directoryControllers.js";

const router = express.Router();

router
  .route("/")
  .post(createDirectory)
  .get(allDirectories)
  .put(protect, updateDirectory)
  .delete(protect, deleteDirectory);

export default router;
