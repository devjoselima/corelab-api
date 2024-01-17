import { PrismaDeleteTaskRepository } from "@/repositories/prisma/";
import { DeleteTaskUseCase } from "../";

export const makeDeleteTaskUseCase = () => {
    const prismaTaskRepository = new PrismaDeleteTaskRepository();
    const deleteTaskUseCase = new DeleteTaskUseCase(prismaTaskRepository);

    return deleteTaskUseCase;
};
