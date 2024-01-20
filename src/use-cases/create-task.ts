import { ICreateTaskRepository } from "@/repositories/prisma/create-task";
import { Task } from "@prisma/client";

interface CreateTaskUseCaseRequest {
    title: string;
    description: string;
    color: string;
    isFavorited?: boolean;
}

interface CreateTaskUseCaseResponse {
    task: Task;
}

export class CreateTaskUseCase {
    constructor(private createTaskRepository: ICreateTaskRepository) {}

    async execute({
        title,
        description,
        color,
        isFavorited,
    }: CreateTaskUseCaseRequest): Promise<CreateTaskUseCaseResponse> {
        if (title.length < 1) {
            throw new Error("Title can't be empty");
        }

        if (description.length < 1) {
            throw new Error("Description can't be empty");
        }

        const task = await this.createTaskRepository.execute({
            title,
            description,
            color,
            isFavorited,
        });

        return {
            task,
        };
    }
}
