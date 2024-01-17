import { prisma } from "@/lib/prisma";
import { Prisma, Task } from "@prisma/client";

export interface ICreateTaskRepository {
    execute(data: Prisma.TaskUncheckedCreateInput): Promise<Task>;
}

export class PrismaCreateTaskRepository implements ICreateTaskRepository {
    async execute(data: Prisma.TaskCreateInput) {
        const task = await prisma.task.create({
            data,
        });

        return task;
    }
}
