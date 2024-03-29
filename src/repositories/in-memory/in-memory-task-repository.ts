import { Task, Prisma } from "@prisma/client";
import {
    ICreateTaskRepository,
    IDeleteTaskRepository,
    IGetTasksRepository,
    IUpdateTaskRepository,
    TaskProps,
} from "../prisma";

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

export class InMemoryDeleteTaskRepository implements IDeleteTaskRepository {
    public tasks: Task[] = [];

    async execute(taskId: string) {
        const idToRemove = taskId;

        const deletedTask = this.tasks.find((item) => item.id === idToRemove);

        if (!deletedTask) {
            return null;
        }

        return deletedTask;
    }
}

export class InMemoryGetTaskRepository implements IGetTasksRepository {
    public tasks: Task[] = [];

    async execute() {
        return this.tasks;
    }
}

export class InMemoryUpdateTaskRepository implements IUpdateTaskRepository {
    public tasks: Task[] = [];

    async execute(taskId: string, data: TaskProps): Promise<Task | null> {
        const updatedTaskIndex = this.tasks.findIndex(
            (task) => task.id === taskId
        );

        if (updatedTaskIndex === -1) {
            return null;
        }

        const updatedTask: Task = {
            ...this.tasks[updatedTaskIndex],
            ...data,
        };

        this.tasks[updatedTaskIndex] = updatedTask;

        return updatedTask;
    }
}
