import { IUpdateTaskRepository } from "@/repositories/prisma";
import { Task } from "@prisma/client";

interface UpdateTaskUseCaseRequest {
    taskId: string;
    title?: string;
    description?: string;
    color?: string;
    isFavorited?: boolean;
}

interface UpdateTaskUseCaseResponse {
    updatedTask: Task;
}

export class UpdateTaskUseCase {
    constructor(private updateTaskRepository: IUpdateTaskRepository) {}

    async execute({
        taskId,
        title,
        description,
        color,
        isFavorited,
    }: UpdateTaskUseCaseRequest): Promise<UpdateTaskUseCaseResponse> {
        const dataToUpdate: Partial<Task> = {
            title,
            description,
            color,
            isFavorited,
        };

        const updatedTask = await this.updateTaskRepository.execute(
            taskId,
            dataToUpdate
        );

        return {
            updatedTask,
        };
    }
}
