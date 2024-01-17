import { PrismaGetTasksRepository } from "@/repositories/prisma/";
import { GetTasksUseCase } from "../";

export const makeGetTaskUseCase = () => {
    const prismaTaskRepository = new PrismaGetTasksRepository();
    const getTaskUseCase = new GetTasksUseCase(prismaTaskRepository);

    return getTaskUseCase;
};
