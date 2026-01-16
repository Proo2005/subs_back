import express from "express";
import {
  addSubscription,
  getSubscriptions,
  renewSubscription,
  deleteSubscription,
} from "../controller/subscriptionController.js";
import authMiddleware from "../middleware/authMiddleware.js";


const router = express.Router();

router.post("/", authMiddleware, addSubscription);
router.get("/", authMiddleware, getSubscriptions);

// 🔄 Renew
router.put("/:id/renew", authMiddleware, renewSubscription);

// 🛑 Delete
router.delete("/:id", authMiddleware, deleteSubscription);

export default router;
