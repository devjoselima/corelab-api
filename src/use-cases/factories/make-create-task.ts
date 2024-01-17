import { PrismaCreateTaskRepository } from "@/repositories/prisma/create-task";
import { CreateTaskUseCase } from "../create-task";

export const makeCreateTaskUseCase = () => {
    const prismaTaskRepository = new PrismaCreateTaskRepository();
    const createTaskUseCase = new CreateTaskUseCase(prismaTaskRepository);

    return createTaskUseCase;
};
