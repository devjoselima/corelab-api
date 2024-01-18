import { Task, Prisma } from "@prisma/client";
import {
    ICreateTaskRepository,
    IDeleteTaskRepository,
    IGetTasksRepository,
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
    constructor(private createTaskRepository: InMemoryCreateTaskRepository) {
        this.tasks = createTaskRepository.tasks;
    }

    async execute(taskId: string) {
        const idToRemove = taskId;

        const deletedTask = this.tasks.find((item) => item.id === idToRemove);

        if (deletedTask) {
            this.tasks = this.tasks.filter((item) => item.id !== idToRemove);
            return deletedTask;
        }

        return {
            id: "",
            title: "",
            description: "",
            color: "",
            isFavorited: false,
        };
    }
}

export class InMemoryGetTaskRepository implements IGetTasksRepository {
    public tasks: Task[] = [];
    constructor(private createTaskRepository: InMemoryCreateTaskRepository) {
        this.tasks = createTaskRepository.tasks;
    }

    async execute() {
        return this.tasks;
    }
}
