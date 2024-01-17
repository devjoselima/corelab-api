import fastify from "fastify";
import {
    createTaskController,
    deleteTaskController,
    getTaskController,
    updateTaskController,
} from "./controllers/";

export const app = fastify();

app.get("/tasks", getTaskController);
app.post("/tasks", createTaskController);
app.patch("/tasks/:taskId", updateTaskController);
app.delete("/tasks/:taskId", deleteTaskController);
