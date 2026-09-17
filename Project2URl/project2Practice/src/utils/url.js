import crypto from "crypto";

export const generateCode = () => {
  return crypto.randomBytes(4).toString("hex").slice(0, 6);
};