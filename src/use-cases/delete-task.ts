import { IDeleteTaskRepository } from "@/repositories/prisma/";

interface DeleteTaskUseCaseRequest {
    taskId: string;
}

export class DeleteTaskUseCase {
    constructor(private deleteTaskRepository: IDeleteTaskRepository) {}

    async execute({ taskId }: DeleteTaskUseCaseRequest): Promise<void> {
        await this.deleteTaskRepository.execute(taskId);
    }
}
