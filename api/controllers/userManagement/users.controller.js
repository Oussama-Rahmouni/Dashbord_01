import User from '../models/User';

export const addUser = async (userData) => {
    try {
        // Validate required fields
        const { username, password, role, email, etat } = userData;
        if (!username || !password || !role || !email || !etat) {
            throw new Error("All fields are required");
        }
        
        // Check if user with the same email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error("User with this email already exists");
        }

        // Create new user
        const newUser = await User.create(userData);
        return newUser;
    } catch (error) {
        throw new Error(`Error adding user: ${error.message}`);
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