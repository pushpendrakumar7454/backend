import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "../router/auth.router.js";
import productRouter from "../router/product.router.js";
import cors from "cors";

const app = express();

app.use(
    cors({
        origin: "https://backend-iuwx.vercel.app",
        credentials: true,
    })
);

app.use(express.json());

app.use(cookieParser());

app.use("/api/auth", authRouter);

app.use("/api/products", productRouter);

export default app;