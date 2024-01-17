import { prisma } from "@/lib/prisma";

export interface IDeleteTaskRepository {
    execute(taskId: string): Promise<void>;
}

export class PrismaDeleteTaskRepository implements IDeleteTaskRepository {
    async execute(taskId: string) {
        await prisma.task.delete({
            where: {
                id: taskId,
            },
        });
    }
}
