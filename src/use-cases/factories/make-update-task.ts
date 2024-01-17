import { PrismaUpdateTaskRepository } from "@/repositories/prisma";
import { UpdateTaskUseCase } from "../update-task";

export const makeUpdateTaskUseCase = () => {
    const prismaUpdateTaskRepository = new PrismaUpdateTaskRepository();
    const updateTaskUseCase = new UpdateTaskUseCase(prismaUpdateTaskRepository);

    return updateTaskUseCase;
};
