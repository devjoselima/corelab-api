import { prisma } from "@/lib/prisma";
import { Prisma, Task } from "@prisma/client";

export interface TaskProps {
    title?: string;
    description?: string;
    color?: string;
    isFavorited?: boolean;
}

export interface IUpdateTaskRepository {
    execute(id: string, data: TaskProps): Promise<Task | null>;
}

export class PrismaUpdateTaskRepository implements IUpdateTaskRepository {
    async execute(id: string, data: Prisma.TaskCreateInput) {
        const updatedTask = await prisma.task.update({
            where: {
                id,
            },
            data,
        });

        return updatedTask;
    }
}
