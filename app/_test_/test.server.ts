import express from "express";
import bodyParser from "body-parser";
import { router } from "../routes";

export function createServer() {
    const app = express();
    app.use(express.json());
    app.use('/api/items', router);
    return app;
}
