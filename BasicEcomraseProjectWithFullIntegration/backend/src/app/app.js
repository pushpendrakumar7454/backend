import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRouter from "../router/auth.router.js";
import productRouter from "../router/product.router.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://basic-e-comarse-p6dq.vercel.app"
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);

app.get("/api/all", (req, res) => {
  res.send("products");
});

export default app;