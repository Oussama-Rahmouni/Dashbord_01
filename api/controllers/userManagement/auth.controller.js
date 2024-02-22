import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User';

// Function to generate an access token
const generateAccessToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '15m' });
}

// Function to generate a refresh token
const generateRefreshToken = (userId) => {
    return jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET);
}

// Controller function to handle user login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // Validate password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // Generate tokens
        const accessToken = generateAccessToken(user._id);
        const refreshToken = generateRefreshToken(user._id);

        // Send tokens in the response
        res.status(200).json({ accessToken, refreshToken });
    } catch (error) {
        console.error(`Error logging in: ${error.message}`);
        res.status(500).json({ error: "An error occurred while logging in" });
    }
}

// Controller function to handle user logout
export const logout = async (req, res) => {
    // No action required for logout with JWT tokens, client handles token invalidation
    res.status(204).send(); // Respond with no content
}
