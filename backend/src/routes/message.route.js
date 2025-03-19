import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMessages, getUserForSidebar } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/user", protectRoute, getUserForSidebar);
router.get("/:id", protectRoute, getMessages);

export default router;