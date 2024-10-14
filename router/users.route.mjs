// router/users.route.mjs
import express from "express";
import {
  createUser,
  deleteUser,
  getUserbyId,
  getUsers,
  updateUser,
} from "../controllers/users.controller.mjs"; // Import the getUsers function

const router = express.Router();

// Set up the route for fetching users
router.get("/get", getUsers);
router.get("/get/:id", getUserbyId);
router.post("/create", createUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);
export default router;
