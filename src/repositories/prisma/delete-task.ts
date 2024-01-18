import { Task } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export interface IDeleteTaskRepository {
    execute(taskId: string): Promise<Task>;
}

export class PrismaDeleteTaskRepository implements IDeleteTaskRepository {
    async execute(taskId: string) {
        const deletedTask = await prisma.task.delete({
            where: {
                id: taskId,
            },
        });

        return deletedTask;
    }
}
