import fastify from "fastify";
import { createTaskController, updateTaskController } from "./controllers/";

export const app = fastify();

app.post("/tasks", createTaskController);
app.patch("/tasks/:taskId", updateTaskController);
