import { IGetTasksRepository } from "@/repositories/prisma/";
import { Task } from "@prisma/client";

interface GetTaskUseCaseResponse {
    tasks: Task[];
}

export class GetTasksUseCase {
    constructor(private getTasksRepository: IGetTasksRepository) {}

    async execute(): Promise<GetTaskUseCaseResponse> {
        const tasks = await this.getTasksRepository.execute();

        return {
            tasks,
        };
    }
}
