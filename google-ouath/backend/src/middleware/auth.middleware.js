import { decode } from "jsonwebtoken";
import { readAccessToken } from "../utils/auth.utils.js";

export const authenticated = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      return res.status(401).json({
        message: "Authorization header not found",
      });
    }

    const token = authorization.split(" ")[1];

    const decoded = readAccessToken(token);

    if (!decoded) {
      return res.status(401).json({
        message: "invalid access token",
      });
    }

    req.user = decoded;
    next();
    
  } catch (error) {
    return res.status(500).json({
      message: "token expire",
    });
  }
};
