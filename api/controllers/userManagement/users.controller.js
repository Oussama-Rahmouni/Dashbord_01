import {User} from '../../models/user/index.js';
import bcrypt from 'bcryptjs';
export const addUser = async (req, res) => {
    try {
        // Validate required fields
        const { username, password, role, email, etat } = req.body;
        if (!username || !password || !role || !email || !etat) {
            throw new Error("All fields are required");
        }
        
        // Check if user with the same email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error("User with this email already exists");
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

        // Create new user with hashed password
        const newUser = await User.create({
            username,
            password: hashedPassword,
            role,
            email,
            etat
        });
        
        // Send response
        res.status(200).json({ newUser });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const updateUser = async (userId, userData) => {
    try {
        // Check if user exists
        const user = await User.findById(userId);
        if (!user) {
            throw new Error("User not found");
        }

        // Update user data
        Object.assign(user, userData);
        await user.save();

        return user;
    } catch (error) {
        throw new Error(`Error updating user: ${error.message}`);
    }
}

export const deleteUser = async (userId) => {
    try {
        // Check if user exists
        const user = await User.findById(userId);
        if (!user) {
            throw new Error("User not found");
        }

        // Delete user
        await user.remove();

        return user;
    } catch (error) {
        throw new Error(`Error deleting user: ${error.message}`);
    }
}

export const getUser = async (userId) => {
    try {
        // Find user by ID
        const user = await User.findById(userId);
        if (!user) {
            throw new Error("User not found");
        }

        return user;
    } catch (error) {
        throw new Error(`Error getting user: ${error.message}`);
    }
}

export const getAllUsers = async () => {
    try {
        // Find all users
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error(`Error getting all users: ${error.message}`);
    }
}