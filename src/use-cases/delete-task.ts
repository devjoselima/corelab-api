import { IDeleteTaskRepository } from "@/repositories/prisma/";
import { Task } from "@prisma/client";

interface DeleteTaskUseCaseRequest {
    taskId: string;
}

interface DeleteTaskUseCaseResponse {
    deletedTask: Task;
}

export class DeleteTaskUseCase {
    constructor(private deleteTaskRepository: IDeleteTaskRepository) {}

    async execute({
        taskId,
    }: DeleteTaskUseCaseRequest): Promise<DeleteTaskUseCaseResponse> {
        const deletedTask = await this.deleteTaskRepository.execute(taskId);

        return {
            deletedTask,
        };
    }
}
