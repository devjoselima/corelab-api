import fastify from "fastify";
import {
    createTaskController,
    deleteTaskController,
    updateTaskController,
} from "./controllers/";

export const app = fastify();

app.post("/tasks", createTaskController);
app.patch("/tasks/:taskId", updateTaskController);
app.delete("/tasks/:taskId", deleteTaskController);
