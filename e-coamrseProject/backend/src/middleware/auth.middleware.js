import userModel from "../modules/user.modulee.js";
import { readaccessToken } from "../utils/auth.js";

export const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "access token is required",
      });
    }

    const accessToken = authHeader.split(" ")[1];

    if (!accessToken) {
      return res.status(401).json({
        message: "access token is wrong",
      });
    }

    const decoded = readaccessToken(accessToken);

    const user = await userModel.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({
        message: "user not found",
      });
    }

    if (!user) {
      return res.status(401).json({
        message: "user not found",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log(error);

    return res.status(401).json({
      message: "token expired or invalid",
    });
  }
};

export default authenticate;
