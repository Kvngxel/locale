import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { authUser, registerUser, updateProfile, deleteUser, userProfile } from "../controllers/userControllers.js";

const router = express.Router();

router.post("/login", authUser);
router
  .route("/")
  .post(registerUser)
  .get(userProfile)
  .put(protect, updateProfile)
  .delete(protect, deleteUser);

export default router;
