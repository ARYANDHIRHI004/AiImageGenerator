import express from "express";
import cors from "cors";
import { ORIGIN } from "./constents.js";
import cookieParser from "cookie-parser";

const app = express();


app.use(
    cors({
        origin: ORIGIN,
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser())


// All routes imports
import generateRoute from "./routes/generate.routes.js";
import authRoute from "./routes/auth.routes.js";
import userhistoryRoute from "./routes/history.routes.js";

app.use("/api/v1/auth", authRoute)
app.use("/api/v1/generate", generateRoute);
app.use("/api/v1/history", userhistoryRoute);


export default app;
