
import express from "express";
import morgan from "morgan";
import productRouter from "../router/product.router.js";
import paymentRouter from "../router/product.router.js";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/product", productRouter);
app.use("/api/payment", paymentRouter);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

export default app;
