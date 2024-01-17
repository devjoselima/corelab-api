import fastify from "fastify";
import { createTaskController } from "./controllers/create-task";

export const app = fastify();

app.post("/tasks", createTaskController);
