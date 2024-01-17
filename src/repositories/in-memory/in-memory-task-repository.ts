import { Task, Prisma } from "@prisma/client";
import { ICreateTaskRepository, IDeleteTaskRepository } from "../prisma";

export class InMemoryCreateTaskRepository implements ICreateTaskRepository {
    public tasks: Task[] = [];

    async execute(data: Prisma.TaskCreateInput) {
        const task = {
            id: "9f4c42dc-38d3-43fe-8bc7-4eff1866c9c4",
            title: "Estudar typescript",
            description: "Estudar typescript durante 3 horas todos os dias",
            color: "blue",
            isFavorited: false,
        };

        this.tasks.push(task);

        return task;
    }
}
