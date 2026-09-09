import { config } from "../config/confg.js";
import userModel from "../module/user.module.js";

import { varifyaccessToken } from "../utils/auth.js";
export const authenticate = async(req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            message: "invalid user",
        });
    }

    const decoded = varifyaccessToken(token)
    const user = await userModel.findById(decoded.id);
    req.user = user;
    next();
};