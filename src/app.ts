import fastify from "fastify";

import cors from "@fastify/cors";

import {
    createTaskController,
    deleteTaskController,
    getTaskController,
    updateTaskController,
} from "./controllers/";

export const app = fastify();

app.register(cors, {
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type"],
});

app.get("/tasks", getTaskController);
app.post("/tasks", createTaskController);
app.patch("/tasks/:taskId", updateTaskController);
app.delete("/tasks/:taskId", deleteTaskController);
