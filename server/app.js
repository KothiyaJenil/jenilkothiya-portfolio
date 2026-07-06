import express from "express";
import cors from "cors";
import morgan from "morgan";

import { authRouter } from "./routers/auth.route.js";
import { projectRouter } from "./routers/project.route.js";
import { profileRoute } from "./routers/profile.route.js";

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        credentials: true,
    })
);
app.use(express.json());
app.use(morgan("dev"));


app.use("/api/auth", authRouter);
app.use("/api/projects", projectRouter);
app.use("/api/profile", profileRoute);

export default app;
