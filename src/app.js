import express from "express";
import { rateLimit } from "express-rate-limit";
import cors from "cors";

import dotenv from "dotenv";

dotenv.config();

const app = express();

// Cores
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST"],
    })
);

// Rate limiter to avoid misuse of the service and avoid cost spikes
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 500,
    standardHeaders: true,
    legacyHeaders: false,
    handler: (_, __, ___, options) => {
        throw (
            500,
            `There are too many requests.`
        );
    },
});

app.use(limiter);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

import statusCodes from "./lib/statusCodes.js";
import routes from '../routes/koha.routes.js';
import { connectToApiDatabase } from "./middlewares/dbconnect.middleware.js";
import apiDatabase from "./database/api.database.js";


app.use("/", connectToApiDatabase(apiDatabase), routes);


// Error handler middleware
app.use((req, res, next) => {
    res.status(statusCodes.NOT_FOUND[0]).json({ status: false, statusCode: statusCodes.NOT_FOUND[1], message: "Route not found!" });
});

export default app