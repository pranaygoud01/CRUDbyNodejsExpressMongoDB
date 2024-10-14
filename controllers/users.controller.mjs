// controllers/users.controller.mjs
import User from "../models/users.model.mjs";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    return res.status(200).json(users);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};
export const getUserbyId = async (req, res) => {
  const id = req.params.id;
  try {
    const findMatch = await User.findById(id); // Use findById to search by ID
    if (!findMatch) {
      return res.status(404).json({ message: "User Not Found" });
    }
    return res.status(200).json(findMatch);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};
export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userup = await User.findByIdAndUpdate(id, req.body);
    if (!userup) return res.status(404).json({ message: "User Not Found" });
    const updatedUser = await User.findById(id);
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await User.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "User Not Found" });

    return res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};
