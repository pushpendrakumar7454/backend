
import userModel from "../modules/auth.module.js";
import { readAccessToken, readRefreshToken } from "../utils/auth.js";

export const authenticate = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        if (!authorization) {
            return res.status(401).json({
                message: "Authorization header not found"
            });
        }
        const accessToken = authorization.split(" ")[1];
        if (!accessToken) {
            return res.status(401).json({
                message: "Access token not found"
            });
        }

        const decoded = readAccessToken(accessToken);

        if (!decoded) {
            return res.status(401).json({
                message: "Invalid access token"
            });
        }

        req.user = decoded;

        next();

    } catch (error) {
        console.log("AUTH ERROR:", error);
        return res.status(401).json({
            message: "Invalid or expired access token"
        });
    }
};

