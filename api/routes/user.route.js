import express from 'express';
import {
    addUser,
    updateUser,
    deleteUser,
    getUser,
    getAllUsers,
} from '../controllers/users.controller.js'
const router = express.Router();


router.post("add", addUser);
router.put("update", updateUser);
router.get("/user/:id", getUser);
router.get("/users", getAllUsers);
router.delete("/deluser", deleteUser)

export default router;