import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

export const createAccessToken = ({ userId, role }) => {
  const accessToken = jwt.sign({ userId, role }, config.ACCESS_TOKEN, {
    expiresIn: "15m",
  });

  return { accessToken };
};

export const createRefreshToken = ({ userId, role }) => {
  const refreshToken = jwt.sign({ userId, role }, config.REFRESH_TOKEN, {
    expiresIn: "7d",
  });

  return { refreshToken };
};
