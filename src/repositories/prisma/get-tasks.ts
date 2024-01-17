import { prisma } from "@/lib/prisma";
import { Task } from "@prisma/client";

export interface IGetTasksRepository {
    execute(): Promise<Task[]>;
}

export class PrismaGetTasksRepository implements IGetTasksRepository {
    async execute() {
        const tasks = await prisma.task.findMany();

        return tasks;
    }
}
