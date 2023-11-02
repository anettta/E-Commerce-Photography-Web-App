import express from "express";
const router = express.Router();

import {
  newOrder,
  getSingleOrder,
  myOrders,
  allOrders,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js";
import { isAuthenticatedUser, authorizeRoles } from "../middlewares/auth.js";

router.route("/orders/new").post(isAuthenticatedUser, newOrder);

router.route("/orders/:id").get(isAuthenticatedUser, getSingleOrder);
router.route("/me/orders").get(isAuthenticatedUser, myOrders);
router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authorizeRoles("admin"), allOrders);

router
  .route("/admin/orders/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);

export default router;
