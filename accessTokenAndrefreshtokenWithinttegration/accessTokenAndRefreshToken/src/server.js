import app from "./app/app.js";
import { config } from "./config/confg.js";
import connectDb from "./config/db.config.js";

const port = config.PORT;

await connectDb()

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});