import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const protectRoute = async (req, res, next) => {
    try {
        const token = rwq.cookies.jwt;
        if (!token) {
            return res.status(400).json({ message: "Unauthorized - no token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) return res.status(400).json({ message: "Unauthorized - invalid token" });
        const user = await User.findById(decoded.userId).select("-password");
        if (!user) return res.status(404).json({ message: "Unauthorized - user not found" });

        req.user = user;
        next()
    } catch (error) {
        console.log("Error in protectRoute middleware: ", error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}